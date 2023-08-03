/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-vars */

import { Env } from '@env';

import crudIdentifica from '@/services/CrudIdentify';
import Storage from '@/services/crudStorage';
import crudWDB from '@/services/crudWDB';
import type IdentificaModel from '@/database/model/Identifica';
import type { IIdentifica, TIdentifica } from './types';

const objects = 'identifica';
const key_store = '@LOCAL_STORAGE_ANIMAL';
const table = 'identificas';

// ###############################   API  ################################
const IdentificaCrudCreate = async (data: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudIdentifica
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
const IdentificaCrudFind = async (): Promise<any> => {
  const responses = await crudIdentifica
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
const IdentificaCrudFindOne = async (id: string): Promise<any> => {
  const responses = await crudIdentifica
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
const IdentificaCrudFindRegister = async (
  register: string,
  value: any
): Promise<any> => {
  const responses = await crudIdentifica
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
const IdentificaCrudUpdate = async (data: any, id: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudIdentifica
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
const IdentificaCrudUpdateRegister = async (
  data: any,
  register: string,
  value: any
): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudIdentifica
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
const IdentificaCrudDelete = async (id: any): Promise<any> => {
  const responses = await crudIdentifica
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
async function SyncIdentifica(identifica: any) {
  let saves = null;
  let sendCoibfe = false;
  let sendUserCoibfeId = false;
  try {
    const sendIdentifica = await IdentificaCrudCreate(identifica);
    if (sendIdentifica) {
      // console.log('CREATE_ANIMAL', sendIdentifica);
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
const IdentificaStorageUpdate = async (objKey: string, values: any) => {
  const returno = await Storage.updateDatas(key_store, objKey, values);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------
const IdentificaStorageSave = async (value: any) => {
  const returno = await Storage.setDatas(key_store, value);
  if (Env.DEBUG === 'true') {
    // console.log('SAVE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------

const IdentificaStorageClear = async () => {
  const returno = await Storage.removeDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('CLEAR', returno);
  }
  return returno;
};
// --------------------------------------------------------------------------
const IdentificaStorageGet = async () => {
  const returno = await Storage.getDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('GET', returno);
  }
  return returno;
};
//---------------------------------------------------------------------------
// ######################## STORAGE #########################################

// ###############################   WDB  ################################

const IdentificaDBCreate = async (data: any): Promise<any> => {
  const returno = await crudWDB.creaTableWDB<IdentificaModel>(table, data);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const IdentificaDBFind = async (): Promise<any> => {
  const returno = await crudWDB.findAllWDB<IdentificaModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const IdentificaDBFindRegister = async (register: string): Promise<any> => {
  const returno = await crudWDB.findRegistersWDB<IdentificaModel>(
    table,
    register
  );
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const IdentificaDBFindAll = async (): Promise<any> => {
  const returno = await crudWDB.getAllTablesWDB<IdentificaModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const IdentificaDBFindOneRegister = async (
  register: string,
  value: string
): Promise<any> => {
  const returno = await crudWDB.findOneWDB<IdentificaModel>(
    table,
    register,
    value
  );
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const IdentificaDBUpdate = async (data: any, id: any): Promise<any> => {
  const returno = await crudWDB.updateTableWDB(table, data, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const IdentificaDBDelete = async (id: any): Promise<any> => {
  const returno = await crudWDB.deleteByIdWDB<IdentificaModel>(table, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const IdentificaDBSync = async (column: string, item: any): Promise<any> => {
  const returno = await crudWDB.syncRegisterWDB(table, column, item);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

// ###############################   WDB  ################################
const IdentificaServices = {
  IdentificaCrudCreate,
  IdentificaCrudFind,
  IdentificaCrudFindOne,
  IdentificaCrudFindRegister,
  IdentificaCrudUpdate,
  IdentificaCrudUpdateRegister,
  IdentificaCrudDelete,
  SyncIdentifica,
  IdentificaStorageUpdate,
  IdentificaStorageSave,
  IdentificaStorageClear,
  IdentificaStorageGet,
  IdentificaDBCreate,
  IdentificaDBFind,
  IdentificaDBFindAll,
  IdentificaDBFindRegister,
  IdentificaDBFindOneRegister,
  IdentificaDBUpdate,
  IdentificaDBDelete,
  IdentificaDBSync,
};
//---------------------------------------------------------------------------
export default IdentificaServices;
