/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-vars */

import { Env } from '@env';

import crudPeso from '@/services/CrudIdentify';
import Storage from '@/services/crudStorage';
import crudWDB from '@/services/crudWDB';
import type PesoModel from '@/database/model/Peso';
import type { IPeso, TPeso } from './types';

const objects = 'peso';
const key_store = '@LOCAL_STORAGE_ANIMAL';
const table = 'pesos';

// ###############################   API  ################################
const PesoCrudCreate = async (data: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudPeso
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
const PesoCrudFind = async (): Promise<any> => {
  const responses = await crudPeso
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
const PesoCrudFindOne = async (id: string): Promise<any> => {
  const responses = await crudPeso
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
const PesoCrudFindRegister = async (
  register: string,
  value: any
): Promise<any> => {
  const responses = await crudPeso
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
const PesoCrudUpdate = async (data: any, id: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudPeso
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
const PesoCrudUpdateRegister = async (
  data: any,
  register: string,
  value: any
): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudPeso
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
const PesoCrudDelete = async (id: any): Promise<any> => {
  const responses = await crudPeso
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
async function SyncPeso(peso: any) {
  let saves = null;
  let sendCoibfe = false;
  let sendUserCoibfeId = false;
  try {
    const sendPeso = await PesoCrudCreate(peso);
    if (sendPeso) {
      // console.log('CREATE_ANIMAL', sendPeso);
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
const PesoStorageUpdate = async (objKey: string, values: any) => {
  const returno = await Storage.updateDatas(key_store, objKey, values);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------
const PesoStorageSave = async (value: any) => {
  const returno = await Storage.setDatas(key_store, value);
  if (Env.DEBUG === 'true') {
    // console.log('SAVE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------

const PesoStorageClear = async () => {
  const returno = await Storage.removeDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('CLEAR', returno);
  }
  return returno;
};
// --------------------------------------------------------------------------
const PesoStorageGet = async () => {
  const returno = await Storage.getDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('GET', returno);
  }
  return returno;
};
//---------------------------------------------------------------------------
// ######################## STORAGE #########################################

// ###############################   WDB  ################################

const PesoDBCreate = async (data: any): Promise<any> => {
  const returno = await crudWDB.creaTableWDB<PesoModel>(table, data);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const PesoDBFind = async (): Promise<any> => {
  const returno = await crudWDB.findAllWDB<PesoModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const PesoDBFindRegister = async (register: string): Promise<any> => {
  const returno = await crudWDB.findRegistersWDB<PesoModel>(table, register);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const PesoDBFindAll = async (): Promise<any> => {
  const returno = await crudWDB.getAllTablesWDB<PesoModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const PesoDBFindOneRegister = async (
  register: string,
  value: string
): Promise<any> => {
  const returno = await crudWDB.findOneWDB<PesoModel>(table, register, value);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const PesoDBUpdate = async (data: any, id: any): Promise<any> => {
  const returno = await crudWDB.updateTableWDB(table, data, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const PesoDBDelete = async (id: any): Promise<any> => {
  const returno = await crudWDB.deleteByIdWDB<PesoModel>(table, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const PesoDBSync = async (column: string, item: any): Promise<any> => {
  const returno = await crudWDB.syncRegisterWDB(table, column, item);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

// ###############################   WDB  ################################
const PesoServices = {
  PesoCrudCreate,
  PesoCrudFind,
  PesoCrudFindOne,
  PesoCrudFindRegister,
  PesoCrudUpdate,
  PesoCrudUpdateRegister,
  PesoCrudDelete,
  SyncPeso,
  PesoStorageUpdate,
  PesoStorageSave,
  PesoStorageClear,
  PesoStorageGet,
  PesoDBCreate,
  PesoDBFind,
  PesoDBFindAll,
  PesoDBFindRegister,
  PesoDBFindOneRegister,
  PesoDBUpdate,
  PesoDBDelete,
  PesoDBSync,
};
//---------------------------------------------------------------------------
export default PesoServices;
