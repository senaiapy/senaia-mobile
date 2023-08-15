/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35
import { Env } from '@env';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Buffer } from 'buffer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useCallback, useRef } from 'react';
import { PermissionsAndroid } from 'react-native';
import {
  Alert,
  BackHandler,
  Button,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useBluetoothStatus } from 'react-native-bluetooth-status';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import QRCode from 'react-native-qrcode-svg';
import RNRestart from 'react-native-restart';
import type {
  IBLEPrinter,
  INetPrinter,
  IUSBPrinter,
} from 'react-native-thermal-receipt-printer-image-qr';
import {
  BLEPrinter,
  ColumnAliment,
  COMMANDS,
  NetPrinter,
  USBPrinter,
} from 'react-native-thermal-receipt-printer-image-qr';
import AntIcon from 'react-native-vector-icons/Ionicons';

import Loading from '@/components/Loading';
import { translate } from '@/core';
import Storage from '@/services/crudStorage';
import Functions from '@/utils/Functions';

import type { DeviceType } from './FindPrinter';
import { TitleBlack, ViewPanel } from './styles';

const printerList: Record<string, any> = {
  ble: BLEPrinter,
  net: NetPrinter,
  usb: USBPrinter,
};

export interface SelectedPrinter
  // @ts-ignore
  extends Partial<IUSBPrinter & IBLEPrinter & INetPrinter> {
  printerType?: keyof typeof printerList;
}

export const PORT: string = '9100';

export enum DevicesEnum {
  usb = 'usb',
  net = 'net',
  blu = 'blu',
}

