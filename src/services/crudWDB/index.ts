/* eslint-disable max-params */
/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import { Env } from '@env';
import type { Model } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';

import database from '@/database/index';

// -------------------DATABASE-FUNCTION----------
// ------------------
// ------------------
const DEBUG_THIS = 'false';

async function getAllTablesWDB<T extends Model>(
  tablesNames: string
): Promise<T[] | null> {
  let returno = null;
  try {
    const TCollection = database.get<T>(tablesNames);
    returno = await TCollection.query().fetch();
  } catch (e: any) {
    // error reading value
    console.log('Error findData= ', e);
  }
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfindd', returno);
  }
  return returno;
}
// ------------------
// ------------------
async function getTablesByIdWDB<T extends Model>(
  tablesNames: string,
  itemId: any
): Promise<T[] | null> {
  let returno: T[] = [];
  try {
    const TCollection = database.get<T>(tablesNames);
    const returnos = await TCollection.find(itemId);
    returno.push(returnos);
  } catch (e: any) {
    // error reading value
    console.log('Error findData= ', e);
  }
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfindd', returno);
  }
  return returno;
}
// ------------------
// ------------------
async function getOneColumnsWDB<T extends Model>(
  tableName: string,
  columns: string,
  itemId: any
): Promise<T[] | null> {
  let returno = null;
  try {
    const TCollection = database.get<T>(tableName);
    returno = await TCollection.query(Q.where(columns, itemId)).fetch();
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
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfinddone', returno);
  }
  return returno;
}
// ------------------
async function updateRegisterByValueWDB<T extends Model>(
  tableName: string,
  columns: string,
  itemId: any,
  dadus: any
): Promise<T[] | null> {
  let returno: any;
  let returnos: any;
  try {
    await database.write(async () => {
      const TCollection = database.get<T>(tableName);
      returnos = await TCollection.query(Q.where(columns, itemId)).fetch();
      const result = await returnos.update((data: any) => {
        returnos.coibfe_issinc = 'true';
        //returno = Object.assign(data, dadus);
        //data.frigorificoname = 'dadus';
      });
    });
  } catch (e: any) {
    // error reading value
    console.log('Error findOneData= ', e);
  }
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfinddone', returno);
  }
  return returno;
}
// ------------------
// ------------------
// ------------------

async function getManyWDB<T extends Model>(
  tableName: string,
  columns: string,
  itemsId: any[]
): Promise<T[] | null> {
  let returno = null;
  try {
    const TCollection = database.get<T>(tableName);
    returno = await TCollection.query(
      Q.where(columns, Q.oneOf(itemsId))
    ).fetch();
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
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfinddone', returno);
  }
  return returno;
}
// ------------------
// ------------------

async function upTableWDB<T extends Model>(
  tableName: string,
  itemId: any,
  dadus: T
): Promise<T | null> {
  let returno = null;
  try {
    const TCollection = database.get<T>(tableName);
    returno = await TCollection.find(itemId);
    await returno.update(async (data: T) => {
      const returnedTarget = Object.assign(data, dadus);
    });
    /*
    await database.write(async () => {
      await dadus.update((data: any) => {
        const returnedTarget = Object.assign(data, tableName);
      });
    });
    */
  } catch (e: any) {
    // error reading value
    console.log('Error updateData= ', e);
  }
  return returno;
}
// ------------------
// ------------------
// ------------------
// ------------------

