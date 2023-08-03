/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-vars */

import { Env } from '@env';

import crudGuia from '@/services/CrudIdentify';
import Storage from '@/services/crudStorage';
import crudWDB from '@/services/crudWDB';
import type GuiaModel from '@/database/model/Guia';
import type { IGuia, TGuia } from './types';

const objects = 'guia';
const key_store = '@LOCAL_STORAGE_ANIMAL';
const table = 'guias';

// ###############################   API  ################################
const GuiaCrudCreate = async (data: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudGuia
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
const GuiaCrudFind = async (): Promise<any> => {
  const responses = await crudGuia
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
const GuiaCrudFindOne = async (id: string): Promise<any> => {
  const responses = await crudGuia
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
const GuiaCrudFindRegister = async (
  register: string,
  value: any
): Promise<any> => {
  const responses = await crudGuia
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
const GuiaCrudUpdate = async (data: any, id: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudGuia
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
const GuiaCrudUpdateRegister = async (
  data: any,
  register: string,
  value: any
): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudGuia
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
const GuiaCrudDelete = async (id: any): Promise<any> => {
  const responses = await crudGuia
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
async function SyncGuia(guia: any) {
  let saves = null;
  let sendCoibfe = false;
  let sendUserCoibfeId = false;
  try {
    const sendGuia = await GuiaCrudCreate(guia);
    if (sendGuia) {
      // console.log('CREATE_ANIMAL', sendGuia);
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
const GuiaStorageUpdate = async (objKey: string, values: any) => {
  const returno = await Storage.updateDatas(key_store, objKey, values);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------
const GuiaStorageSave = async (value: any) => {
  const returno = await Storage.setDatas(key_store, value);
  if (Env.DEBUG === 'true') {
    // console.log('SAVE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------

const GuiaStorageClear = async () => {
  const returno = await Storage.removeDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('CLEAR', returno);
  }
  return returno;
};
// --------------------------------------------------------------------------
const GuiaStorageGet = async () => {
  const returno = await Storage.getDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('GET', returno);
  }
  return returno;
};
//---------------------------------------------------------------------------
// ######################## STORAGE #########################################

// ###############################   WDB  ################################

const GuiaDBCreate = async (data: any): Promise<any> => {
  const returno = await crudWDB.creaTableWDB<GuiaModel>(table, data);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const GuiaDBFind = async (): Promise<any> => {
  const returno = await crudWDB.findAllWDB<GuiaModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const GuiaDBFindRegister = async (register: string): Promise<any> => {
  const returno = await crudWDB.findRegistersWDB<GuiaModel>(table, register);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const GuiaDBFindAll = async (): Promise<any> => {
  const returno = await crudWDB.getAllTablesWDB<GuiaModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const GuiaDBFindOneRegister = async (
  register: string,
  value: string
): Promise<any> => {
  const returno = await crudWDB.findOneWDB<GuiaModel>(table, register, value);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const GuiaDBUpdate = async (data: any, id: any): Promise<any> => {
  const returno = await crudWDB.updateTableWDB(table, data, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const GuiaDBDelete = async (id: any): Promise<any> => {
  const returno = await crudWDB.deleteByIdWDB<GuiaModel>(table, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const GuiaDBSync = async (column: string, item: any): Promise<any> => {
  const returno = await crudWDB.syncRegisterWDB(table, column, item);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

// ###############################   WDB  ################################
const GuiaServices = {
  GuiaCrudCreate,
  GuiaCrudFind,
  GuiaCrudFindOne,
  GuiaCrudFindRegister,
  GuiaCrudUpdate,
  GuiaCrudUpdateRegister,
  GuiaCrudDelete,
  SyncGuia,
  GuiaStorageUpdate,
  GuiaStorageSave,
  GuiaStorageClear,
  GuiaStorageGet,
  GuiaDBCreate,
  GuiaDBFind,
  GuiaDBFindAll,
  GuiaDBFindRegister,
  GuiaDBFindOneRegister,
  GuiaDBUpdate,
  GuiaDBDelete,
  GuiaDBSync,
};
//---------------------------------------------------------------------------
export default GuiaServices;
