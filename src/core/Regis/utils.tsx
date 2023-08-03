// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { MMKV } from 'react-native-mmkv';

const TOKENREGIS = 'tokenregis';
const storage = new MMKV();

export type RegisterType = {
  access: string;
  refresh: string;
  posid: string;
  mail: string;
  phone: string;
  name: string;
  ids: string;
  password: string;
  usertype: string;
  vpa: string;
  coibfeid: string;
};

export function getItem<T>(key: string): T {
  const value = storage.getString(key);
  try {
    return value ? JSON.parse(value) || null : null;
  } catch (e) {
    console.log('Error ', e);
    return value ? JSON.parse(value) || null : null;
  }
}

export async function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}
export async function removeItem(key: string) {
  storage.delete(key);
}

export const getRegis = () => getItem<RegisterType>(TOKENREGIS);
export const removeRegis = () => removeItem(TOKENREGIS);
export const setRegis = (value: RegisterType) =>
  setItem<RegisterType>(TOKENREGIS, value);