async function upTableByIdWDB<T extends Model>(
  tableName: string,
  itemId: any,
  dadus: T
): Promise<T | null> {
  let returno = null;
  try {
    const TCollection = database.get<T>(tableName);
    const returnos = await TCollection.find(itemId);
    console.log('TCollection= ', returnos);
    await database.write(async () => {
      returno = await returnos.update((data: any) => {
        Object.assign(data, dadus);
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
// ------------------
// ------------------

async function upColumnWDB<T extends Model>(
  tableName: string,
  searchColumns: string,
  IdColumn: any,
  dadus: any
): Promise<T | null> {
  let returno: any;
  try {
    await database.write(async () => {
      const TCollection = database.get<T>(tableName);
      const returnos = await TCollection.query(
        Q.where(searchColumns, IdColumn)
      ).fetch();
      returnos.forEach(async (element: any) => {
        await element.update((data: any) => {
          returno = Object.assign(data, dadus);
        });
      });
    });
  } catch (e: any) {
    // error reading value
    console.log('Error updateData= ', e);
  }
  return returno;
}
// ------------------

async function syncRegisterWDB(
  tableName: string,
  columns: string,
  itemId: any
): Promise<any> {
  let returno: any;
  try {
    await database.write(async () => {
      const TCollection = database.get(tableName);
      returno = await TCollection.query(Q.where(columns, itemId)).fetch();
      returno.forEach(async (element: any) => {
        await element.update(() => {
          element.coibfe_issinc = 'true';
        });
      });
    });
  } catch (e: any) {
    console.log('Error updateData= ', e);
  }
  return returno;
}
// ------------------
async function delTableByRecordWDB<T extends Model>(
  tableName: string,
  columns: string,
  itemId: any
): Promise<boolean> {
  let returno = false;
  try {
    const TCollection = database.get<T>(tableName);
    const returnos = await TCollection.query(Q.where(columns, itemId)).fetch();
    await database.write(async () => {
      // @ts-ignore
      await Q.remove({ permanently: true }); // destroys permanently (actually removes from database)
      //await returnos.remove({ permanently: false }); // marks as deleted (so that deletion can be synced later)
    });
    returno = true;
  } catch (e: any) {
    // error reading value
    console.log('Error deleteData= ', e);
  }
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    console.log('DADUSdel', returno);
  }
  return returno;
}
// ------------------
// ------------------
async function delTableByIdWDB<T extends Model>(
  tableName: string,
  itemId: any
): Promise<any> {
  let returno = null;
  try {
    const TCollection = database.get<T>(tableName);
    const returnos = await TCollection.find(itemId);
    await database.write(async () => {
      returno = await returnos.destroyPermanently();
    });
  } catch (e: any) {
    // error reading value
    console.log('Error deleteData= ', e);
  }
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    console.log('DADUSdel', returno);
  }
  return returno;
}
// ------------------
// ------------------
async function creaTableWDB<T extends Model>(
  tableName: string,
  register: any
): Promise<T[] | null> {
  let returno = null;
  try {
    const response = await database.write(async () => {
      await database.get<T>(tableName).create((data: T) => {
        //data = register;
        //data = {...register};
        returno = Object.assign(data, register);
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
// ------------------
// ------------------
// ------------------
async function createWDB<T extends Model>(
  id: string,
  register: any
): Promise<boolean> {
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

async function updateTableWDB<T extends Model>(
  tableName: string,
  dadus: T,
  itemId: any
): Promise<T[] | null> {
  let returno = null;
  try {
    await database.write(async () => {
      let table = (await database.get(tableName).find(itemId)) as any;
      returno = await table.update((data: T) => {
        const returnedTarget = Object.assign(data, dadus);
        //data.frigorificoname = 'dadus';
      });
    });
  } catch (e: any) {
    // error reading value
    console.log('Error updateData= ', e);
  }
  return returno;
}
// ------------------
/*
async function updateTablesWDB<T>(
  dadus: any,
  tableRegister: any,
): Promise<boolean> {
  let returno = null;
  try {
    database.action(async () => {
      // check which coibfes already exist
      const existingPosts = await database.collections
        .get('coibfecoibfes')
        .query(Q.where('coibfeid', Q.oneOf(['abcdef', 'dasdasd', 'asdasd'])));

      const coibfesToCreate = IDs; // that are not contained in existingPosts
      const coibfestoUpdate = Coibfes; // that are contained in existing Posts

      await database.batch(
        ...coibfestoUpdate.map((coibfe: any) =>
          coibfe.prepareUpdate(() => {
            coibfe.coibfe_issinc = 'true';
          }),
        ),
        ...coibfesToCreate.map((coibfeData: any) =>
          collection.prepareCreate((coibfe: any) => {
            coibfe.coibfe_issinc = 'true';
          }),
        ),
      );
    });
  } catch (e: any) {
    // error reading value
    console.log('Error updateData= ', e);
  }
  return returno;
}
// ------------------

async function updateMultiplesTablesWDB<T>(
  dadus: any,
  tableRegister: any,
): Promise<boolean> {
  let returno = null;
  try {
    database.action(async () => {
      // check which posts already exist
      const existingPosts = await database.collections
        .get('posts')
        .query(Q.where('id', Q.oneOf(['abcdef', 'dasdasd', 'asdasd'])));

      const postsToCreate = IDs; // that are not contained in existingPosts
      const poststoUpdate = Posts; // that are contained in existing Posts

      await database.batch(
        ...postsToUpdate.map(post =>
          post.prepareUpdate(() => {
            post.title = 'Updated title';
          }),
        ),
        ...postsToCreate.map(postData =>
          collection.prepareCreate(post => {
            post.title = 'New title';
          }),
        ),
      );
    });
  } catch (e: any) {
    // error reading value
    console.log('Error updateData= ', e);
  }
  return returno;
}
*/
// ------------------
// ------------------
async function deleteByIdWDB<T extends Model>(
  tableName: any,
  itemId: any
): Promise<any> {
  let returno = null;
  try {
    await database.write(async () => {
      const TCollection = database.get<T>(tableName);
      let returnos = await TCollection.find(itemId);
      returno = await returnos.destroyPermanently();
    });
  } catch (e: any) {
    // error reading value
    console.log('Error deleteData= ', e);
  }
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    console.log('DADUSdel', returno);
  }
  return returno;
}
// ------------------------------
// ------------------
// ------------------
async function deleteWDB<T extends Model>(
  tableRegister: any
): Promise<boolean> {
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
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    console.log('DADUSdel', returno);
  }
  return returno;
}
// ------------------------------
async function findAllWDB<T extends Model>(
  tablesNames: string
): Promise<any[] | null> {
  let returno = null;
  try {
    const TCollection = database.get(tablesNames);
    returno = await TCollection.query().fetch();
  } catch (e: any) {
    // error reading value
    console.log('Error findData= ', e);
  }
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfindd', returno);
  }
  return returno;
}
// ------------------
// ------------------

async function findRegistersWDB<T extends Model>(
  tableName: string,
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
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfindd', returno);
  }
  return returno;
}
// ------------------
// ------------------

async function findOneWDB<T extends Model>(
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
  // @ts-ignore
  if (Env.DEBUG === 'true' || DEBUG_THIS === 'true') {
    // console.log('DADUSfinddone', returno);
  }
  return returno;
}

// -------------------DATABASE--FUNCTION---------

const crudWDB = {
  updateRegisterByValueWDB,
  getAllTablesWDB,
  getTablesByIdWDB,
  getOneColumnsWDB,
  getManyWDB,
  creaTableWDB,
  upTableWDB,
  upColumnWDB,
  upTableByIdWDB,
  delTableByRecordWDB,
  delTableByIdWDB,
  createWDB,
  updateTableWDB,
  deleteWDB,
  deleteByIdWDB,
  findAllWDB,
  findRegistersWDB,
  findOneWDB,
  syncRegisterWDB,
};

export default crudWDB;
/*
// ###############################   WDB  ################################
import crudWDB from'@/services/crudWDB';
import CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';
import CoibfeProductorModel from '@/database/model/CoibfeProductor';
import CoibfePropriedadModel from '@/database/model/CoibfePropriedad';
import CoibfeFrigorificoModel from '@/database/model/CoibfeFrigorifico';
import database from '@/database/index';
import {Model, Q} from '@nozbe/watermelondb';

// ###############################   WDB  ################################
/*
   // GET ALL TABLES
    // const value = await crudWDB.getAllTablesWDB<CoibfePropriedadModel>(
    //   'coibfepropriedads',
    // );
    // GET ALL TABLES
    // const value = await crudWDB.getAllTablesWDB<CoibfeProductorModel>(
    //   'coibfeproductors',
    // );
    // GET ALL TABLES
    // const value = await crudWDB.getAllTablesWDB<CoibfeFrigorificoModel>(
    //   'coibfefrigorificos',
    // );
    // GET TABLES BY ID
    // const value = await crudWDB.getTablesByIdWDB<CoibfeFrigorificoModel>(
    //    'coibfefrigorificos',
    //   '1',
    // );
    // GET TABLE BY RECORD
    // const value = await crudWDB.getOneColumnsWDB<CoibfeFrigorificoModel>(
    //   'coibfefrigorificos',
    //   'frigorifico_id',
    //   '0101010005',
    // );
    // GET ALL TABLES
    // const value = await crudWDB.getAllTablesWDB<CoibfeCoibfeModel>(
    //   'coibfecoibfes',
    // );
    /*

  "productor_id": "8035555",
    "productorname": "ricardo",
    "productor_id_type": "ci",
    "productor_id_origem": "py",
    "productoracreditacion": "undefined",
    "productor_propriedad_id": "1604030033",
    "productorpassword": "undefined",
    "productormail": "undefined",
    "productorphone": "undefined",
    "productorlevelaccess": "0",
    "productorapikeymobile": "undefined",
    "productorkey": "600e032f472c4a70bb0d2505",
    "productorstatus": "active",
    "productorlocked": "locked",
    "productortoken": "undefined",
    "productorsitrap": "rcmb",
    "productorservername": "208.117.87.29:3333",
    "productordocnroprop": "8035555",
    "productordocdigprop": "",
    "productordocorigabrev": "py",
    "productordoctipoabrev": "ci",
    "productorissync": "undefined",
    "productorkeyprivate": "undefined",
    "productorapikeyhardware": "undefined",
    "productorapikeysoftware": "undefined",
    "productormessages": "undefined",
    "productorpasswordremoteassistant": "undefined",
    "productorgroupusers": "undefined",
    "productordevicestatus": "undefined"

    "propriedad_id": "1000",
    "propriedadsigor": "16040300999",
    "propriedadname": "ricardo cardoso",
    "propriedadpropietario": "undefined",
    "propriedadacreditacion": "0010/2020",
    "propriedadpassword": "undefined",
    "propriedadmail": "undefined",
    "propriedadphone": "undefined",
    "propriedadlevelaccess": "0",
    "propriedadapikeymobile": "undefined",
    "propriedadkey": "600e0383520aa672cd6f31bf",
    "propriedadstatus": "active",
    "propriedadlocked": "locked",
    "propriedadtoken": "undefined",
    "propriedadsitrap": "rcmb",
    "propriedaddepartamento": "alto paraguay",
    "propriedaddistrito": "pto la esperanza",
    "propriedadlocalidad": "undefined",
    "propriedadservername": "208.117.87.29:3333",
    "propriedadissync": "undefined",
    "propriedadkeyprivate": "undefined",
    "propriedadapikeyhardware": "undefined",
    "propriedadapikeysoftware": "$2a$10$iklnz7wtzjoxkrpptuy1f.31xwc/u3iuu.leffqfjzp.7yzg5urcs",
    "propriedadmessages": "undefined",
    "propriedadpasswordremoteassistant": "undefined",
    "propriedadgroupusers": "undefined",
    "propriedaddevicestatus": "undefined",
    "counter": 9000351
    */
// // CREATE TABLES
// const register = {
//   coibfeid: '1235',
//   coibfekey: 'string',
//   coibfetoken: 'string',
//   coibfecodigov: 'string',
//   coibfedestino: 'string',
//   coibfefinalidad: 'string',
//   coibfetransporte: 'string',
//   coibfeaninovillos: '1',
//   coibfeanitoros: '2',
//   coibfeanivacas: '3',
//   coibfeanivaquillas: '4',
//   coibfeaniotros: '5',
//   coibfeanitotal: '15',
//   coibfeanihilton: '1',
//   coibfetecnico_vpa_id: '9999',
//   coibfetecniconame: 'string',
//   coibfefrigorificoname: 'string',
//   coibfefrigorifico_id: 'string',
//   coibfeproductorname: 'string',
//   coibfeproductor_id: 'string',
//   coibfeproductorsitrap: 'string',
//   coibfepropriedadname: 'string',
//   coibfepropriedad_id: 'string',
//   coibfepropriedadsigor: 'string',
//   coibfepropriedadsitrap: 'string',
//   coibfepropriedaddepartamento: 'string',
//   coibfepropriedaddistrito: 'string',
//   coibfepropriedad_productor_id: 'string',
//   coibfeprecinto1: 'string',
//   coibfeprecinto2: 'string',
//   coibfeprecinto3: 'string',
//   coibfepos_id: 'string',
//   coibfeposlatitud: '44.78',
//   coibfeposlongitud: '33.45',
//   coibfeposapikeymobile: 'string',
//   coibfeobs: 'string',
//   coibfedocnroprop: 'string',
//   coibfedocdigprop: 'string',
//   coibfedocorigabrev: 'string',
//   coibfedoctipoabrev: 'string',
//   coibfeerrocode: 'string',
//   coibfeerromessage: 'string',
//   coibfeanimales: '123,456,789',
//   coibfe_issinc: 'string',
// };
// const values = await crudWDB.creaTableWDB<CoibfeCoibfeModel>(
//   'coibfecoibfes',
//   register,
// );
// GET ALL TABLES
// const value = await crudWDB.getAllTablesWDB<CoibfeCoibfeModel>(
//   'coibfecoibfes',
// );
// DELETE  TABLES by id
//const value = await crudWDB.delTableByIdWDB<CoibfeCoibfeModel>(
//  'coibfecoibfes',
//  'u4e5qwt3xiduo14g',
//);
//// DELETE  TABLES by REcord
// const value = await crudWDB.delTableByRecordWDB<CoibfeCoibfeModel>(
//   'coibfecoibfes',
//   'coibfeid',
//   '1235',
// );
// DELETE  TABLES by id
// const value = await crudWDB.delTableByIdWDB<CoibfeCoibfeModel>(
//   'coibfecoibfes',
//   '"uh24njyc26p4uwq9',
// );
/*
    // GET ALL TABLES COIBFE
    const TABLES = await crudWDB.getAllTablesWDB<CoibfeCoibfeModel>(
      'coibfecoibfes',
    );
    console.log('TABLES', TABLES);
     */
/*
    // CREATE TABLES
    const register = {
      frigorifico_id: '11001000102',
      frigorificoname: 'frigorifico frigomerc s a',
      frigorificoacreditacion: 'undefined',
      frigorificopassword: 'undefined',
      frigorificodepartamento: 'alto paraguay',
      frigorificodistrito: 'undefined',
      frigorificomail: 'undefined',
      frigorificophone: 'undefined',
      frigorificolevelaccess: '0',
      frigorificoapikeymobile: 'undefined',
      frigorificokey: '600e034dc797057196f4c21c',
      frigorificostatus: 'active',
      frigorificolocked: 'locked',
      frigorificotoken: 'undefined',
      frigorificoservername: '208.117.87.29:3333',
      frigorificokeyprivate: 'undefined',
      frigorificoapikeyhardware: 'undefined',
      frigorificoapikeysoftware: 'undefined',
      frigorificomessages: 'undefined',
      frigorificopasswordremoteassistant: 'undefined',
      frigorificogroupusers: 'undefined',
      frigorificodevicestatus: 'undefined',
      frigorificoissync: 'undefined',
    };

    const creafrigo = await crudWDB.creaTableWDB<CoibfeFrigorificoModel>(
      'coibfefrigorificos',
      register,
    );
    console.log('TABLESCREA', creafrigo);
    //

    // const getfrigo = await crudWDB.getAllTablesWDB<CoibfeFrigorificoModel>(
    //   'coibfefrigorificos',
    // );
    // console.log('TABLESGET', getfrigo);
    // GET TABLES BY ID
    // const getfrigoid = await crudWDB.getTablesByIdWDB<CoibfeFrigorificoModel>(
    //   'coibfefrigorificos',
    //   'cgczlf69yi51yt4k',
    // );
    // // console.log('TABLESGET', getfrigoid);
    // const dadus: any = {frigorificoname: 'marcelo'};
    // const upfrigo = await crudWDB.updateTableWDB<CoibfeFrigorificoModel>(
    //   'coibfefrigorificos',
    //   dadus,
    //   'cgczlf69yi51yt4k',
    // );
    // console.log('TABLUP', upfrigo);

    // const upfrigo = await crudWDB.upColumnWDB<CoibfeFrigorificoModel>(
    //   'coibfefrigorificos',
    //   'frigorifico_id',
    //   dadus,
    //   '11001000102',
    // );
    // console.log('TABLUP', upfrigo);
    // const delfrigo = await crudWDB.delTableByIdWDB<CoibfeFrigorificoModel>(
    //   'coibfefrigorificos',
    //   'g54rbtlvmthgahlq',
    // );
    // console.log('TABLEDEL', delfrigo);// IF DELETED RETURN TRUE

    const TCollection = database.get<T>(tableName);
    let returnos = await TCollection.find(itemId);
    // returno.push(returnos);
    await database.write(async () => {
      returno = await returnos.update((data: any) => {
        const returnedTarget = Object.assign(data, dadus);
      });
    });

    await database.write(async () => {
      const tables = (await database.get<T>(tableName).find(itemId)) as any;
      await tables.update(() => {
        tables.frigorificoname = 'Marcelu';
      });
    });

    const TCollection = database.get<T>(tableName);
    let returnos = await TCollection.find(itemId);
    await database.write(async () => {
      returno = await returnos.update((data: any) => {
        const returnedTarget = Object.assign(data, dadus);
      });
    });
    */
