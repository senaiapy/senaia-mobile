/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-vars */

import { Env } from '@env';

import crudRaza from '@/services/CrudIdentify';
import Storage from '@/services/crudStorage';
import crudWDB from '@/services/crudWDB';
import type RazaModel from '@/database/model/Raza';
import type { IRaza, TRaza } from './types';

const objects = 'raza';
const key_store = '@LOCAL_STORAGE_ANIMAL';
const table = 'razas';

// ###############################   API  ################################
const RazaCrudCreate = async (data: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudRaza
    .create(objects, data)
    .then(async (response) => {
      //for first register or 2 register have active and unlocked
      if (Env.DEBUG === 'true') {
        // console.log('RETURN=', response.data);
        return response.data;
      }
    })
    .catch((e: any) => {
      // console.log('RESPONSEe4', e);
      return e;
    });
  return responses;
};
// ---------------------------------------
// ---------------------------------------
const RazaCrudFind = async (): Promise<any> => {
  const responses = await crudRaza
    .find(objects)
    .then(async (response) => {
      //for first register or 2 register have active and unlocked
      // console.log('RESPONSE', response.data);
      if (response.data) {
        if (Env.DEBUG === 'true') {
          // console.log(response.data);
        }
      }
      return response.data;
    })
    .catch((e: any) => {
      // console.log('RESPONSEe4', e);
      return e;
    });
  return responses;
};
// ---------------------------------------
// ---------------------------------------
const RazaCrudFindOne = async (id: string): Promise<any> => {
  const responses = await crudRaza
    .findOne(objects, id)
    .then(async (response) => {
      //for first register or 2 register have active and unlocked
      // console.log('RESPONSE', response.data);
      if (response.data) {
        if (Env.DEBUG === 'true') {
          // console.log(response.data);
        }
      }
      return response.data;
    })
    .catch((e: any) => {
      // console.log('RESPONSEe4', e);
      return e;
    });
  return responses;
};
// ---------------------------------------
// ---------------------------------------
const RazaCrudFindRegister = async (
  register: string,
  value: any
): Promise<any> => {
  const responses = await crudRaza
    .findRegister(objects, register, value)
    .then(async (response) => {
      //for first register or 2 register have active and unlocked
      // console.log('RESPONSE', response.data);
      if (response.data) {
        if (Env.DEBUG === 'true') {
          // console.log(response.data);
        }
      }
      return response.data;
    })
    .catch((e: any) => {
      // console.log('RESPONSEe4', e);
      return e;
    });
  return responses;
};
// ---------------------------------------
// ---------------------------------------
const RazaCrudUpdate = async (data: any, id: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudRaza
    .update(objects, data, id)
    .then(async (response) => {
      //for first register or 2 register have active and unlocked
      // console.log('RESPONSE', response.data);
      if (response.data) {
        if (Env.DEBUG === 'true') {
          // console.log(response.data);
        }
      }
      return response.data;
    })
    .catch((e: any) => {
      // console.log('RESPONSEe4', e);
      return e;
    });
  return responses;
};
// ---------------------------------------
// ---------------------------------------
const RazaCrudUpdateRegister = async (
  data: any,
  register: string,
  value: any
): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudRaza
    .updateRegister(objects, data, register, value)
    .then(async (response) => {
      //for first register or 2 register have active and unlocked
      // console.log('RESPONSE', response.data);
      if (response.data) {
        if (Env.DEBUG === 'true') {
          // console.log(response.data);
        }
      }
      return response.data;
    })
    .catch((e: any) => {
      // console.log('RESPONSEe4', e);
      return e;
    });
  return responses;
};
// ---------------------------------------
// ---------------------------------------
const RazaCrudDelete = async (id: any): Promise<any> => {
  const responses = await crudRaza
    .delete(objects, id)
    .then(async (response) => {
      //for first register or 2 register have active and unlocked
      // console.log('RESPONSE', response.data);
      if (response.data) {
        if (Env.DEBUG === 'true') {
          // console.log(response.data);
        }
      }
      return response.data;
    })
    .catch((e: any) => {
      // console.log('RESPONSEe4', e);
      return e;
    });
  return responses;
};
// ------------------------------------------------
// ------------------------------------------------
async function SyncRaza(raza: any) {
  let saves = null;
  let sendCoibfe = false;
  let sendUserCoibfeId = false;
  try {
    const sendRaza = await RazaCrudCreate(raza);
    if (sendRaza) {
      // console.log('CREATE_ANIMAL', sendRaza);
    }
  } catch (err) {
    console.warn(err);
  }
}

// ###############################   API  ################################
// ######################## STORAGE #########################################
// --------------------------------------------------------------------------
//--------------------------------------------------------------------------
// --------------------------------------------------------------------------
const RazaStorageUpdate = async (objKey: string, values: any) => {
  const returno = await Storage.updateDatas(key_store, objKey, values);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------
const RazaStorageSave = async (value: any) => {
  const returno = await Storage.setDatas(key_store, value);
  if (Env.DEBUG === 'true') {
    // console.log('SAVE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------

const RazaStorageClear = async () => {
  const returno = await Storage.removeDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('CLEAR', returno);
  }
  return returno;
};
// --------------------------------------------------------------------------
const RazaStorageGet = async () => {
  const returno = await Storage.getDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('GET', returno);
  }
  return returno;
};
//---------------------------------------------------------------------------
// ######################## STORAGE #########################################

// ###############################   WDB  ################################

const RazaDBCreate = async (data: any): Promise<any> => {
  const returno = await crudWDB.creaTableWDB<RazaModel>(table, data);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const RazaDBFind = async (): Promise<any> => {
  const returno = await crudWDB.findAllWDB<RazaModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const RazaDBFindRegister = async (register: string): Promise<any> => {
  const returno = await crudWDB.findRegistersWDB<RazaModel>(table, register);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const RazaDBFindAll = async (): Promise<any> => {
  const returno = await crudWDB.getAllTablesWDB<RazaModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const RazaDBFindOneRegister = async (
  register: string,
  value: string
): Promise<any> => {
  const returno = await crudWDB.findOneWDB<RazaModel>(table, register, value);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const RazaDBUpdate = async (data: any, id: any): Promise<any> => {
  const returno = await crudWDB.updateTableWDB(table, data, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const RazaDBDelete = async (id: any): Promise<any> => {
  const returno = await crudWDB.deleteByIdWDB<RazaModel>(table, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const RazaDBSync = async (column: string, item: any): Promise<any> => {
  const returno = await crudWDB.syncRegisterWDB(table, column, item);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

// ###############################   WDB  ################################
const RazaServices = {
  RazaCrudCreate,
  RazaCrudFind,
  RazaCrudFindOne,
  RazaCrudFindRegister,
  RazaCrudUpdate,
  RazaCrudUpdateRegister,
  RazaCrudDelete,
  SyncRaza,
  RazaStorageUpdate,
  RazaStorageSave,
  RazaStorageClear,
  RazaStorageGet,
  RazaDBCreate,
  RazaDBFind,
  RazaDBFindAll,
  RazaDBFindRegister,
  RazaDBFindOneRegister,
  RazaDBUpdate,
  RazaDBDelete,
  RazaDBSync,
};
//---------------------------------------------------------------------------
export default RazaServices;
