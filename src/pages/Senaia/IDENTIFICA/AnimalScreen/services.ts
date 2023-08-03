/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-vars */

import { Env } from '@env';

import crudAnimal from '@/services/CrudIdentify';
import Storage from '@/services/crudStorage';
import crudWDB from '@/services/crudWDB';
import type AnimalModel from '@/database/model/Animal';
import type { IAnimal, TAnimal } from './types';

const objects = 'animal';
const key_store = '@LOCAL_STORAGE_ANIMAL';
const table = 'animals';

// ###############################   API  ################################
const AnimalCrudCreate = async (data: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudAnimal
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
const AnimalCrudFind = async (): Promise<any> => {
  const responses = await crudAnimal
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
const AnimalCrudFindOne = async (id: string): Promise<any> => {
  const responses = await crudAnimal
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
const AnimalCrudFindRegister = async (
  register: string,
  value: any
): Promise<any> => {
  const responses = await crudAnimal
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
const AnimalCrudUpdate = async (data: any, id: any): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudAnimal
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
const AnimalCrudUpdateRegister = async (
  data: any,
  register: string,
  value: any
): Promise<any> => {
  if (Env.DEBUG === 'true') {
    // console.log('CREATE=', data);
  }
  const responses = await crudAnimal
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
const AnimalCrudDelete = async (id: any): Promise<any> => {
  const responses = await crudAnimal
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
async function SyncAnimal(animal: any) {
  let saves = null;
  let sendCoibfe = false;
  let sendUserCoibfeId = false;
  try {
    const sendAnimal = await AnimalCrudCreate(animal);
    if (sendAnimal) {
      // console.log('CREATE_ANIMAL', sendAnimal);
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
const AnimalStorageUpdate = async (objKey: string, values: any) => {
  const returno = await Storage.updateDatas(key_store, objKey, values);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------
const AnimalStorageSave = async (value: any) => {
  const returno = await Storage.setDatas(key_store, value);
  if (Env.DEBUG === 'true') {
    // console.log('SAVE', returno);
  }
  return returno;
};
//--------------------------------------------------------------------------

const AnimalStorageClear = async () => {
  const returno = await Storage.removeDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('CLEAR', returno);
  }
  return returno;
};
// --------------------------------------------------------------------------
const AnimalStorageGet = async () => {
  const returno = await Storage.getDatas(key_store);
  if (Env.DEBUG === 'true') {
    // console.log('GET', returno);
  }
  return returno;
};
//---------------------------------------------------------------------------
// ######################## STORAGE #########################################

// ###############################   WDB  ################################

const AnimalDBCreate = async (data: any): Promise<any> => {
  const returno = await crudWDB.creaTableWDB<AnimalModel>(table, data);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const AnimalDBFind = async (): Promise<any> => {
  const returno = await crudWDB.findAllWDB<AnimalModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const AnimalDBFindRegister = async (register: string): Promise<any> => {
  const returno = await crudWDB.findRegistersWDB<AnimalModel>(table, register);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const AnimalDBFindAll = async (): Promise<any> => {
  const returno = await crudWDB.getAllTablesWDB<AnimalModel>(table);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const AnimalDBFindOneRegister = async (
  register: string,
  value: string
): Promise<any> => {
  const returno = await crudWDB.findOneWDB<AnimalModel>(table, register, value);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const AnimalDBUpdate = async (data: any, id: any): Promise<any> => {
  const returno = await crudWDB.updateTableWDB(table, data, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const AnimalDBDelete = async (id: any): Promise<any> => {
  const returno = await crudWDB.deleteByIdWDB<AnimalModel>(table, id);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

const AnimalDBSync = async (column: string, item: any): Promise<any> => {
  const returno = await crudWDB.syncRegisterWDB(table, column, item);
  if (Env.DEBUG === 'true') {
    // console.log('UPDATE', returno);
  }
  return returno;
};

// ###############################   WDB  ################################
const AnimalServices = {
  AnimalCrudCreate,
  AnimalCrudFind,
  AnimalCrudFindOne,
  AnimalCrudFindRegister,
  AnimalCrudUpdate,
  AnimalCrudUpdateRegister,
  AnimalCrudDelete,
  SyncAnimal,
  AnimalStorageUpdate,
  AnimalStorageSave,
  AnimalStorageClear,
  AnimalStorageGet,
  AnimalDBCreate,
  AnimalDBFind,
  AnimalDBFindAll,
  AnimalDBFindRegister,
  AnimalDBFindOneRegister,
  AnimalDBUpdate,
  AnimalDBDelete,
  AnimalDBSync,
};
//---------------------------------------------------------------------------
export default AnimalServices;
