/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import type { Model } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';
import { fetchChildren } from '@nozbe/watermelondb/Model/helpers';
import { PermissionsAndroid } from 'react-native';

import database from '@/database/index';
import type { SyncSenaiaAction } from '@/database/model/SenaiaActionModel';
import SenaiaActionModel from '@/database/model/SenaiaActionModel';

import {
  createCoibfeCoibfesApi,
  createCoibfeFrigorificoApi,
  createCoibfeProductorApi,
  createCoibfePropriedadApi,
  createGeneralApi,
  createUserCategoryApi,
  deleteCoibfeFrigorificoApi,
  deleteCoibfeProductorApi,
  deleteCoibfePropriedadApi,
  deleteUserCategoryApi,
} from './apis';
// ###############################   PERMISSIONS  ############################

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
// ----------------------------------------------
// ----------------------------------------------
const requestWriteStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Cool Photo App Storage Permission',
        message:
          'Cool Photo App needs access to your storage ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Storage');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
// ----------------------------------------------
// ----------------------------------------------
const requestReadStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Cool Photo App Storage Permission',
        message:
          'Cool Photo App needs access to your storage ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Storage');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
// ###############################   PERMISSIONS  ############################

//---------------------------------------------------
const syncAction = async (action: SyncSenaiaAction) => {
  const updates: Model[] = [];

  switch (action.type) {
    case 'CREATE_COIBFECOIBFE': {
      const coibfe = (await action.coibfecoibfe.fetch())!;

      const serverCoibfes = await createCoibfeCoibfesApi(action.payload);

      updates.push(
        coibfe.prepareUpdate((c) => {
          c.serverId = serverCoibfes.id;
        })
      );

      break;
    }
    //------
    case 'CREATE_COIBFEFRIGORIFICO': {
      const frigorifico = (await action.coibfefrigorifico.fetch())!;

      const serverFrigorifico = await createCoibfeFrigorificoApi(
        frigorifico.serverId!,
        action.payload
      );

      updates.push(
        frigorifico.prepareUpdate((d) => {
          d.serverId = serverFrigorifico.id;
        })
      );

      break;
    }
    //------

    case 'DELETE_COIBFEFRIGORIFICO': {
      const frigorifico = (await action.coibfefrigorifico.fetch())!;

      await deleteCoibfeFrigorificoApi(frigorifico.serverId!);

      const children = await fetchChildren(frigorifico);
      children
        .filter(
          (child) =>
            !(child instanceof SenaiaActionModel && child.id === action.id)
        )
        .forEach((child) => {
          updates.push(child.prepareDestroyPermanently());
        });

      updates.push(frigorifico.prepareDestroyPermanently());

      break;
    }
    //------
    //------
    case 'CREATE_USERCATEGORY': {
      const category = (await action.usercategory.fetch())!;

      const serverCategory = await createUserCategoryApi(action.payload);

      updates.push(
        category.prepareUpdate((d: any) => {
          d.serverId = serverCategory.id;
        })
      );

      break;
    }
    //------
    case 'DELETE_USERCATEGORY': {
      const category = (await action.usercategory.fetch())!;

      await deleteUserCategoryApi(category.serverId!);

      const children = await fetchChildren(category);
      children
        .filter(
          (child) =>
            !(child instanceof SenaiaActionModel && child.id === action.id)
        )
        .forEach((child) => {
          updates.push(child.prepareDestroyPermanently());
        });

      updates.push(category.prepareDestroyPermanently());

      break;
    }
    //------
    //------
    //------
    //------
    case 'CREATE_GENERAL': {
      const general = (await action.general.fetch())!;

      const serverGeneral = await createGeneralApi(action.payload);

      updates.push(
        general.prepareUpdate((d: any) => {
          d.serverId = serverGeneral.id;
        })
      );

      break;
    }
    //------
    case 'DELETE_GENERAL': {
      const general = (await action.general.fetch())!;

      await deleteUserCategoryApi(general.serverId!);

      const children = await fetchChildren(general);
      children
        .filter(
          (child) =>
            !(child instanceof SenaiaActionModel && child.id === action.id)
        )
        .forEach((child) => {
          updates.push(child.prepareDestroyPermanently());
        });

      updates.push(general.prepareDestroyPermanently());

      break;
    }
    //------
    //------
    case 'CREATE_COIBFEPROPRIEDAD': {
      const propriedad = (await action.coibfepropriedad.fetch())!;

      const serverPropriedad = await createCoibfePropriedadApi(action.payload);

      updates.push(
        propriedad.prepareUpdate((p) => {
          p.title = serverPropriedad.title;
          p.body = serverPropriedad.body;
          p.serverId = serverPropriedad.id;
        })
      );

      break;
    }
    //------

    case 'DELETE_COIBFEPROPRIEDAD': {
      const propriedad = (await action.coibfepropriedad.fetch())!;

      await deleteCoibfePropriedadApi(propriedad.serverId!);

      const children = await fetchChildren(propriedad);
      children
        .filter(
          (child) =>
            !(child instanceof SenaiaActionModel && child.id === action.id)
        )
        .forEach((child) => {
          updates.push(child.prepareDestroyPermanently());
        });

      updates.push(propriedad.prepareDestroyPermanently());

      break;
    }
    //------

    case 'CREATE_COIBFEPRODUCTOR': {
      const productor = (await action.coibfeproductor.fetch())!;

      const serverProductor = await createCoibfeProductorApi(
        productor.serverId!,
        action.payload
      );

      updates.push(
        productor.prepareUpdate((d) => {
          d.body = serverProductor.body;
          d.serverId = serverProductor.id;
        })
      );

      break;
    }
    //------

    case 'DELETE_COIBFEPRODUCTOR': {
      const productor = (await action.coibfeproductor.fetch())!;

      await deleteCoibfeProductorApi(productor.serverId!);

      const children = await fetchChildren(productor);
      children
        .filter(
          (child) =>
            !(child instanceof SenaiaActionModel && child.id === action.id)
        )
        .forEach((child) => {
          updates.push(child.prepareDestroyPermanently());
        });

      updates.push(productor.prepareDestroyPermanently());

      break;
    }
    //----------------------------------------------------------------//------
  }

  updates.push(action.prepareDestroyPermanently());

  await database.write(async () => {
    await database.batch(...updates);
  });
};
//---------------------------------------------------
const sync = async () => {
  const Actions = database.collections.get<SenaiaActionModel>('senaiactions');
  console.log('[sync]', await Actions.query().fetchCount());

  const actions = await Actions.query(Q.take(1)).fetch();
  const action = actions[0];

  if (action) {
    await syncAction(action as SyncSenaiaAction);
  }
};
//---------------------------------------------------
let onlyOne_Sync = false;
const triggerSync = async () => {
  // if (onlyOne_Sync) {
  onlyOne_Sync = true;
  await requestWriteStoragePermission();
  await requestReadStoragePermission();
  //  }
  sync();
  setTimeout(triggerSync, 60 * 1000); // 60 sec
};
//---------------------------------------------------
export { triggerSync };

export default sync;
