/* eslint-disable max-lines-per-function */
/**
 * @ Author: Your name
 * @ Create Time: 2022-02-08 21:09:10
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:54:48
 * @ Description:
 */

import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { api } from '@/api/api';
import database from '@/database';
import type { User as ModelUser } from '@/database/model/User';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updatedUser: (user: User) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;

      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        await userCollection.create(
          // @ts-ignore
          (newUser: {
            user_id: any;
            name: any;
            email: any;
            driver_license: any;
            avatar: any;
            token: any;
          }) => {
            newUser.user_id = user.id;
            newUser.name = user.name;
            newUser.email = user.email;
            newUser.driver_license = user.driver_license;
            newUser.avatar = user.avatar;
            newUser.token = token;
          }
        );
      });

      setData({ ...user, token });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.read(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as User);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function updatedUser(user: User) {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.read(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update(
          // @ts-ignore
          (userData: {
            name: string;
            driver_license: string;
            avatar: string;
          }) => {
            userData.name = user.name;
            userData.driver_license = user.driver_license;
            userData.avatar = user.avatar;
          }
        );
      });

      setData(user);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUserData() {
      const userCollection = database.get<ModelUser>('users');
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User;
        api.defaults.headers.authorization = `Bearer ${userData.token}`;
        setData(userData);
      }
    }

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
        updatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
