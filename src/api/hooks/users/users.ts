/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 11:08:43
 * @ Description:
 */

import { Env } from '@env';

import ApiClient from '../index';
import type {
  CreateUserRequestPayload,
  CreateUserSuccessPayload,
  DeleteUserRequestPayload,
  ModifyUserRequestPayload,
  ModifyUserSuccessPayload,
  UserDetailsSuccessPayload,
  UsersRequestPayload,
  UsersSuccessPayload,
} from './types';

export async function getUsers({ pageParam, per_page }: UsersRequestPayload) {
  try {
    // https://reqres.in/@/api/users
    const response = await ApiClient.get<UsersSuccessPayload>(
      `${Env.API_URL}/users`,
      {
        params: {
          ...(pageParam && {
            page: pageParam,
          }),
          ...(per_page && {
            per_page,
          }),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('getUsers - Error: ', error);
    throw error;
  }
}

export async function getUserDetails(userId: any) {
  try {
    // https://reqres.in/@/api/users/1
    const response = await ApiClient.get<any>(
      `${Env.API_URL}/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error('getUserDetails - Error: ', error);
    throw error;
  }
}

export async function getUserDetail(userId: any) {
  try {
    const response = await ApiClient.get<UserDetailsSuccessPayload>(
      `${Env.API_URL}/users/${userId}`
    );

    return response.data;
  } catch (error) {
    console.error('getUserDetails - Error: ', error);
    throw error;
  }
}

export async function createUser({ name, job }: CreateUserRequestPayload) {
  try {
    const response = await ApiClient.post<CreateUserSuccessPayload>(
      '${env.API_URL}/users',
      {
        params: {
          name,
          job,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('createUser - Error: ', error);
    throw error;
  }
}

export async function modifyUser({
  userId,
  name,
  job,
}: ModifyUserRequestPayload) {
  try {
    // You can use also patch
    const response = await ApiClient.put<ModifyUserSuccessPayload>(
      `${Env.API_URL}/users/${userId}`,
      {
        params: {
          name,
          job,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('modifyUser - Error: ', error);
    throw error;
  }
}

export async function deleteUser({ userId }: DeleteUserRequestPayload) {
  try {
    const response = await ApiClient.delete(
      `${Env.API_URL}/users/${userId}`
    );

    return response.data;
  } catch (error) {
    console.error('deleteUser - Error: ', error);
    throw error;
  }
}
