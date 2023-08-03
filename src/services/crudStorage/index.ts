/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import AsyncStorage from '@react-native-async-storage/async-storage';

interface TStorage {
  userId: string;
  userMail: string;
  userPassword: string;
  userPrinterNumber: string;
  userCoibfeLastId: string;
  userTheme: string;
  userPosId: string;
  userKey: string;
  userServerIp: string;
}
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
const setDatas = async (key: string, data: any) => {
  let result = 'true';
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    result = 'false';
  }
  return result;
};
//---------------------------------------------------------------------------
const getDatas = async (key: string) => {
  let currentDadus = null;
  try {
    const savedDadus = await AsyncStorage.getItem(key);
    currentDadus = JSON.parse(savedDadus || '');
    //  console.log(currentDadus);
  } catch (error) {
    console.log(error);
  }
  return currentDadus;
};
//---------------------------------------------------------------------------
const getOneDatas = async (key: string, objKey: string) => {
  let currentDadus = null;
  try {
    const savedDadus = await AsyncStorage.getItem(key);
    const Dadus = JSON.parse(savedDadus || '');
    currentDadus = Dadus[objKey];
    console.log(currentDadus);
  } catch (error) {
    console.log(error);
  }
  return currentDadus;
};
//---------------------------------------------------------------------------
const updatePrinter = async (key: string, coibfe_print: string) => {
  let currentDadus = null;
  try {
    const savedDadus = await AsyncStorage.getItem(key);
    currentDadus = JSON.parse(savedDadus || '');
    currentDadus.coibfe_print = coibfe_print;
    await AsyncStorage.setItem(key, JSON.stringify(currentDadus));
    //  console.log(currentDadus);
  } catch (error) {
    console.log(error);
  }
  return currentDadus;
};
//---------------------------------------------------------------------------
const removeDatas = async (key: string) => {
  let result = { result: true };
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
    result = { result: false };
  }
  return result;
};
//---------------------------------------------------------------------------
const clearAllData = async () => {
  let result = true;
  try {
    const savedUser = await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
    result = false;
  }
  return result;
};
//---------------------------------------------------------------------------
const updateDatas = async (key: string, objKey: string, value: any) => {
  let currentDadus = null;
  try {
    //await AsyncStorage.mergeItem(key, JSON.parse(data));
    const savedDadus = await AsyncStorage.getItem(key);
    currentDadus = JSON.parse(savedDadus || '');
    currentDadus[objKey] = value;
    await AsyncStorage.setItem(key, JSON.stringify(currentDadus));
  } catch (error) {
    console.log(error);
  }
  return currentDadus;
};
//---------------------------------------------------------------------------
async function getData<T>(key: string): Promise<any> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('Error getData');
  }
}
//---------------------------------------------------------------------------
const storeOneDataObj = async (value: any, key: string) => {
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
//---------------------------------------------------------------------------
const storeOneDataString = async (value: string, key: string) => {
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
//---------------------------------------------------------------------------
async function createStorage<T>(id: string, item: T): Promise<boolean> {
  let returno = false;
  try {
    const FileList: unknown[] = [];
    const DataStored = await getData(id);
    const values = { ...item };
    if (!DataStored) {
      FileList.push(values);
      await AsyncStorage.setItem(id, JSON.stringify(FileList));
      returno = true;
    } else {
      DataStored.push(values);
      await AsyncStorage.setItem(id, JSON.stringify(DataStored));
      returno = true;
    }
    // console.log('base  ', currentUser);
    console.log('OBJ Saved');
  } catch (e) {
    // saving error
    console.log('Error storeDataObj');
  }
  return returno;
}
//---------------------------------------------------------------------------
async function updateStorage<T>(id: string, item: T): Promise<boolean> {
  let returno = false;
  try {
    const dataStored = await getData(id);
    const jsonValueData = JSON.stringify(dataStored);
    await AsyncStorage.setItem(id, jsonValueData);
    const jsonValue = JSON.stringify(item);
    await AsyncStorage.mergeItem(id, jsonValue);
    // read merged item
    console.log('Data Update');
    returno = true;
  } catch (e) {
    // saving error
    console.log('Error updateData');
  }
  return returno;
}
//---------------------------------------------------------------------------
async function findStorage<T>(id: string): Promise<any> {
  let returno = null;
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    jsonValue != null ? JSON.parse(jsonValue) : null;
    returno = JSON.stringify(jsonValue);
    returno = returno.replace(/[^\w\s]/gi, '');
    //console.log('DATA', returno);
    returno = returno.toString();
  } catch (e) {
    console.log('Error getDataString');
  }
  return returno;
}
//---------------------------------------------------------------------------
async function findOneStorage<T>(id: string, key: any): Promise<T | undefined> {
  let returno = null;
  try {
    const dataStored = await getData(id);
    returno = dataStored.some((item: any) => item.id === key.id);
  } catch (e) {
    // read key error
    console.log('Error hasData');
  }
  return returno;
}
//---------------------------------------------------------------------------
async function deleteStorage<T>(id: string): Promise<boolean> {
  let returno = false;
  try {
    await AsyncStorage.removeItem(id);
    console.log('Clear One.');
    returno = true;
  } catch (e) {
    // remove error
    console.log('Error removeOne');
  }
  return returno;
}
//---------------------------------------------------------------------------
async function deleteAllStorage<T>(): Promise<boolean> {
  let returno = false;
  try {
    await AsyncStorage.clear();
    console.log('Clear One.');
    returno = true;
  } catch (e) {
    // remove error
    console.log('Error removeOne');
  }
  return returno;
}
//---------------------------------------------------------------------------
async function deleteByIdStorage(id: any, key: string): Promise<boolean> {
  let returno = false;

  try {
    const dataStored = await getData(key);

    const myData = await dataStored.filter((item: any) => {
      return item.id !== id;
    });
    const jsonValue = JSON.stringify(myData);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Deleted By Id');
    //return myData;
    returno = true;
  } catch (e) {
    // read key error
    console.log('Error Deleted By Id');
  }
  return returno;
}
//---------------------------------------------------------------------------
// get all keys from
async function getAllKeysStorage() {
  var keys: any;
  try {
    keys = await AsyncStorage.getAllKeys();
    console.log(keys);
  } catch (e) {
    // read key error
    console.log('Error getAllKeys');
  }
  return keys;
}
//---------------------------------------------------------------------------
// verify if have data saved
async function hasDataStorage(
  value: any,
  key: string
): Promise<boolean | undefined> {
  let returno = false;
  try {
    const dataStored = await getData(key);
    const hasDatas = dataStored.some((item: any) => item.id === value.id);
    if (hasDatas) {
      returno = true;
    }
  } catch (e) {
    // read key error
    console.log('Error hasData');
  }
  return returno;
}
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
const crudStorage = {
  setDatas,
  getDatas,
  removeDatas,
  clearAllData,
  updateDatas,
  updatePrinter,
  storeOneDataObj,
  getOneDatas,
  storeOneDataString,
  createStorage,
  updateStorage,
  findStorage,
  findOneStorage,
  deleteStorage,
  deleteAllStorage,
  deleteByIdStorage,
  getAllKeysStorage,
  getData,
  hasDataStorage,
};
export default crudStorage;
