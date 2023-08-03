// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { MMKV } from 'react-native-mmkv';

const TOKEN = 'token';
const storage = new MMKV();

export type TokenType = {
  access: string;
  refresh: string;
};

export function getItem<T>(key: string): T {
  try {
    const value = storage.getString(key);
    return value ? JSON.parse(value) || null : null;
  } catch (e) {
    console.log('Error ', e);
    return null as any;
  }
}

export async function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}
export async function removeItem(key: string) {
  storage.delete(key);
}

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);