const deviceWidth = Dimensions.get('window').width;
const EscPosEncoder = require('esc-pos-encoder');
let onlyOne = false;
let PRINTER_COUNTER: number;
let storage: any;

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
export const Print = (data: any) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const [btStatus, isPending, setBluetooth] = useBluetoothStatus();
  const [printerCounter, setPrinterCounter] = useState('0');
  let apptype: string = 'coibfe';

  const MAX_PRINTER_COPIES = 3;
  let COIBFE_DATA = null;

  const base64SenacsaLogo =
    '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';

  const coibfe = {
    coibfeId: '49990001',
    coibfeKey: '',
    coibfeToken: '',
    coibfeCodigoV: 'abcf1',
    coibfeDestino: 'Union Europea',
    coibfeFinalidad: 'Faena',
    coibfeTransporte: 'Terrestre',
    coibfeAniNovillos: '1',
    coibfeAniToros: '2',
    coibfeAniVacas: '3',
    coibfeAniVaquillas: '4',
    coibfeAniOtros: '5',
    coibfeAniTotal: '15',
    coibfeAniHilton: '3',
    coibfeTecnico_VPA_ID: '999',
    coibfeTecnicoName: 'Marcelo Anjos',
    coibfeFrigorificoName: 'Frigorifico Belem',
    coibfeFrigorifico_ID: '1000002',
    coibfeProductorName: 'Los Lazos',
    coibfeProductor_ID: '1500000',
    coibfeProductorSitrap: 'AAAA',
    coibfePropriedadName: 'Hacienda Los',
    coibfePropriedad_ID: '111111111',
    coibfePropriedadSigor: '100001110000',
    coibfePropriedadSitrap: 'BBBB',
    coibfePropriedadDepartamento: 'Central',
    coibfePropriedadDistrito: 'Asuncion',
    coibfePropriedad_productor_id: 'coibfePropriedad_productor_id',
    coibfePrecinto1: '1234567',
    coibfePrecinto2: '8912345',
    coibfePrecinto3: '6789012',
    coibfePos_ID: 'aaaa1111',
    coibfePosLatitud: '-30.0000',
    coibfePosLongitud: '55.1234',
    coibfePosDateTime: '22/01/2022 12:00',
    coibfePosApiKeyMobile: 'coibfePosApiKeyMobile',
    coibfeOBS: '',
    coibfeDocNroProp: '8089161',
    coibfeDocDigProp: '6',
    coibfeDocOrigAbrev: 'PY',
    coibfeDocTipoAbrev: 'RUC',
    coibfe_issinc: 'false',
    coibfe_print: '3',
  };
  // ------------------------------------------------------------------------------------------------------
  const [selectedValue, setSelectedValue] = React.useState<
    keyof typeof printerList
  >(DevicesEnum.net);

  const [devices, setDevices] = React.useState([]);
  const [connected, setConnected] = React.useState(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isPrinting, setIsPrinting] = React.useState<boolean>(true);
  const [selectedPrinter, setSelectedPrinter] = React.useState<SelectedPrinter>(
    {}
  );
  let QrRef = useRef<any>(null);
  const [selectedNetPrinter, setSelectedNetPrinter] =
    React.useState<DeviceType>({
      device_name: 'My Net Printer',
      host: '192.168.0.101', // your host
      port: PORT, // your port
      printerType: DevicesEnum.net,
    });
  // ------------------------------------------------------------------------------------------------------
  const goInitialPage = () => {
    //navigation.navigate('Home');
    RNRestart.Restart(); // reboot
  };
  // ------------------------------------------------------------------------------------------------------

  const getListDevices = async () => {
    const Printer = printerList[selectedValue];
    // get list device for ne is support scanning in local ip but not recommended
    if (selectedValue === DevicesEnum.net) {
      await Printer.init();
      setLoading(false);
      return;
    }
    requestAnimationFrame(async () => {
      try {
        await Printer.init();
        const results = await Printer.getDeviceList();
        setDevices(
          results?.map((item: any) => ({
            ...item,
            printerType: selectedValue,
          }))
        );
      } catch (err) {
        console.warn(err);
      } finally {
        setLoading(false);
      }
    });
  };
  //   // ------------------------------------------------------------------------------------------------------
  const handleConnectSelectedPrinter = async () => {
    setLoading(true);
    const connect = async () => {
      try {
        switch (
        selectedValue === DevicesEnum.net
          ? selectedNetPrinter.printerType
          : selectedPrinter.printerType
        ) {
          case 'ble':
            if (selectedPrinter?.inner_mac_address) {
              try {
                // if (connected) {
                // await BLEPrinter.closeConn();
                // setConnected(!connected);
                // }
                const status = await BLEPrinter.connectPrinter(
                  selectedPrinter?.inner_mac_address || ''
                );
                console.log('connect -> status', status);
                Alert.alert(
                  translate('printer.Connected'),
                  `Connectada a ${status.device_name ?? 'Impresora'} !`
                );
                setConnected(true);
              } catch (err) {
                Alert.alert(translate('printer.noConnected'), `${err} !`);
              }
            }
            break;
          case 'net':
            if (!selectedNetPrinter) {
              break;
            }
            try {
              // if (connected) {
              // await NetPrinter.closeConn();
              // setConnected(!connected);
              // }
              const status = await NetPrinter.connectPrinter(
                selectedNetPrinter?.host || '',
                9100
              );
              setLoading(false);
              console.log('connect -> status', status);
              Alert.alert(
                translate('printer.Connected'),
                `Connected to ${status.host ?? 'Printers'} !`
              );
              // setConnected(true);
            } catch (err) {
              Alert.alert(translate('printer.noConnected'), `${err} !`);
            }
            break;
          case 'usb':
            if (selectedPrinter?.vendor_id) {
              try {
                if (connected) {
                  await USBPrinter.closeConn();
                  setConnected(!connected);
                }
                const status = await USBPrinter.connectPrinter(
                  selectedPrinter?.vendor_id || '',
                  selectedPrinter?.product_id || ''
                );
                console.log('connect -> status', status);
              } catch (err) {
                Alert.alert(translate('printer.noConnected'), `${err} !`);
              }
            }
            break;
          default:
        }
      } catch (err) {
        console.warn(err);
      } finally {
        setLoading(false);
      }
    };
    await connect();
  };
  // --------------------------------------------------------------------------
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

  // ------------------------------------------------------------------------------------------------------
  const handleChangePrinterType = async (type: keyof typeof printerList) => {
    await requestBluetoothBLUETOOTH_ADVERTISEPermission();
    await requestBluetoothBLUETOOTH_CONNECTPermission();
    await requestBluetoothBLUETOOTH_SCANPermission();
    await requestBluetoothBLUETOOTH_SCANPermission();
    // await requestBluetoothBLUETOOTH_ADMINPermission();

    try {
      setSelectedValue((prev) => {
        printerList[prev].closeConn();
        return type;
      });
      setSelectedPrinter({});
    } catch (err: any) {
      console.warn(err);
    }
  };
  // ------------------------------------------------------------------------------------------------------
  const findPrinter = () => {
    // find NEt printer FindPrinter
    // navigate('Find');
  };
  // ------------------------------------------------------------------------------------------------------
  const savePrintCounter = async () => {
    if (PRINTER_COUNTER > 0) {
      PRINTER_COUNTER = PRINTER_COUNTER - 1;
      await storageUpdatePrinter('@LOCALCOIBFE', PRINTER_COUNTER);
      setPrinterCounter(String(PRINTER_COUNTER));
    } else {
      await storageClear('@LOCALCOIBFE'); // if print = 0 clear all data
      setPrinterCounter('0');
    }
    // PRINT NUMBER OF COPIES = MAX COPIES 3
  };
  // ------------------------------------------------------------------------------------------------------
  const handlePrint = async () => {
    try {
      const Printer = printerList[selectedValue];
      // console.log(data);
      Printer.printText('<C>COIBFE</C>', {
        cut: false,
      });
      Printer.printImage('@/assets/logos/LOGO_SENACSA_GOBIERNO_2018.png');
      Printer.printBill(`${data.coibfeid}`);
    } catch (err) {
      console.warn(err);
    }
  };
  // ------------------------------------------------------------------------------------------------------
  const handlePrintBillWithImage = async () => {
    const Printer: typeof NetPrinter = printerList[selectedValue];
    Printer.printImage(
      'https://sistemas.senacsa.gov.py:8443/ipplanning/static/Resources/LOGO_SENACSA_GOBIERNO_2018.png',
      {
        imageWidth: 575,
        // imageHeight: 1000,
        // paddingX: 100
      }
    );
    Printer.printBill('', { beep: false });
  };
  // ------------------------------------------------------------------------------------------------------
  const onChangeText = (text: string) => {
    setSelectedNetPrinter({ ...selectedNetPrinter, host: text });
  };
  // ------------------------------------------------------------------------------------------------------
  const handlePrintBill = async () => {
    setIsPrinting(false);
    let address = '2700 S123 Grand Ave, Los Angeles, CA 90007223, USA.';
    const BOLD_ON = COMMANDS.TEXT_FORMAT.TXT_BOLD_ON;
    const BOLD_OFF = COMMANDS.TEXT_FORMAT.TXT_BOLD_OFF;
    const CENTER = COMMANDS.TEXT_FORMAT.TXT_ALIGN_CT;
    const OFF_CENTER = COMMANDS.TEXT_FORMAT.TXT_ALIGN_LT;
    try {
      const getDataURL = () => {
        (QrRef as any).toDataURL(callback);
      };
      const callback = async (dataURL: string) => {
        setIsPrinting(false);
        let qrProcessed = dataURL.replace(/(\r\n|\n|\r)/gm, '');
        // Can print android and ios with the same type or with encoder for android
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
          const Printer: typeof NetPrinter = printerList[selectedValue];
          Printer.printImage(
            'https://sistemas.senacsa.gov.py:8443/ipplanning/static/Resources/LOGO_SENACSA_GOBIERNO_2018.png',
            {
              imageWidth: 300,
              imageHeight: 300,
            }
          );
          Printer.printText(`${CENTER}${BOLD_ON} BILLING ${BOLD_OFF}\n`);
          Printer.printText(`${CENTER}${address}${OFF_CENTER}`);
          Printer.printText('090 3399 031 555\n');
          Printer.printText('Date : 15- 09 - 2021 /15 : 29 : 57 / Admin');
          Printer.printText('Product : Total - 4 / No. (1,2,3,4)\n');
          Printer.printText(
            `${CENTER}${COMMANDS.HORIZONTAL_LINE.HR_80MM}${CENTER}`
          );
          let orderList = [
            ['1. Skirt Palas Labuh Muslimah Fashion', 'x2', '500$'],
            ['2. BLOUSE ROPOL VIRAL MUSLIMAH FASHION', 'x4222', '500$'],
            [
              '3. Women Crew Neck Button Down Ruffle Collar Loose Blouse',
              'x1',
              '30000000000000$',
            ],
            ['4. Retro Buttons Up Full Sleeve Loose', 'x10', '200$'],
            ['5. Retro Buttons Up', 'x10', '200$'],
          ];
          let columnAliment = [
            ColumnAliment.LEFT,
            ColumnAliment.CENTER,
            ColumnAliment.RIGHT,
          ];
          let columnWidth = [46 - (7 + 12), 7, 12];
          const header = ['Product list', 'Qty', 'Price'];
          Printer.printColumnsText(header, columnWidth, columnAliment, [
            `${BOLD_ON}`,
            '',
            '',
          ]);
          Printer.printText(
            `${CENTER}${COMMANDS.HORIZONTAL_LINE.HR3_80MM}${CENTER}`
          );
          for (let i in orderList) {
            Printer.printColumnsText(orderList[i], columnWidth, columnAliment, [
              `${BOLD_OFF}`,
              '',
              '',
            ]);
          }
          Printer.printText('\n');
          Printer.printImageBase64(qrProcessed, {
            imageWidth: 50,
            imageHeight: 50,
          });
          Printer.printBill(`${CENTER}Thank you\n`, { beep: false });
        } else {
          // optional for android
          // android
          const Printer = printerList[selectedValue];
          const encoder = new EscPosEncoder();
          let _encoder = encoder
            .initialize()
            .align('center')
            .line('BILLING')
            .qrcode(
              'https://pyfoundation.org/coibfe/' + String(storage?.coibfeId)
            )
            .encode();
          let base64String = Buffer.from(_encoder).toString('base64');
          Printer.printRaw(base64String);
        }
        setIsPrinting(true);
        await savePrintCounter();
      };
      getDataURL();
      setIsPrinting(true);
      // END OF PRINTING
    } catch (err) {
      console.warn(err);
    }
  };
  // ------------------------------------------------------------------------------------------------------
  const handlePrintFactura = async () => {
    if (Env.DEBUG === 'true') {
      console.log('HAVE DATA1', PRINTER_COUNTER);
    }
    switch (apptype) {
      case 'coibfe':
        printCoibfe();
        break;
      case 'test':
        printTest();
        break;
      case 'senaia':
        printSenaia();
        break;
      default:
        printTest();
        break;
    }
  };
  // ------------------------------------------------------------------------------------------------------
  const printSenaia = async () => {
    try {
      const Printer = printerList[selectedValue];
      Printer.printText('<C>COIBFE</C>', {
        cut: false,
      });
      Printer.printImage(
        'https://sistemas.senacsa.gov.py:8443/ipplanning/static/Resources/LOGO_SENACSA_GOBIERNO_2018.png'
      );
      Printer.printBill('<C>SENAIA</C>');
    } catch (err) {
      console.warn(err);
    }
  };
  // ------------------------------------------------------------------------------------------------------

  const printTest = async () => {
    try {
      const Printer = printerList[selectedValue];
      Printer.printText('<C>COIBFE</C>', {
        cut: false,
      });
      Printer.printImage(
        'https://sistemas.senacsa.gov.py:8443/ipplanning/static/Resources/LOGO_SENACSA_GOBIERNO_2018.png'
      );
      Printer.printBill('<C>TESTE</C>');
    } catch (err) {
      console.warn(err);
    }
  };
  // ------------------------------------------------------------------------------------------------------
  const printCoibfe = async () => {
    if (Env.DEBUG === 'true') {
      console.log('HAVE DATA2', PRINTER_COUNTER);
    }
    if (PRINTER_COUNTER > 0) {
      setLoading(true);
      let coibfeFinalidad = storage?.coibfeFinalidad;
      if (coibfeFinalidad === 'F') {
        coibfeFinalidad = 'Faena';
      } else {
        coibfeFinalidad = 'Otros';
      }

      let coibfeDestino = storage?.coibfeDestino;
      if (coibfeDestino === 'UE') {
        coibfeDestino = 'UNION EUROPEA';
      }

      let coibfeTransporte = storage?.coibfeTransporte;
      if (storage?.coibfeTransporte === 'O') {
        coibfeTransporte = 'OTROS';
      } else if (storage?.coibfeTransporte === 'F') {
        coibfeTransporte = 'FLUVIAL';
      } else if (storage?.coibfeTransporte === 'T') {
        coibfeTransporte = 'TERRESTRE';
      }

      var tempData = storage?.coibfePosDate; //2021-02-05T10:11:55
      var dias = tempData.substring(8, 10);
      var mess = tempData.substring(5, 7);
      var anos = tempData.substring(0, 4);
      var horas = tempData.slice(11, 5);
      tempData = dias + '/' + mess + '/' + anos + '  ' + tempData;
      // console.log('date', tempData, 'dias', dias, 'mess', mess, 'anos', anos);

      const BOLD_ON = COMMANDS.TEXT_FORMAT.TXT_BOLD_ON;
      const BOLD_OFF = COMMANDS.TEXT_FORMAT.TXT_BOLD_OFF;
      const CENTER = COMMANDS.TEXT_FORMAT.TXT_ALIGN_CT;
      const OFF_CENTER = COMMANDS.TEXT_FORMAT.TXT_ALIGN_LT;
      try {
        const getDataURL = () => {
          (QrRef as any).toDataURL(callback);
        };
        const callback = async (dataURL: string) => {
          let qrProcessed = dataURL.replace(/(\r\n|\n|\r)/gm, '');
          // Can print android and ios with the same type or with encoder for android
          if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const Printer: typeof BLEPrinter = printerList[selectedValue];
            await Printer.printImageBase64(base64SenacsaLogo, {
              imageWidth: 380,
              imageHeight: 200,
            });

            var hilton = parseInt(storage?.coibfeAniHilton, 10) || 0;
            var hiltons = '';
            if (hilton > 0) {
              hiltons = `COTA HILTON: \r\n Certifico que los bovinos en ,\r\n cantidad  de ${storage?.coibfeAniHilton} bovinos \r\n cumplen con los\r\n requisitos establecidos por el \r\n SENACSA para la certificacion \r\n de cuota hilton, y han sido \r\n marcados con la letra H.\r\n `;
            }

            await Printer.printText(
              `SERVICIO NACIONAL DE CALIDAD Y \n         SALUD ANIMAL \n        S E N A C S A \r\n COIBFE N. ${storage?.coibfeId} \r\n COD. VERIFICADOR:  ${storage?.coibfeCodigoV} \r\n...............................\r\n DESTINO: ${coibfeDestino} \r\n............................... \r\n NOMBRE ESTABLECIMIENTO: \n ${storage?.coibfePropriedadName} \r\n COD.SIGOR ESTABLECIMIENTO: \n ${storage?.coibfePropriedadSigor} \r\n COD.SITRAP ESTABLECIMIENTO: \n ${storage?.coibfePropriedadSitrap} \r\nNOMBRE PROPIETARIO: \n ${storage?.coibfeProductorName} \r\n Cod.SIGOR PROPIETARIO: \r\n ${storage?.coibfeProductor_ID} \r\n DEPARTAMENTO: \n ${storage?.coibfePropriedadDepartamento} \r\n DISTRITO: \n ${storage?.coibfePropriedadDistrito} \r\n COD.SITRAP PRODUCTOR: \n ${storage?.coibfeProductorSitrap} \r\n...............................\r\n El que subscribe Dr.a. \n${storage?.coibfeTecnicoName}\nVeterinario Privado Acreditado\n(VPA) con Acreditacion SENACSA\nN. ${storage?.coibfeTecnico_VPA_ID} certifica:\na)Que los animales estan libres\nde sintomatologia de enfermedad\ninfecto-contagiosas, al momento\nde la inspeccion pre-embarque\nb) Que dichos animales estan\nidentificados con la marca a\nfuego del propietario de los\nmismos. \n c) Que ha identificado ${storage?.coibfeAniTotal} \n bovinos con su numero de \n acreditacion de SENACSA.\n d) Que todos los animales \n certificados estan identi- \n ficados con el correspondi- \n ente D.I. de  acuerdo  al \n reglamento del Sistema de \n Trazabilidad Bovina del \n Paraguay "SITRAP" vigente.\r\n...............................\r\n ANIMALES CERTIFICADOS:\r\n NOVILLOS : ${storage?.coibfeAniNovillos}.\n VACAS    : ${storage?.coibfeAniVacas}\n VAQUILLAS: ${storage?.coibfeAniVaquillas} \n TOROS    : ${storage?.coibfeAniToros}\n OTROS    : ${storage?.coibfeAniOtros} \n TOTAL    : ${storage?.coibfeAniTotal}\n...............................\r\n FINALIDAD: ${coibfeFinalidad} \r\n TRANSPORTE UTILIZADO: \n ${coibfeTransporte} \r\n FRIGORIFICO: \n ${storage?.coibfeFrigorificoName} \r\n Frigorifico Cod. Sigor: \n ${storage?.coibfeFrigorifico_ID} \r\n...............................\r\nSe da cumplimiento a las disposi\r\nciones sanitarias vigentes rela-\r\n cionadas al estado sanitario de\r\n ${storage?.coibfeAniTotal} bovinos embarcados,\r\n y se utilizaron los precintos  \r\n en el vehiculo de transporte \r\n de los animales.\r\n El propietario de los animales \r\n declara que los mismos han \r\n permanecido  al menos tres \r\n meses en el establecimiento\r\n de origen.\r\n\r\n...............................\r\n ${hiltons} \n ...............................\r\n FECHA Y HORA:\r\n ${tempData} \r\n\r\n NUMERO PRECINTOS UTILIZADOS: \r\n ${storage?.coibfePrecinto1} '\r\n ${storage?.coibfePrecinto2} '\r\n ${storage?.coibfePrecinto3} '\r\n##############################\r\n COORDENADAS GPS:\r\n LAT: ${storage?.coibfePosLatitud} \r\n LON: ${storage?.coibfePosLongitud} \r\n...............................\r\n OBSERVACIONES:\r\n ${storage?.coibfeOBS} \r\n...............................\r\n...............................\r\n
            "El presente certificado es \r\n valido por 72 horas a partir de la\r\n fecha de expedicion del mismo,\r\n y debe ser acompanado por el \r\n Certificado Oficial de Transito\r\n...............................\r\n\r\n\r\n\r\n...............................\r\n Firma y Sello del Veterinario \r\n Privado Acreditado\r\n...............................\r\n...............................\r\nFirma del Responsable Precintado\r\n\n Nombre:........................\r\n\n C.I.:..........................\r\n\n Tipo:...........................\r\n`,
              { beep: false }
            );

            // await Printer.printText(
            //   `...............................\r\n FECHA Y HORA:\r\n ${storage?.coibfePosDateTime} \r\n\r\n NUMERO PRECINTOS UTILIZADOS: \r\n ${storage?.coibfePrecinto1} '\r\n ${storage?.coibfePrecinto2} '\r\n ${storage?.coibfePrecinto3} '\r\n##############################\r\n COORDENADAS GPS:\r\n LAT: ${storage?.coibfePosLatitud} \r\n LON: ${storage?.coibfePosLongitud} \r\n...............................\r\n OBSERVACIONES:\r\n ${storage?.coibfeOBS} \r\n...............................\r\n...............................\r\n
            // "El presente certificado es \r\n valido por 72 horas a partir de la\r\n fecha de expedicion del mismo,\r\n y debe ser acompanado por el \r\n Certificado Oficial de Transito\r\n...............................\r\n\r\n\r\n\r\n...............................\r\n Firma y Sello del Veterinario \r\n Privado Acreditado\r\n...............................\r\n...............................\r\nFirma del Responsable Precintado\r\n Nombre:........................\r\n C.I.:..........................\r\n Tipo:...........................\r\n`,
            //   {
            //     beep: false,
            //   },
            // );
            await Printer.printText('\n');
            await Printer.printImageBase64(qrProcessed, {
              imageWidth: 150,
              imageHeight: 150,
            });
          } else {
            // optional for android
            // android
            const Printer = printerList[selectedValue];
            const encoder = new EscPosEncoder();
            let _encoder = encoder
              .initialize()
              .align('center')
              .line('BILLING')
              .qrcode(
                // 'https://pyfoundation.org/coibfe/' + String(storage?.coibfeId),
                Env.EXPO_PUBLIC_API_URL +
                'wdb/qrcode/coibfecoibfes/' +
                String(storage?.coibfeId)
              )
              .encode();
            let base64String = Buffer.from(_encoder).toString('base64');
            await Printer.printRaw(base64String);
          }
          await savePrintCounter();
        };
        getDataURL();
        setLoading(false);
        // END OF PRINTING
      } catch (err: any) {
        console.warn(err);
        setLoading(false);
        Alert.alert(err.message || 'ERROR Bluetooth');
      }
    } else {
      Alert.alert('3 copias Impremidas');
    }
    setLoading(false);
  };
  // ------------------------------------------------------------------------------------------------------
  // ######################## STORAGE #########################################
  // ------------------------------------------------------------------------------------------------------
  const storageUpdatePrinter = async (key: string, values: number) => {
    const valor = String(values);
    const returno = await Storage.updatePrinter(key, valor);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
  };
  //--------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  const storageGetOne = async (key: string, objKey: string) => {
    const storages = await Storage.getOneDatas(key, objKey);
    //console.log(storages.coibfe_print);
    if (Env.DEBUG === 'true') {
      // console.log(storages);
    }
  };
  //---------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  const storageUpdate = async (key: string, objKey: string, values: any) => {
    const returno = await Storage.updateDatas(key, objKey, values);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
  };
  //--------------------------------------------------------------------------
  const storageSave = async (key: string, value: any) => {
    const returno = await Storage.setDatas(key, value);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
  };
  //--------------------------------------------------------------------------
  const storageClear = async (key: string) => {
    const returno = await Storage.removeDatas(key);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
  };
  // --------------------------------------------------------------------------
  const storageGet = async (key: string) => {
    const storages = await Storage.getDatas(key);
    //console.log(storages.coibfe_print);
    if (Env.DEBUG === 'true') {
      // console.log(storages);
    }
  };
  // ------------------------------------------------------------------------------------------------------
  // ######################## STORAGE #########################################
  const init = useCallback(async () => {
    if (!onlyOne) {
      onlyOne = true;
      storage = await Storage.getDatas('@LOCALCOIBFE');
      const printerValue = await Storage.getOneDatas(
        '@LOCALCOIBFE',
        'coibfe_print'
      );
      if (Env.DEBUG === 'true') {
        // console.log('DATA', storage);
      }
      if (Functions.isObject(storage)) {
        PRINTER_COUNTER = parseInt(printerValue, 10) || 0;
        setPrinterCounter(String(PRINTER_COUNTER));
        if (Env.DEBUG === 'true') {
          console.log('HAVE DATA', PRINTER_COUNTER);
        }
      }
    }
  }, []);
  // ------------------------------------------------------------------------------------------------------
  useEffect(() => {
    setLoading(true);
    getListDevices().then();
    init();
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true
    );
    return () => backHandler.remove();
  }, [selectedValue]);
  // ------------------------------------------------------------------------------------------------------

  const _renderNet = () => (
    <>
      {/* */}
      <Text style={[styles.text, { color: 'black', marginLeft: 0 }]}>
        {translate('printer.printerIp')}....
      </Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          height: 45,
        }}
        placeholder={translate('printer.printerPort')}
        value={selectedNetPrinter?.host}
        onChangeText={onChangeText}
      />
      {!connected ? (
        <View
          style={{
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'grey', height: 30 }]}
            // disabled={!selectedPrinter?.device_name}
            onPress={findPrinter}
          >
            <AntIcon name={'settings'} color={'white'} size={18} />
            <Text style={styles.text}>{translate('printer.find')}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
  // ------------------------------------------------------------------------------------------------------
  const _renderOther = () => (
    <>
      <Text>{translate('printer.selectPrinter')}</Text>
      <Picker
        selectedValue={selectedPrinter}
        onValueChange={setSelectedPrinter}
      >
        {devices !== undefined &&
          devices?.length > 0 &&
          devices?.map((item: any, index) => (
            <Picker.Item
              label={item.device_name}
              value={item}
              key={`printer-item-${index}`}
            />
          ))}
      </Picker>
    </>
  );
  // ------------------------------------------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Printers option */}
        <View style={styles.section}>
          <Text style={styles.title}>{translate('printer.selectype')}</Text>
          <Picker
            selectedValue={selectedValue}
            mode="dropdown"
            onValueChange={handleChangePrinterType}
          >
            {Object.keys(printerList).map((item, index) => (
              <Picker.Item
                label={item.toUpperCase()}
                value={item}
                key={`printer-type-item-${index}`}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.section}>
          {/* {selectedValue === 'net' ? _renderNet() : _renderOther()} */}
          {selectedValue === 'blu' ? _renderOther() : _renderOther()}
          {/* Buttons Connect */}
          {!isPending && (
            <>
              <Button
                title="BLUETOOTH"
                onPress={() => setBluetooth(!btStatus)}
              />
              <Text>{btStatus ? 'LIGADO' : 'DESLIGADO'}</Text>
            </>
          )}
          {isPrinting ? (
            <View
              style={[
                styles.buttonContainer,
                {
                  marginTop: 40,
                },
              ]}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={handleConnectSelectedPrinter}
              >
                <AntIcon name={'settings'} color={'white'} size={18} />
                <Text style={styles.text}>{translate('printer.Connect')}</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {/* Printers List */}
          {connected ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: 'blue' }]}
                onPress={handlePrintFactura} //handlePrintBill
              >
                <AntIcon name={'arrow-up'} color={'white'} size={18} />
                <Text style={styles.text}>
                  {translate('printer.invoicePrint')}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'red' }]}
              onPress={goInitialPage} //handlePrintBill
            >
              <AntIcon name={'arrow-up'} color={'white'} size={18} />
              <Text style={styles.text}>{translate('home.SignOut')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.qr}>
            <QRCode
              value={
                'www.pyfoundation.org/coibfe/' + String(storage?.coibfeId || '')
              }
              getRef={(el: any) => (QrRef = el)}
            />
          </View>
        </View>
        <ViewPanel>
          <TitleBlack size={18}>PRINT={printerCounter}</TitleBlack>
        </ViewPanel>
        <Loading loading={loading} />
      </ScrollView>
    </View>
  );
};
// ------------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {},
  rowDirection: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    width: deviceWidth / 1.5,
    alignSelf: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  qr: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
