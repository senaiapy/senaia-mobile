/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import { Env } from '@env';
import { Q } from '@nozbe/watermelondb';

import database from '@/database/index';

// -------------------DATABASE-FUNCTION----------

async function createDB<T>(id: string, register: any): Promise<boolean> {
  let returno = false;
  try {
    const response = await database.write(async () => {
      await database.get(id).create((data: any) => {
        //data = register;
        //data = {...register};
        const returnedTarget = Object.assign(data, register);
        //console.log('DAta', data);
        returno = true;
      });
    });
  } catch (e: any) {
    // error reading value
    console.log('Error getData= ', e);
  }
  console.log('Error getData= ', returno);
  return returno;
}
// ------------------
// ------------------

async function updateDB<T>(dadus: any, tableRegister: any): Promise<boolean> {
  let returno = false;
  try {
    await database.write(async () => {
      await dadus.update((data: any) => {
        const returnedTarget = Object.assign(data, tableRegister);
        returno = true;
      });
    });
  } catch (e: any) {
    // error reading value
    console.log('Error updateData= ', e);
  }
  return returno;
}
// ------------------
// ------------------

async function deleteDB<T>(tableRegister: any): Promise<boolean> {
  let returno = false;
  try {
    await database.write(async () => {
      await tableRegister.destroyPermanently();
      returno = true;
    });
  } catch (e: any) {
    // error reading value
    console.log('Error deleteData= ', e);
  }
  if (Env.DEBUG === 'true') {
    console.log('DADUSdel', returno);
  }
  return returno;
}
// ------------------
// ------------------

async function findAllDB<T>(tablesNames: string): Promise<any[] | null> {
  let returno = null;
  try {
    const TCollection = database.get(tablesNames);
    returno = await TCollection.query().fetch();
  } catch (e: any) {
    // error reading value
    console.log('Error findData= ', e);
  }
  if (Env.DEBUG === 'true') {
    //console.log('DADUSfind', returno);
  }
  return returno;
}
// ------------------
// ------------------

async function findRegistersDB<T>(
  tableName: string,
  id: string,
  register: any
): Promise<any[] | null> {
  let returno = null;
  try {
    const skillCollection = database.get(tableName);
    returno = await skillCollection.query(Q.where('type', register)).fetch();
  } catch (e: any) {
    // error reading value
    console.log('Error findData= ', e);
  }
  if (Env.DEBUG === 'true') {
    // console.log('DADUSfind', returno);
  }
  return returno;
}
// ------------------
// ------------------

async function findOneDB<T>(
  tableName: string,
  register: string,
  item: string
): Promise<any | null> {
  let returno = null;
  try {
    const skillCollection = database.get(tableName);
    returno = await skillCollection.query(Q.where(register, item)).fetch();
    /*
    if (Array.isArray(returno) && returno.length) {
      Object.keys(returno).forEach(key => {
        // console.log(key , response[key]) // key , value
        if (returno[key] === item) {
          returno = returno[key];
        }
      });
    }
    //*/
  } catch (e: any) {
    // error reading value
    console.log('Error findOneData= ', e);
  }
  if (Env.DEBUG === 'true') {
    // console.log('DADUSfindone', returno);
  }
  return returno;
}

// -------------------DATABASE--FUNCTION---------

const crudDB = {
  createDB,
  updateDB,
  deleteDB,
  findAllDB,
  findRegistersDB,
  findOneDB,
};

export default crudDB;
/*
import crudDB from'@/services/crudDB';

type dadus = {
    type: string;
    name: string;
};

    const result = await crudDB.createDB<dadus>('skills', {name, type});
    const result = await crudDB.deleteDB(item);
    const response: any = await crudDB.findRegistersDB('skills', 'type', type);
    const value = await crudDB.findOneDB('skills', 'name', 'kkk');

*/
