import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

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
