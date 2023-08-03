/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { Env } from '@env';
import type BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { Linking } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';

import type { MenuTypeProps } from '@/components/Menu';

import { Print } from './print';
import { Container } from './styles';
import type { ICoibfes } from './types';

let onlyOne_printer = false;
export const Printer = (data: ICoibfes) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  //const route = useRoute();

  function onMessage(
    messages: string,
    descriptions: string = '',
    types: any = 'success'
  ) {
    showMessage({
      message: messages,
      description: descriptions,
      type: types, // danger // success
      //backgroundColor: 'purple', // background color
      // color: '#606060', // text color
      duration: 4000,
      icon: 'success', // danger
      onPress: () => {
        onMessageClick();
        /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
      },
    });
  }

  function onMessageClick() {
    console.log('CLICK');
  }

  function Messages() {
    Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
      if (supported) {
        return Linking.openURL(
          'whatsapp://send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      } else {
        return Linking.openURL(
          'https://api.whatsapp.com/send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      }
    });
  }
  // ###############################   PERMISSIONS  ############################

  requestMultiple([
    PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE,
    PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
    PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
  ]).then((statuses) => {
    console.log(
      'Bluetooth Advise',
      statuses[PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE]
    );
    console.log(
      'Bluetooth Connect',
      statuses[PERMISSIONS.ANDROID.BLUETOOTH_CONNECT]
    );
    console.log('Bluetooth Scan', statuses[PERMISSIONS.ANDROID.BLUETOOTH_SCAN]);
  });

  const requestBluetoothBLUETOOTH_ADVERTISEPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
        {
          title: 'Bluetooth Printer Permission Advertise',
          message:
            'Cool Bluetooth App needs access to your Printer ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Bluetooth Printer');
      } else {
        console.log('Bluetooth permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // ----------------------------------------------
  // ----------------------------------------------

  const requestBluetoothBLUETOOTH_CONNECTPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        {
          title: 'Bluetooth Printer Permission Connect',
          message:
            'Cool Bluetooth App needs access to your Printer ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Bluetooth Printer');
      } else {
        console.log('Bluetooth permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // ----------------------------------------------

  const requestBluetoothBLUETOOTHPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH,
        {
          title: 'Bluetooth Printer Permission Scan',
          message:
            'Cool Bluetooth App needs access to your Printer ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Bluetooth Printer');
      } else {
        console.log('Bluetooth permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // ----------------------------------------------
  // ----------------------------------------------

  const requestBluetoothBLUETOOTH_ADMINPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADMIN,
        {
          title: 'Bluetooth Printer Permission Scan',
          message:
            'Cool Bluetooth App needs access to your Printer ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Bluetooth Printer');
      } else {
        console.log('Bluetooth permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // ----------------------------------------------
  // ----------------------------------------------

  // ----------------------------------------------

  const requestBluetoothBLUETOOTH_SCANPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        {
          title: 'Bluetooth Printer Permission Scan',
          message:
            'Cool Bluetooth App needs access to your Printer ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Bluetooth Printer');
      } else {
        console.log('Bluetooth permission denied');
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

  // -------------------DATABASE-----------
  const [type, setType] = useState<MenuTypeProps>('soft');
  const [name, setName] = useState('');

  const bottomSheetRef = useRef<BottomSheet>(null);
  // -------------------DATABASE--FUNCTION---------

  useEffect(() => {}, []);

  return (
    <Container>
      <Print data={data} />
    </Container>
  );
};
