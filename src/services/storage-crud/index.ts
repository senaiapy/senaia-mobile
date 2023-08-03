/**
 * @ Author: Your name
 * @ Create Time: 2022-02-08 21:10:53
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 19:02:27
 * @ Description:
 */

import { Env } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

// get all films_screen
export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('Error getData', e);
  }
};

// get all films_screen
export const getDataString = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    jsonValue != null ? JSON.parse(jsonValue) : null;
    let returno = JSON.stringify(jsonValue);
    returno = returno.replace(/[^\w\s]/gi, '');
    //console.log('DATA', returno);
    returno = returno.toString();
    return returno;
  } catch (e) {
    console.log('Error getDataString', e);
    return null;
  }
};

//save a
export const updateData = async (value: any, key: string) => {
  try {
    const dataStored = await getData(key);
    const jsonValueData = JSON.stringify(dataStored);
    await AsyncStorage.setItem(key, jsonValueData);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, jsonValue);
    // read merged item
    console.log('Data Update');
  } catch (e) {
    // saving error
    console.log('Error updateData');
  }
};

//save a OBJ
export const storeDataObj = async (value: any, key: string) => {
  try {
    const FileList: unknown[] = [];
    const DataStored = await getData(key);
    const values = { ...value };
    if (!DataStored) {
      FileList.push(values);
      await AsyncStorage.setItem(key, JSON.stringify(FileList));
    } else {
      DataStored.push(values);
      await AsyncStorage.setItem(key, JSON.stringify(DataStored));
    }
    // console.log('base  ', currentUser);
    console.log('OBJ Saved');
  } catch (e) {
    // saving error
    console.log('Error storeDataObj');
  }
};

//save a
export const storeOneData = async (value: any, key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Data Saved');
  } catch (e) {
    // saving error
    console.log('Error storeOneData');
  }
};
//save a OBJ
export const storeDataString = async (value: string, key: string) => {
  try {
    const DataStored = await getData(key);

    await AsyncStorage.setItem(key, value);

    console.log('Data Saved');
    return DataStored;
  } catch (e) {
    // saving error
    console.log('Error storeDataString');
  }
};

//delete a
export const removeOne = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Clear One.');
  } catch (e) {
    // remove error
    console.log('Error removeOne');
  }
};

// delete all
export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    console.log('ALL Data Cleared');
  } catch (e) {
    // clear error
    console.log('Error All Data Cleared');
  }
};

// get all keys from
export const getAllKeys = async () => {
  var keys: any;
  try {
    keys = await AsyncStorage.getAllKeys();
    if (Env.DEBUG === 'true') {
      console.log(keys);
    }
  } catch (e) {
    // read key error
    console.log('Error getAllKeys');
  }
};

export const deleteById = async (id: any, key: string) => {
  try {
    const dataStored = await getData(key);

    const myData = await dataStored.filter((item: any) => {
      return item.id !== id;
    });
    const jsonValue = JSON.stringify(myData);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Deleted By Id');
    return myData;
  } catch (e) {
    // read key error
    console.log('Error Deleted By Id');
  }
};

// verify if have data saved
export async function hasData(
  value: any,
  key: string
): Promise<boolean | undefined> {
  try {
    const dataStored = await getData(key);
    const hasDatas = dataStored.some((item: any) => item.id === value.id);
    if (hasDatas) {
      return true;
    }
    return false;
  } catch (e) {
    // read key error
    console.log('Error hasData');
  }
}

export async function getStoredData(keys: string) {
  const result = await getData(keys);
  // console.log('results ', result);
  return result;
}

export async function setStoredData(datos: any, keys: string) {
  await storeDataObj(datos, keys);
  //  console.log('movie', movies);
  //  const result = await getData(keysF);
  //  console.log('result', result);
}

export async function deleteStoredData(datos: any, keys: string) {
  deleteById(datos.id, keys);
  //  console.log('movie', movies);
  //  const result = await getData(keysF);
  //  console.log('result', result);
}
