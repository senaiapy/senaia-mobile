/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck

// ########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
// ########################################

import { Env } from '@env';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  PermissionsAndroid,
  Platform,
  TextInput,
  Vibration,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';
import GetLocation from 'react-native-get-location';
import Orientation from 'react-native-orientation-locker';
import RNRestart from 'react-native-restart';
import * as yup from 'yup';

import { ButtonBack } from '@/components/ButtonBack';
import { ButtonNext } from '@/components/ButtonNext';
import Loader from '@/components/loader';
import type { RadioButtonProps } from '@/components/RadioButtonsGroup';
import RadioGroup from '@/components/RadioButtonsGroup';
import { useAuth, useRegis } from '@/core';
//import {useNetInfo} from '@react-native-community/netinfo'; // import the hook
import { translate } from '@/core';
import type CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';
import { createCoibfeCoibfesApi } from '@/services/coibfeSync/apis';
import Storage from '@/services/crudStorage';
// ###############################   WDB  ################################
import crudWDB from '@/services/crudWDB';
import usuarioService from '@/services/usuario/UsuarioService';
import Functions from '@/utils/Functions';
import protek from '@/utils/Protek';

import FrigorificoList from '../Components/FrigorificoList';
//import ProductorList from '../Components/ProductorList';
import ProductorPropiedadList from '../Components/ProductorPropiedadList';
import PropriedadList from '../Components/PropriedadList';
import FormFinal from './formFinal';
import FormFinalPdf from './formFinalPdf';
import {
  FormError,
  FormView,
  InputAnimal,
  Pads,
  PrintButton,
  PrintCancelButton,
  SendButton,
  styles,
  TitleBlack,
  TitleGray,
  TitleWhite,
  ViewCenter,
  ViewContainer,
  ViewPanel,
  ViewPanel2,
  ViewRowS,
  ViewRowSS,
  ViewSpace,
} from './styles';
import type {
  ICoibfes,
  IFrigorificos,
  IProductors,
  IPropriedads,
  IStorageRegister,
  TFormData,
} from './types';
// import sync, {triggerSync} from'@/services/coibfeSync/sync';
// import dump from'@/services/coibfeSync/dump';
// triggerSync();
// dump();
// sync();
// ###############################   WDB  ################################

// ###############################   CONST  ################################

const schema = yup.object().shape({
  email: yup
    .string()
    .required(translate('login.EmailError'))
    .email(translate('login.EmailValida')),
  password: yup
    .string()
    .required(translate('login.PasswordError'))
    .min(4, translate('login.PasswordValida'))
    .max(4, translate('login.PasswordValida')),
});

// ###############################   CONST  ################################

// ###############################   RADIOBUTTON  ##########################

const radioButtonsFinalidadData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Faena',
    value: 'F',
    selected: true,
  },
  {
    id: '2',
    label: 'Otro',
    value: 'O',
  },
];

const radioButtonsDestinoData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Union Europea',
    value: 'UE',
    selected: true,
  },
  /*
  {
    id: '2',
    label: 'Chile',
    value: 'CHILE',
  },
  {
    id: '3',
    label: 'Otro',
    value: 'OTRO',
  },
  */
];

const radioButtonsTransporteData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Terra',
    value: 'T',
    selected: true,
  },
  {
    id: '2',
    label: 'Fluvial',
    value: 'F',
  },
  {
    id: '3',
    label: 'Otro',
    value: 'O',
  },
];
// ###############################   RADIOBUTTON  ##########################

// ###############################   VARIABLES  ################################
let COIBFE_DATA = {
  coibfeId: '',
  coibfeKey: '',
  coibfeToken: '',
  coibfeCodigoV: '',
  coibfeDestino: '',
  coibfeFinalidad: '',
  coibfeTransporte: '',
  coibfeAniNovillos: '',
  coibfeAniToros: '',
  coibfeAniVacas: '',
  coibfeAniVaquillas: '',
  coibfeAniOtros: '',
  coibfeAniTotal: '',
  coibfeAniHilton: '',
  coibfeTecnico_VPA_ID: '',
  coibfeTecnicoName: '',
  coibfeFrigorificoName: '',
  coibfeFrigorifico_ID: '',
  coibfeProductorName: '',
  coibfeProductor_ID: '',
  coibfeProductorSitrap: '',
  coibfePropriedadName: '',
  coibfePropriedad_ID: '',
  coibfePropriedadSigor: '',
  coibfePropriedadSitrap: '',
  coibfePropriedadDepartamento: '',
  coibfePropriedadDistrito: '',
  coibfePropriedad_productor_id: '',
  coibfePrecinto1: '',
  coibfePrecinto2: '',
  coibfePrecinto3: '',
  coibfePos_ID: '',
  coibfePosLatitud: '',
  coibfePosLongitud: '',
  coibfePosDate: '',
  coibfePosApiKeyMobile: '',
  coibfeOBS: '',
  coibfeDocNroProp: '',
  coibfeDocDigProp: '',
  coibfeDocOrigAbrev: '',
  coibfeDocTipoAbrev: '',
  coibfeErroCode: '',
  coibfeErroMessage: '',
  coibfeAnimales: '',
  coibfe_isSinc: '',
  coibfe_print: '0',
};

let COIBFE_DATA_NULL = {
  coibfeId: '',
  coibfeKey: '',
  coibfeToken: '',
  coibfeCodigoV: '',
  coibfeDestino: '',
  coibfeFinalidad: '',
  coibfeTransporte: '',
  coibfeAniNovillos: '',
  coibfeAniToros: '',
  coibfeAniVacas: '',
  coibfeAniVaquillas: '',
  coibfeAniOtros: '',
  coibfeAniTotal: '',
  coibfeAniHilton: '',
  coibfeTecnico_VPA_ID: '',
  coibfeTecnicoName: '',
  coibfeFrigorificoName: '',
  coibfeFrigorifico_ID: '',
  coibfeProductorName: '',
  coibfeProductor_ID: '',
  coibfeProductorSitrap: '',
  coibfePropriedadName: '',
  coibfePropriedad_ID: '',
  coibfePropriedadSigor: '',
  coibfePropriedadSitrap: '',
  coibfePropriedadDepartamento: '',
  coibfePropriedadDistrito: '',
  coibfePropriedad_productor_id: '',
  coibfePrecinto1: '',
  coibfePrecinto2: '',
  coibfePrecinto3: '',
  coibfePos_ID: '',
  coibfePosLatitud: '',
  coibfePosLongitud: '',
  coibfePosDate: '',
  coibfePosApiKeyMobile: '',
  coibfeOBS: '',
  coibfeDocNroProp: '',
  coibfeDocDigProp: '',
  coibfeDocOrigAbrev: '',
  coibfeDocTipoAbrev: '',
  coibfeErroCode: '',
  coibfeErroMessage: '',
  coibfeAnimales: '',
  coibfe_isSinc: '',
  coibfe_print: '0',
};

let onlyOne = false;
let onlyPrinter = false;

let PRINTER_COUNTER: number = 0;
let COIBFE_ID_COUNTER: number = 0;

let storage: any;
let codigov: any = null; // verification code control base
// ###############################
// ###############################
// ###############################
// ###############################
// ###############################

const CoibfeScreen: React.FC = () => {
  Orientation.lockToPortrait();
  const { status } = useAuth();
  const { statusr } = useRegis();

  const PY_DIGIT = 4;
  const maxFormNumber = 10;
  let maxAnimalTotal = 45; // 45 for TERRESTRE 150 FLUVIAL
  const [vacasValue, setVacasValue] = useState('');
  const [search, setSearch] = useState('');
  const [filterss, setFilterss] = useState('');
  // const { data, loading } = useGetCharactersQuery();

  const [name, setName] = useState('');

  const [userLocked, setUserLocked] = useState(false);
  const [userStatus, setUserStatus] = useState(true);

  const [isLoadingS, setIsLoadingS] = useState(false);
  const [isFormErrorS, setIsFormErrorS] = useState(false);
  const [isHilton, setIsHilton] = useState(false);

  const [isPrintingS, setIsPrintingS] = useState(false);
  const [positionForm, setPositionForm] = useState(0);
  const [buttonSheetExpand, setButtonSheetExpand] = useState(false);
  const [printerCounter, setPrinterCounter] = useState('0');

  const [printPdf, setPrintPdf] = useState(false);

  const [positionPhase, setPositionPhase] = useState<Boolean[]>([false]);
  let formPosition: Boolean[] = new Array(maxFormNumber).fill(false);

  const [propriedadS, updatePropriedadS] = useState<any[]>([]);
  let propriety: any[] = [];

  const [propriedadss, setPropriedadss] = useState<Partial<IPropriedads>>({
    propriedad_id: '',
    propriedadname: '',
    propriedadpropietario: '',
    propriedadstatus: '',
    propriedadsigor: '',
    propriedadsitrap: '',
    propriedaddepartamento: '',
    propriedaddistrito: '',
    propriedadproductors: '',
  });

  const [productorss, setProductorss] = useState<Partial<IProductors>>({
    productorname: '',
    productor_id: '',
    productortoken: '',
    productorsitrap: '',
    productoracreditacion: '',
    productor_propriedad_id: '',
    productorpassword: '',
    productormail: '',
    productorphone: '',
    productorissync: '',

    productordocnroprop: '',
    productordocdigprop: '',
    productordocorigabrev: '',
    productordoctipoabrev: '',
    productorstatus: '',
    productormessages: '',
    productorkeyprivate: '',
    productorapikeysoftware: '',
  });

  const [frigorificoss, setFrigorificoss] = useState<Partial<IFrigorificos>>({
    frigorificoname: '',
    frigorifico_id: '',
    frigorificodepartamento: '',
    frigorificokeyprivate: '',
    frigorificostatus: '',
  });

  const [coibfes, setCoibfes] = useState<Partial<ICoibfes>>({
    coibfeid: '',
    coibfekey: '',
    coibfetoken: '',
    coibfecodigov: '',
    coibfedestino: 'UE',
    coibfefinalidad: 'F',
    coibfetransporte: 'T',
    coibfeaninovillos: '',
    coibfeanitoros: '',
    coibfeanivacas: '',
    coibfeanivaquillas: '',
    coibfeaniotros: '',
    coibfeanitotal: '0',
    coibfeanihilton: '',
    coibfetecnico_vpa_id: '',
    coibfetecniconame: '',
    coibfefrigorificoname: '',
    coibfefrigorifico_id: '',
    coibfeproductorname: '',
    coibfeproductor_id: '',
    coibfeproductorsitrap: '',
    coibfepropriedadname: '',
    coibfepropriedad_id: '',
    coibfepropriedadsigor: '',
    coibfepropriedadsitrap: '',
    coibfepropriedaddepartamento: '',
    coibfepropriedaddistrito: '',
    coibfepropriedad_productor_id: '',
    coibfeprecinto1: '',
    coibfeprecinto2: '',
    coibfeprecinto3: '',
    coibfepos_id: '',
    coibfeposlatitud: '',
    coibfeposlongitud: '',
    coibfeposdate: '',
    coibfeposapikeymobile: '',
    coibfeobs: '',
    coibfedocnroprop: '',
    coibfedocdigprop: '',
    coibfedocorigabrev: '',
    coibfedoctipoabrev: '',
    coibfeerrocode: '',
    coibfeerromessage: '',
    coibfeanimales: '',
    coibfe_issinc: 'false',
  });
  //-----------------------------------------------

  //-----------------------------------------------
  // ###############################   VARIABLES  ################################

  // ###############################   HOOKS  ################################

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  // const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const textInputPropriedadRef = useRef<TextInput>(null);
  const textInputProductorRef = useRef<TextInput>(null);
  const textInputFrigorificoRef = useRef<TextInput>(null);

  // ###############################   HOOKS  ################################

  // ###############################   FUNCTIONS  ################################

  const showConfirmDialog = () => {
    if (!PRINTER_COUNTER) {
      return Alert.alert(
        '¿Estás Seguro?',
        'Si Continua... El Proximo COIBFE Cambia!!!',
        [
          // The "Yes" button
          {
            text: 'Si',
            onPress: () => {
              printFinal();
            },
          },
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: 'No',
          },
        ]
      );
    } else {
      printFinal();
    }
  };
  // ---------------------------------
  const onSubmit = (data: TFormData) => {
    // if (!netInfo.isConnected) {
    //   onMessage(translate('errors.internet'), ' !!!! ', 'danger');
    // }
    // console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  // ---------------------------------

  const { handleSubmit, control } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });
  // ---------------------------------

  function navigateToBack() {
    navigation.goBack();
  }
  // ---------------------------------

  function navigateToPage(/*film: FilmDTO*/) {
    navigation.navigate('HomeLazos' /*, { film }*/);
    // navigation.goBack();
  }
  // ---------------------------------

  function Register() {
    navigation.navigate('Register');
  }
  // ---------------------------------

  function Password() {
    navigation.navigate('Password');
  }
  // ----------------------------------------------

  async function handleSave() {
    bottomSheetRef.current?.collapse();
  }
  //-----------------------------------------------

  const filterObject = (obj: any, filter: any, filterValue: any) =>
    Object.keys(obj).reduce(
      (acc, val) =>
        obj[val][filter] === filterValue ? acc : { ...acc, [val]: obj[val] },
      {}
    );

  // ----------------------------------------------
  const printFinal = async () => {
    // TEST IF REGISTERED
    if (statusr !== 'regisIn') {
      navigation.navigate('Register');
      // TEST IF SIGNED
    } else if (status !== 'signIn') {
      navigation.navigate('Login');
    } else {
      setIsLoadingS(true);
      try {
        // SAVE DB COIBFE
        await verifyGPS();
        // --- read print values = 0 update
        const printerValue = await Storage.getOneDatas(
          '@LOCALCOIBFE',
          'coibfe_print'
        );
        // console.log('COIBFE_VERIFY2', printerValue);

        PRINTER_COUNTER = parseInt(printerValue, 10) || 0;
        setPrinterCounter(String(PRINTER_COUNTER));
        if (PRINTER_COUNTER === 0) {
          // console.log('COIBFE_VERIFY3', PRINTER_COUNTER);

          const result = await storageUpdate(
            '@LOCALCOIBFE',
            'coibfe_print',
            '3'
          );
          setPrinterCounter('3');
          let coibfeIds = 0;
          // USER UNLOCKED
          if (codigov !== 'PRUEBA') {
            // ############################UPDATE USER_TOKEN LOCAL if printer = 0
            const storagesRegister: IStorageRegister = await storageGet(
              '@LOCALREGISTER'
            );

            // COIBFE ID
            const tempcoibfeid: any = String(storagesRegister?.coibfeid);
            coibfeIds = parseInt(tempcoibfeid, 10);
            coibfeIds += 1;
            // console.log('COIBFE_VERIFY4', coibfeIds);
            if (isNaN(coibfeIds)) {
              coibfeIds = 1;
            }

            // UPDATE USER TOKEN ID

            const returno = await storageUpdate(
              '@LOCALREGISTER',
              'coibfeid',
              String(coibfeIds)
            );

            // ############################UPDATE LOCAL DB

            const valuess = await crudWDB.creaTableWDB<CoibfeCoibfeModel>(
              'coibfecoibfes',
              coibfes
            );
            // #######################SEND_TO_COIBFE

            const returno_coibfe = await SyncCoibfe(coibfes);
            // #######################SEND_TO_token

            const returno_token = await SyncToken();
          } else {
            // set coibfe id in 0
            setCoibfes({
              ...coibfes,
              coibfeid: '40000000',
            });
          }
        }
      } catch (err) {
        console.warn(err);
        setIsLoadingS(false);
      }
      setIsLoadingS(false);
      onlyPrinter = true; // one printed
      navigation.navigate('Printer');
    }
  };
  // ----------------------------------------------
  const printCancel = async () => {
    setIsLoadingS(true);
    setPositionForm(0); // reset forms
    setIsPrintingS(false); // hide buttons
    // Cancel DB COIBFE
    await storageSave('@LOCALCOIBFE', COIBFE_DATA_NULL); //init storage
    storage = await storageGet('@LOCALCOIBFE');
    storeToCoibfe(); // recover
    //const value = await crudWDB.findAllWDB('coibfecoibfes');
    //console.log(value);

    const result = await storageUpdate('@LOCALCOIBFE', 'coibfe_print', '0');
    setIsLoadingS(false);
    //navigation.navigate('Home');
    setTimeout(() => {
      RNRestart.Restart(); // reboot
    }, 2000);
  };
  // ----------------------------------------------
  // ----------------------------------------------

  const getFunction = (datas: any): any => {
    let returno = false;
    returno = true;
    // console.log(datas);
    return returno;
  };
  // ----------------------------------------------
  // ###############################   FUNCTIONS  ################################

  // ###############################   FORM CONTROL  ################################

  type FORM_state =
    | 'FORM_PROPRIEDAD'
    | 'FORM_PRODUCTOR'
    | 'FORM_FRIGORIFICO'
    | 'FORM_ANIMALES'
    | 'FORM_ANIMALES_TOTAL'
    | 'FORM_FINALIDAD'
    | 'FORM_DESTINO'
    | 'FORM_TRANSPORTE'
    | 'FORM_PRECINTOS'
    | 'FORM_OBS'
    | 'FORM_CARAVANAS';
  // ----------------------------------------------
  const incForm = () => {
    console.log(positionForm);
    if (verifyForms()) {
      clearForms();
      let values: any = positionForm;
      if (positionForm < maxFormNumber) {
        values += 1;
        setPositionForm(values);
      }
      if (positionForm >= maxFormNumber) {
        bottomSheetRef.current?.collapse();
      }
    }
  };
  // ----------------------------------------------

  const handleIncForm = async () => {
    setButtonSheetExpand(false);
    // console.log(coibfes);
    // TODO: remove login
    if (positionForm === 0) {
      if (propriedadss.propriedadname !== '') {
        setFilterss(propriedadss.propriedadproductors || '');
        setSearch('');
        setIsFormErrorS(false);
        initLogin();
        incForm();
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfePropriedadName',
          propriedadss.propriedadname
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfePropriedad_ID',
          propriedadss.propriedad_id
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfePropriedadSigor',
          propriedadss.propriedadsigor
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfePropriedadSitrap',
          propriedadss.propriedadsitrap
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfePropriedadDepartamento',
          propriedadss.propriedaddepartamento
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfePropriedadDistrito',
          propriedadss.propriedaddistrito
        );
      } else {
        //have printing
        if (PRINTER_COUNTER > 0) {
          incForm();
        } else {
          setIsFormErrorS(true);
        }
      }
    } else if (positionForm === 1) {
      if (productorss.productorname !== '') {
        setSearch('');
        setIsFormErrorS(false);
        incForm();
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeDocNroProp',
          productorss.productordocnroprop
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeDocDigProp',
          productorss.productordocdigprop
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeDocOrigAbrev',
          productorss.productordocorigabrev
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeDocTipoAbrev',
          productorss.productordoctipoabrev
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeProductorName',
          productorss.productorname
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeProductor_ID',
          productorss.productor_id
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeProductorSitrap',
          productorss.productorsitrap
        );
      } else {
        //have printing
        if (PRINTER_COUNTER > 0) {
          incForm();
        } else {
          setIsFormErrorS(true);
        }
      }
    } else if (positionForm === 2) {
      /*
      console.log(
        'PROP',
        propriedadss,
        'FRIG',
        frigorificoss,
        'PROD',
        productorss,
      );
      */
      if (frigorificoss.frigorificoname !== '') {
        //setIsLoadingS(true);
        setSearch('');
        setIsFormErrorS(false);
        setCoibfes({
          ...coibfes,
          coibfefrigorificoname: frigorificoss.frigorificoname,
          coibfefrigorifico_id: frigorificoss.frigorifico_id,
          coibfeproductorname: productorss.productorname,
          coibfeproductor_id: productorss.productor_id,
          coibfeproductorsitrap: productorss.productorsitrap,
          coibfepropriedadname: propriedadss.propriedadname,
          coibfepropriedad_id: propriedadss.propriedad_id,
          coibfepropriedadsigor: propriedadss.propriedadsigor,
          coibfepropriedadsitrap: propriedadss.propriedadsitrap,
          coibfepropriedaddepartamento: propriedadss.propriedaddepartamento,
          coibfepropriedaddistrito: propriedadss.propriedaddistrito,
          coibfedocnroprop: productorss.productordocnroprop,
          coibfedocdigprop: productorss.productordocdigprop,
          coibfedocorigabrev: productorss.productordocorigabrev,
          coibfedoctipoabrev: productorss.productordoctipoabrev,
        });
        incForm();
        bottomSheetRef.current?.expand();
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeFrigorificoName',
          frigorificoss.frigorificoname
        );
        await storageUpdate(
          '@LOCALCOIBFE',
          'coibfeFrigorifico_ID',
          frigorificoss.frigorifico_id
        );
        //setIsLoadingS(false);
      } else {
        //have printing
        if (PRINTER_COUNTER > 0) {
          incForm();
        } else {
          setIsFormErrorS(true);
        }
      }
    } else if (positionForm === 5) {
      verifyCode();
      incForm();
    } else if (positionForm === 6) {
      // test for animals
      if (await verifyTotal()) {
        incForm();
      }
    } else if (positionForm === 7) {
      // test for animals
      if (!verifyHilton()) {
        incForm();
      }
    } else if (positionForm === 8) {
      //teste precintos
      if (!verifyPrecinto()) {
        incForm();
      }
    } else if (positionForm === 9) {
      if (await verifyGPS()) {
        incForm();
        coibfeToStore(); // change data to store
        storageSave('@LOCALCOIBFE', COIBFE_DATA);
      } else {
        showSimpleMessage(translate('coibfe.gps_error'), 'GPS', 'danger', {
          hideStatusBar: true,
        });
      }
    } else {
      incForm();
    }
  };
  // ----------------------------------------------

  const handleDecForm = async () => {
    // const valuess = await crudWDB.creaTableWDB<CoibfeCoibfeModel>(
    //   'coibfecoibfes',
    //   coibfes,
    // );
    //const value = await crudWDB.findAllWDB('coibfepropriedads');

    setButtonSheetExpand(false);
    if (verifyForms()) {
      clearForms();
      let values: any = positionForm;
      if (positionForm > 0) {
        values -= 1;
        setPositionForm(values);
      } else {
        if (positionForm === 0) {
          setIsLoadingS(true);
          setPropriedadss({
            propriedad_id: '',
            propriedadname: '',
            propriedadpropietario: '',
            propriedadstatus: '',
            propriedadsigor: '',
            propriedadsitrap: '',
            propriedaddepartamento: '',
            propriedaddistrito: '',
            propriedadproductors: '',
          });
          setProductorss({
            productorname: '',
            productor_id: '',
            productortoken: '',
            productorsitrap: '',
            productoracreditacion: '',
            productor_propriedad_id: '',
            productorpassword: '',
            productormail: '',
            productorphone: '',
            productorissync: '',

            productordocnroprop: '',
            productordocdigprop: '',
            productordocorigabrev: '',
            productordoctipoabrev: '',
            productorstatus: '',
            productormessages: '',
            productorkeyprivate: '',
            productorapikeysoftware: '',
          });
          setFrigorificoss({
            frigorificoname: '',
            frigorifico_id: '',
            frigorificodepartamento: '',
            frigorificokeyprivate: '',
            frigorificostatus: '',
          });
          setFilterss('');
          setSearch('');
          setIsFormErrorS(false);
          setIsLoadingS(false);
        }
      }
    }
  };
  // ----------------------------------------------
  // ----------------------------------------------
  const verifyCode = async () => {
    let returno = false;

    // TEST USER ACTIVE AND UNLOCKED
    if (userStatus && !userLocked) {
      codigov = Functions.generateSecret(
        coibfes.coibfeid || '',
        coibfes.coibfedestino || ''
      );
    } else {
      codigov = 'PRUEBA';
    }
    setCoibfes({ ...coibfes, coibfecodigov: codigov });
    await storageUpdate('@LOCALCOIBFE', 'coibfeCodigoV', codigov);
    returno = true;
    return returno;
  };
  // ----------------------------------------------
  // ----------------------------------------------

  const verifyTotal = async () => {
    if (coibfes.coibfetransporte === 'F') {
      maxAnimalTotal = 350;
    } // to fluvial

    let returno = false;

    const toros = parseInt(coibfes.coibfeanitoros || '', 10) || 0;
    const vacas = parseInt(coibfes.coibfeanivacas || '', 10) || 0;
    const vaquillas = parseInt(coibfes.coibfeanivaquillas || '', 10) || 0;
    const otros = parseInt(coibfes.coibfeaniotros || '', 10) || 0;
    const novillos = parseInt(coibfes.coibfeaninovillos || '', 10) || 0;
    const hilton = parseInt(coibfes.coibfeanihilton || '', 10) || 0;

    if (vaquillas > 0 || novillos > 0) {
      setIsHilton(true);
    }

    const total = toros + vacas + vaquillas + otros + novillos;
    setCoibfes({
      ...coibfes,
      coibfeanitotal: String(total),
      coibfeanitoros: String(toros),
      coibfeanivacas: String(vacas),
      coibfeanivaquillas: String(vaquillas),
      coibfeaniotros: String(otros),
      coibfeaninovillos: String(novillos),
      coibfeanihilton: String(hilton),
    });
    await storageUpdate('@LOCALCOIBFE', 'coibfeAniTotal', String(total));
    await storageUpdate('@LOCALCOIBFE', 'coibfeAniToros', String(toros));
    await storageUpdate('@LOCALCOIBFE', 'coibfeAniVacas', String(vacas));
    await storageUpdate(
      '@LOCALCOIBFE',
      'coibfeAniVaquillas',
      String(vaquillas)
    );
    await storageUpdate('@LOCALCOIBFE', 'coibfeAniOtros', String(otros));
    await storageUpdate('@LOCALCOIBFE', 'coibfeAniNovillos', String(novillos));
    await storageUpdate('@LOCALCOIBFE', 'coibfeAniHilton', String(hilton));
    // max of 45 animals
    if (
      total > maxAnimalTotal ||
      total === 0 ||
      (hilton > 0 && novillos + vaquillas === 0) ||
      hilton > novillos + vaquillas
    ) {
      formPosition[positionForm] = true;
      setIsFormErrorS(true);
      returno = false;
    } else {
      formPosition[positionForm] = false;
      setIsFormErrorS(false);
      returno = true;
    }
    // 0 animals
    //hilton error

    return returno;
  };
  // ----------------------------------------------
  // ----------------------------------------------

  const verifyHilton = () => {
    let returno = false;

    const novillos = parseInt(coibfes.coibfeaninovillos || '', 10) || 0;
    const vaquillas = parseInt(coibfes.coibfeanivaquillas || '', 10) || 0;

    const hilton = parseInt(coibfes.coibfeanihilton || '', 10) || 0;
    if (hilton > 0 && novillos === 0 && vaquillas === 0) {
      formPosition[positionForm] = true;
      setIsFormErrorS(true);
      returno = true;
    } else if (hilton > novillos + vaquillas) {
      formPosition[positionForm] = true;
      setIsFormErrorS(true);
      returno = true;
    } else {
      formPosition[positionForm] = false;
      setIsFormErrorS(false);
    }

    return returno;
  };
  // ----------------------------------------------
  const verifyPrecinto = () => {
    let returno = false;

    const coibfeprecinto1 = parseInt(coibfes.coibfeprecinto1 || '', 10) || 0;
    const coibfeprecinto2 = parseInt(coibfes.coibfeprecinto2 || '', 10) || 0;
    const coibfeprecinto3 = parseInt(coibfes.coibfeprecinto3 || '', 10) || 0;

    // not 0 in most then one precinto
    if (
      coibfeprecinto1 === 0 &&
      coibfeprecinto2 === 0 &&
      coibfeprecinto3 === 0
    ) {
      formPosition[positionForm] = true;
      setIsFormErrorS(true);
      returno = true;
    } else {
      formPosition[positionForm] = false;
      setIsFormErrorS(false);
    }
    // 0 animals
    //hilton error
    return returno;
  };
  // ----------------------------------------------

  const verifyForms = () => {
    let returno = false;
    returno = true;
    return returno;
  };
  // ----------------------------------------------

  const verifyAllForms = () => {
    let returno = false;
    returno = true;
    return returno;
  };
  // ----------------------------------------------

  const clearForms = async () => {
    //textInputPropriedadRef.current?.clearForms();
  };
  // ----------------------------------------------
  // ###############################   FORM CONTROL  ################################

  // ###############################   RADIOBUTTON  ##############################

  const [radioButtonsFinalidad, setRadioButtonsFinalidad] = useState<
    RadioButtonProps[]
  >(radioButtonsFinalidadData);

  async function onPressRadioButtonFinalidad(
    radioButtonsFinalidadArray: RadioButtonProps[]
  ) {
    setRadioButtonsFinalidad(radioButtonsFinalidadArray);
    // const result = filterObject(radioButtonsFinalidadArray, 'selected', false);
    let values = null;
    if (
      Array.isArray(radioButtonsFinalidadArray) &&
      radioButtonsFinalidadArray.length
    ) {
      radioButtonsFinalidadArray.forEach((element) => {
        if (element.selected === true) {
          values = element.value;
        }
      });
    }
    //console.log(values);
    setCoibfes({ ...coibfes, coibfefinalidad: String(values) });
    await storageUpdate('@LOCALCOIBFE', 'coibfeFinalidad', String(values));
    Vibration.vibrate();
  }

  const [radioButtonsDestino, setRadioButtonsDestino] = useState<
    RadioButtonProps[]
  >(radioButtonsDestinoData);

  async function onPressRadioButtonDestino(
    radioButtonsDestinoArray: RadioButtonProps[]
  ) {
    setRadioButtonsDestino(radioButtonsDestinoArray);
    let values = null;
    if (
      Array.isArray(radioButtonsDestinoArray) &&
      radioButtonsDestinoArray.length
    ) {
      radioButtonsDestinoArray.forEach((element) => {
        if (element.selected === true) {
          values = element.value;
        }
      });
    }
    setCoibfes({ ...coibfes, coibfedestino: String(values) });
    await storageUpdate('@LOCALCOIBFE', 'coibfeDestino', String(values));
    Vibration.vibrate();
  }

  const [radioButtonsTransporte, setRadioButtonsTransporte] = useState<
    RadioButtonProps[]
  >(radioButtonsTransporteData);

  async function onPressRadioButtonTransporte(
    radioButtonsTransporteArray: RadioButtonProps[]
  ) {
    setRadioButtonsTransporte(radioButtonsTransporteArray);
    let values = null;
    if (
      Array.isArray(radioButtonsTransporteArray) &&
      radioButtonsTransporteArray.length
    ) {
      radioButtonsTransporteArray.forEach((element) => {
        if (element.selected === true) {
          values = element.value;
        }
      });
    }
    setCoibfes({ ...coibfes, coibfetransporte: String(values) });
    await storageUpdate('@LOCALCOIBFE', 'coibfeTransporte', String(values));
    Vibration.vibrate();
  }
  // ###############################   RADIOBUTTON  ########################

  // ###############################   WDB  ################################

  // ----------------------------------------------
  const coibfeToStore = () => {
    COIBFE_DATA = {
      coibfeId: coibfes.coibfeid || '',
      coibfeKey: coibfes.coibfekey || '',
      coibfeToken: coibfes.coibfetoken || '',
      coibfeCodigoV: coibfes.coibfecodigov || '',
      coibfeDestino: coibfes.coibfedestino || '',
      coibfeFinalidad: coibfes.coibfefinalidad || '',
      coibfeTransporte: coibfes.coibfetransporte || '',
      coibfeAniNovillos: coibfes.coibfeaninovillos || '',
      coibfeAniToros: coibfes.coibfeanitoros || '',
      coibfeAniVacas: coibfes.coibfeanivacas || '',
      coibfeAniVaquillas: coibfes.coibfeanivaquillas || '',
      coibfeAniOtros: coibfes.coibfeaniotros || '',
      coibfeAniTotal: coibfes.coibfeanitotal || '',
      coibfeAniHilton: coibfes.coibfeanihilton || '',
      coibfeTecnico_VPA_ID: coibfes.coibfetecnico_vpa_id || '',
      coibfeTecnicoName: coibfes.coibfetecniconame || '',
      coibfeFrigorificoName: coibfes.coibfefrigorificoname || '',
      coibfeFrigorifico_ID: coibfes.coibfefrigorifico_id || '',
      coibfeProductorName: coibfes.coibfeproductorname || '',
      coibfeProductor_ID: coibfes.coibfeproductor_id || '',
      coibfeProductorSitrap: coibfes.coibfeproductorsitrap || '',
      coibfePropriedadName: coibfes.coibfepropriedadname || '',
      coibfePropriedad_ID: coibfes.coibfepropriedad_id || '',
      coibfePropriedadSigor: coibfes.coibfepropriedadsigor || '',
      coibfePropriedadSitrap: coibfes.coibfepropriedadsitrap || '',
      coibfePropriedadDepartamento: coibfes.coibfepropriedaddepartamento || '',
      coibfePropriedadDistrito: coibfes.coibfepropriedaddistrito || '',
      coibfePropriedad_productor_id:
        coibfes.coibfepropriedad_productor_id || '',
      coibfePrecinto1: coibfes.coibfeprecinto1 || '',
      coibfePrecinto2: coibfes.coibfeprecinto2 || '',
      coibfePrecinto3: coibfes.coibfeprecinto3 || '',
      coibfePos_ID: coibfes.coibfepos_id || '',
      coibfePosLatitud: coibfes.coibfeposlatitud || '',
      coibfePosLongitud: coibfes.coibfeposlongitud || '',
      coibfePosDate: coibfes.coibfeposdate || '',
      coibfePosApiKeyMobile: coibfes.coibfeposapikeymobile || '',
      coibfeOBS: coibfes.coibfeobs || '',
      coibfeDocNroProp: coibfes.coibfedocnroprop || '',
      coibfeDocDigProp: coibfes.coibfedocdigprop || '',
      coibfeDocOrigAbrev: coibfes.coibfedocorigabrev || '',
      coibfeDocTipoAbrev: coibfes.coibfedoctipoabrev || '',
      coibfeErroCode: coibfes.coibfeerrocode || '',
      coibfeErroMessage: coibfes.coibfeerromessage || '',
      coibfeAnimales: coibfes.coibfeanimales || '',
      coibfe_isSinc: coibfes.coibfe_issinc || '',
      coibfe_print: '0',
    };
  };
  // ----------------------------------------------
  // ----------------------------------------------
  const storeToCoibfe = () => {
    setCoibfes({
      ...coibfes,
      coibfeid: storage?.coibfeId,
      coibfekey: storage?.coibfeKey,
      coibfetoken: storage?.coibfeToken,
      coibfecodigov: storage?.coibfeCodigoV,
      coibfedestino: storage?.coibfeDestino,
      coibfefinalidad: storage?.coibfeFinalidad,
      coibfetransporte: storage?.coibfeTransporte,
      coibfeaninovillos: storage?.coibfeAniNovillos,
      coibfeanitoros: storage?.coibfeAniToros,
      coibfeanivacas: storage?.coibfeAniVacas,
      coibfeanivaquillas: storage?.coibfeAniVaquillas,
      coibfeaniotros: storage?.coibfeAniOtros,
      coibfeanitotal: storage?.coibfeAniTotal,
      coibfeanihilton: storage?.coibfeAniHilton,
      coibfetecnico_vpa_id: storage?.coibfeTecnico_VPA_ID,
      coibfetecniconame: storage?.coibfeTecnicoName,
      coibfefrigorificoname: storage?.coibfeFrigorificoName,
      coibfefrigorifico_id: storage?.coibfeFrigorifico_ID,
      coibfeproductorname: storage?.coibfeProductorName,
      coibfeproductor_id: storage?.coibfeProductor_ID,
      coibfeproductorsitrap: storage?.coibfeProductorSitrap,
      coibfepropriedadname: storage?.coibfePropriedadName,
      coibfepropriedad_id: storage?.coibfePropriedad_ID,
      coibfepropriedadsigor: storage?.coibfePropriedadSigor,
      coibfepropriedadsitrap: storage?.coibfePropriedadSitrap,
      coibfepropriedaddepartamento: storage?.coibfePropriedadDepartamento,
      coibfepropriedaddistrito: storage?.coibfePropriedadDistrito,
      coibfepropriedad_productor_id: storage?.coibfePropriedad_productor_id,
      coibfeprecinto1: storage?.coibfePrecinto1,
      coibfeprecinto2: storage?.coibfePrecinto2,
      coibfeprecinto3: storage?.coibfePrecinto3,
      coibfepos_id: storage?.coibfePos_ID,
      coibfeposlatitud: storage?.coibfePosLatitud,
      coibfeposlongitud: storage?.coibfePosLongitud,
      coibfeposdate: storage?.coibfePosDate,
      coibfeposapikeymobile: storage?.coibfePosApiKeyMobile,
      coibfeobs: storage?.coibfeOBS,
      coibfedocnroprop: storage?.coibfeDocNroProp,
      coibfedocdigprop: storage?.coibfeDocDigProp,
      coibfedocorigabrev: storage?.coibfeDocOrigAbrev,
      coibfedoctipoabrev: storage?.coibfeDocTipoAbrev,
      coibfeerrocode: storage?.coibfeErroCode,
      coibfeerromessage: storage?.coibfeErroMessage,
      coibfeanimales: storage?.coibfeAnimales,
      coibfe_issinc: storage?.coibfe_isSinc,
    });
    /*
    //recover states
    setFrigorificoss({
      ...frigorificoss,
      frigorificoname: storage?.coibfeFrigorificoName,
    });
    setFrigorificoss({
      ...frigorificoss,
      frigorifico_id: storage?.coibfeFrigorifico_ID,
    });
    setProductorss({
      ...productorss,
      productorname: storage?.coibfeProductorName,
    });
    setProductorss({...productorss, productor_id: storage?.coibfeProductor_ID});
    setProductorss({
      ...productorss,
      productorsitrap: storage?.coibfeProductorSitrap,
    });
    setProductorss({
      ...productorss,
      productordocnroprop: storage?.coibfeDocNroProp,
    });
    setProductorss({
      ...productorss,
      productordocdigprop: storage?.coibfeDocDigProp,
    });
    setProductorss({
      ...productorss,
      productordocorigabrev: storage?.coibfeDocOrigAbrev,
    });
    setProductorss({
      ...productorss,
      productordoctipoabrev: storage?.coibfeDocTipoAbrev,
    });
    setPropriedadss({
      ...propriedadss,
      propriedadname: storage?.coibfePropriedadName,
    });
    setPropriedadss({
      ...propriedadss,
      propriedad_id: storage?.coibfePropriedad_ID,
    });
    setPropriedadss({
      ...propriedadss,
      propriedadsigor: storage?.coibfePropriedadSigor,
    });
    setPropriedadss({
      ...propriedadss,
      propriedadsitrap: storage?.coibfePropriedadSitrap,
    });
    setPropriedadss({
      ...propriedadss,
      propriedaddepartamento: storage?.coibfePropriedadDepartamento,
    });
    setPropriedadss({
      ...propriedadss,
      propriedaddistrito: storage?.coibfePropriedadDistrito,
    });
    */
  };
  // ----------------------------------------------
  // ###############################   GPS  ############################
  //---------------------------GPS STATES ---------
  type locationS = {
    latitude: string;
    longitude: string;
  };

  const [locationS, setLocationS] = useState<locationS[]>([]);
  const [gpsOkS, setGpsOkS] = useState(false);
  //------------------------------------
  // ----------------------------------------------
  // ----------------------------------------------
  const verifyGPS = async () => {
    let returno = false;
    // @ts-ignore
    const latitudis = String(locationS?.latitude);
    // @ts-ignore
    const longitudis = String(locationS?.longitude);
    if (gpsOkS) {
      setCoibfes({
        ...coibfes,
        // @ts-ignore
        coibfeposlatitud: latitudis,
        // @ts-ignore
        coibfeposlongitud: longitudis,
      });

      const resultlat = await storageUpdate(
        '@LOCALCOIBFE',
        'coibfePosLatitud',
        latitudis
      );

      const resultlong = await storageUpdate(
        '@LOCALCOIBFE',
        'coibfePosLongitud',
        longitudis
      );
      returno = true;
    }
    if (Env.DEBUG === 'true') {
      //console.log('LATILONG', latitudis, '  ', longitudis);
    }
    return returno;
  };
  // ----------------------------------------------
  const scanner = async () => {
    await requestCameraPermission();
    await requestWriteStoragePermission();
    await requestReadStoragePermission();
    navigation.navigate('Scanner');
  };
  // ----------------------------------------------
  // ----------------------------------------------
  async function _requestLocation() {
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then((locations) => {
        // @ts-ignore
        setLocationS(locations);
        setGpsOkS(true);
      })
      .catch((ex) => {
        const { code, message } = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          showSimpleMessage(
            'GPS cancelled by user or by another request',
            'GPS',
            'danger',
            {
              hideStatusBar: true,
            }
          );
        }
        if (code === 'UNAVAILABLE') {
          showSimpleMessage(
            'GPS service is disabled or unavailable',
            'GPS',
            'danger',
            {
              hideStatusBar: true,
            }
          );
        }
        if (code === 'TIMEOUT') {
          showSimpleMessage('GPS  request timed out', 'GPS', 'danger', {
            hideStatusBar: true,
          });
        }
        if (code === 'UNAUTHORIZED') {
          showSimpleMessage('GPS Authorization denied', 'GPS', 'danger', {
            hideStatusBar: true,
          });
        }
        // @ts-ignore
        setLocationS(null);
      });
  }
  // ###############################   GPS  ############################
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

  // ###############################   PROTEK  ############################
  // ---------------------------------------FUNCTIONS-PROTEK--------

  const [protekS, setProtekS] = useState([]);
  // --------------------------------------

  async function loadProtek() {
    //const protek = JSON.stringify({posApiKeyMobile, posKeyPrivate});
    /*
    proteK = await protek.getProtek(proteKK.machineKey);
    setProtekS(proteK);
    if (GLOBAL.DEBUG === true) {
      console.log(proteK);
    }
    return proteK;
    */
  } // end function protek

  //-------------------------FACIAL FUNC------------------------
  //-------------------------FACIAL FUNC------------------------
  // ###############################   PROTEK  ############################

  // ###############################   MESSAGE  ############################

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
  // -------------------------------------------

  function onMessage(
    messages: string,
    descriptions: string = '',
    typess: any = 'success'
  ) {
    showMessage({
      message: messages,
      description: descriptions,
      type: typess, // danger // success
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
  // ----------------------------------------------

  function onMessageClick() {
    // console.log('CLICK');
  }
  // ----------------------------------------------

  function showSimpleMessage(
    messagem: string,
    description: string,
    typess: any,
    props = {}
  ) {
    const message = {
      message: messagem,
      description: description,
      type: typess,
      ...props,
    };
    // @ts-ignore
    showMessage(message);
  }
  // ----------------------------------------------

  function messageWithPosition(
    messages: string,
    descriptions: string,
    hasDescription = true,
    extra = {}
  ) {
    let message = {
      message: messages,
      type: 'info',
      ...extra,
    };
    if (hasDescription) {
      // @ts-ignore
      message = { ...message, description: descriptions };
    } else {
      // @ts-ignore
      message = { ...message, floating: true };
    }
    // @ts-ignore
    showMessage(message);
  }
  // ###############################   MESSAGE  ################################
  // ###############################   API  ################################

  //------------------
  async function tokens(data: any) {
    usuarioService
      .cadastrarCoibfeId(data)
      .then(async (response) => {
        //for first register or 2 register have active and unlocked
        // response.data?.user_token
        // response.data?.user_locked
        // response.data?.user_status

        const responses = response?.data;
        if (Env.DEBUG === 'true') {
          // console.log('RESPONSE2', responses);
        }

        if (responses?.Status === 'ACTIVE') {
          // console.log('SYNC_USER');
          return responses;
        }
      })
      .catch((e: any) => {
        // console.log('RESPONSEe1', e);
      });
  }
  //------------------
  // ------------------------------------------------
  // ------------------------------------------------
  async function SyncCoibfe(coibfeV: any) {
    let saves = null;
    let sendCoibfe = false;
    let sendUserCoibfeId = false;
    try {
      const storageReg = await Storage.getDatas('@LOCALREGISTER');
      // send data to server COibfe
      // const sendUserCoibfesid = await updateUserCoibfeIdApi(datas);
      // signalize wdb  ITS SEND OK
      if (
        storageReg?.status === 'active' &&
        storageReg?.locked === 'unlocked'
      ) {
        // console.log('COIBFE_VERIFY4', storageReg);
        // SEND TO SERVER COIBFE
        const sendCoibfes = await createCoibfeCoibfesApi(coibfeV);
        console.log('COIBFE_VERIFY5', sendCoibfes);
        if (sendCoibfes?.coibfe_issinc === 'false') {
          // error -> {"message": "Internal server error", "statusCode": 500}
          console.log('COIBFE_VERIFY6');
          // send data to server coibfeid in vpa

          saves = await crudWDB.syncRegisterWDB(
            'coibfecoibfes',
            'coibfeid',
            coibfeV.coibfeid
          );
        }
      }
    } catch (err) {
      console.warn(err);
      setIsLoadingS(false);
    }
    if (Env.DEBUG === 'true') {
      // console.log('SENDCOIBFES', sendCoibfes);
      // console.log('SENDSERCOIBFESID', sendUserCoibfesid);
      // console.log('SAVES', saves);
    }
  }
  // ------------------------------------------------
  // ------------------------------------------------
  async function SyncToken() {
    setIsLoadingS(true);
    let saves = null;

    try {
      const storageReg = await Storage.getDatas('@LOCALREGISTER');
      // send data to server COibfe
      const vpas = String(storageReg.vpa);
      const coibfeids = String(storageReg.coibfeid);
      const datas = {
        cpf: vpas,
        user_token: coibfeids,
      };
      // only update if token is valid
      if (coibfeids && coibfeids.length && coibfeids !== '0') {
        const userTokens: any = await tokens(datas);
      }

      setIsLoadingS(false);
    } catch (err) {
      console.warn(err);
      setIsLoadingS(false);
    }
    if (Env.DEBUG === 'true') {
      // console.log('SENDCOIBFES', sendCoibfes);
      // console.log('SENDSERCOIBFESID', sendUserCoibfesid);
      // console.log('SAVES', saves);
    }
    setIsLoadingS(false);
  }
  //------------------
  // ------------------------------------------------
  // ###############################   API  ################################

  // ###############################   EFFECT--FUNCTION  ######################

  async function syncking() {
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
    //   coibfeAnimales: '123,456,789',
    //   coibfe_issinc: 'string',
    // };
    // const values = await crudWDB.creaTableWDB<CoibfeCoibfeModel>(
    //   'coibfecoibfes',
    //   register,
    // );
  }

  // ----------------------------------------------
  // ----------------------------------------------
  const getGps = async () => {
    await _requestLocation();
  };
  // ----------------------------------------------
  function pad(n: any, width: any): any {
    let z: any;
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  /*
  pad(10, 4);      // 0010
  pad(9, 4);       // 0009
  pad(123, 4);     // 0123
  pad(10, 4, '-'); // --10
  */
  //-------------------------------------------------
  //-------------------------------------------------
  async function initLogin() {
    const storagesRegister: IStorageRegister = await storageGet(
      '@LOCALREGISTER'
    );

    if (storagesRegister?.status === 'active') {
      setUserStatus(true);
    } else {
      setUserStatus(false);
    }

    if (storagesRegister?.locked === 'locked') {
      setUserLocked(true);
    } else {
      setUserLocked(false);
    }

    let vpa_name: string = String(storagesRegister?.name);
    //console.log('LOCALREGISTER', storagesRegister);
    let vpa_n: number = parseInt(storagesRegister?.vpa ?? '0', 10);
    if (isNaN(vpa_n) || !vpa_n) {
      vpa_n = 0;
      vpa_name = 'NO REGISTRADO';
      await storageUpdate('@LOCALCOIBFE', 'coibfeTecnico_VPA_ID', vpa_n);
      await storageUpdate('@LOCALCOIBFE', 'coibfeTecnicoName', vpa_name);
    }
    let vpa_id: string = String(pad(vpa_n, 3));

    let vpaIds = parseInt(vpa_id, 10);
    const tempcoibfeid: any = String(storagesRegister?.coibfeid);
    // console.log('COIBFEID ', storagesRegister, '=>', tempcoibfeid);
    let coibfeIds = parseInt(tempcoibfeid, 10);

    const ids: any = await protek.getProtek(Env.KEY);
    const pos_id: string = String(ids.posId);
    if (isNaN(coibfeIds)) {
      coibfeIds = 0;
    }

    // don't have printer to print
    if (PRINTER_COUNTER === 0) {
      coibfeIds += 1;
    }

    // console.log('PRIN ', PRINTER_COUNTER);

    var tokensIntZ = pad(coibfeIds, 4); // four zero digits
    var tokensIntB = pad(vpaIds, 3); // four zero digits

    // COIBFE VPA_ID + TOKEN(number of envios)
    const coibfevalue =
      String(PY_DIGIT) + String(tokensIntB) + String(tokensIntZ);
    const datetimes = String(
      moment(new Date(), 'DD/MM/YYYY:HHmmss', true).format()
    );

    if (Env.DEBUG === 'true') {
      console.log('DATA', coibfevalue);
    }
    setCoibfes({
      ...coibfes,
      coibfepos_id: pos_id,
      coibfetecniconame: vpa_name,
      coibfetecnico_vpa_id: vpa_id,
      coibfeid: coibfevalue,
      coibfeposdate: datetimes,
    });

    await storageUpdate('@LOCALCOIBFE', 'coibfePos_ID', pos_id);
    // await storageUpdate('@LOCALCOIBFE', 'coibfeTecnicoName', vpa_name);
    // await storageUpdate('@LOCALCOIBFE', 'coibfeTecnico_VPA_ID', vpa_id);
    // await storageUpdate('@LOCALCOIBFE', 'coibfeId', coibfevalue);
    await storageUpdate('@LOCALCOIBFE', 'coibfePosDate', datetimes);
  }

  // --------------------------------------------------------------------------
  // ######################## STORAGE #########################################
  // --------------------------------------------------------------------------

  const storageUpdatePrinter = async (key: string, values: number) => {
    const valor = String(values);
    const returno = await Storage.updatePrinter(key, valor);
    if (Env.DEBUG === 'true') {
      console.log(returno);
    }
  };
  //--------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  const storageUpdate = async (key: string, objKey: string, values: any) => {
    const returno = await Storage.updateDatas(key, objKey, values);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  //--------------------------------------------------------------------------
  const storageSave = async (key: string, value: any) => {
    const returno = await Storage.setDatas(key, value);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  //--------------------------------------------------------------------------

  const storageClear = async (key: string) => {
    const returno = await Storage.removeDatas(key);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  // --------------------------------------------------------------------------
  const storageGet = async (key: string) => {
    const storagess = await Storage.getDatas(key);
    //console.log(storages.coibfe_print);
    if (Env.DEBUG === 'true') {
      // console.log(storagess);
    }
    return storagess;
  };
  //---------------------------------------------------------------------------
  // ######################## STORAGE #########################################
  // ----------------------------------------------
  const login = async () => {
    /*
  const vpa_id: string = '9999';
  const coibfeIds: string = '0001';
  const vpa_name: string = 'Marcelo Anjos';
  const pos_id: string = '123abc';

  var coibfeids = parseInt(coibfeIds, 10) || 0;
  coibfeids = coibfeids + 1;
  var tokensIntZ = pad(coibfeids, 4); // four zero digits
  // COIBFE VPA_ID + TOKEN(number of envios)
  const value = String(PY_DIGIT) + String(vpa_id) + String(tokensIntZ);
  const datetimes = await String(
    moment(new Date(), 'DD/MM/YYYY', true).format(),
  );

  setCoibfes({
    ...coibfes,
    coibfepos_id: String(pos_id),
    coibfetecniconame: vpa_name,
    coibfetecnico_vpa_id: vpa_id,
    coibfeid: value,
    coibfeposdate: datetimes,
  });
  */
    // if (!isPrintingS) {
    await getGps();
    // }
  };
  //--------------------------------------------------------------------------
  // ######################## INIT #########################################

  const init = useCallback(async () => {
    if (!onlyOne) {
      showSimpleMessage('Espera', 'SENAIA', 'danger', {
        hideStatusBar: true,
      });

      onlyOne = true;
      onlyPrinter = false;

      storage = await storageGet('@LOCALCOIBFE');
      if (Functions.isObject(storage)) {
        const value = storage?.coibfe_print || '0';
        // console.log('HAVE  PRINTER', value);

        PRINTER_COUNTER = parseInt(value, 10);
        setPrinterCounter(String(PRINTER_COUNTER));
        if (isNaN(PRINTER_COUNTER)) {
          PRINTER_COUNTER = 0;
          setPrinterCounter(String(PRINTER_COUNTER));
        }

        if (Env.DEBUG === 'true') {
          // console.log('HAVE  PRINTER', PRINTER_COUNTER);
          // console.log('HAVE REGISTER', storage);
        }
        if (PRINTER_COUNTER > 0) {
          // HAVE DATA TO PRINT.. TAKE NEW GPS
          await getGps();
          verifyGPS();
          await storeToCoibfe(); // recover
          setIsPrintingS(true);
          bottomSheetRef.current?.collapse();
          setButtonSheetExpand(false);
        } else {
          await storageSave('@LOCALCOIBFE', COIBFE_DATA); //init storage
        }
      }
      login(); // return vpa
      syncking();
      showSimpleMessage('Sea Bien Venido', 'SENAIA', 'success', {
        hideStatusBar: true,
      });
      setTimeout(() => {
        if (PRINTER_COUNTER === 0) {
          bottomSheetRef.current?.expand();
          setButtonSheetExpand(true);
        }
        //console.log('aki');
      }, 5000);

      // console.log('POSION', formPosition);
    } else if (onlyPrinter) {
      if (Env.DEBUG === 'true') {
        console.log('ya printed');
      }
      // if HAVE PRINTED
      // --- read print values = 0 update
      const printerValue = await Storage.getOneDatas(
        '@LOCALCOIBFE',
        'coibfe_print'
      );
      if (Functions.isObject(storage)) {
        PRINTER_COUNTER = parseInt(printerValue, 10) || 0;
        setPrinterCounter(String(PRINTER_COUNTER));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ----------------------------------------------
  // ######################## EFFECT #########################################

  const effects = useCallback(() => {
    // HELLO MESSAGE
    // FORMS CONTROL
    if (buttonSheetExpand) {
      bottomSheetRef.current?.expand();
    }

    if (positionForm === 0 && propriedadss.propriedadname !== '') {
      setSearch(propriedadss.propriedadname || '');
    }
    if (positionForm === 1 && productorss.productorname !== '') {
      setSearch(productorss.productorname || '');
    }
    if (positionForm === 2 && frigorificoss.frigorificoname !== '') {
      setSearch(frigorificoss.frigorificoname || '');
    }

    if (positionForm >= maxFormNumber) {
      bottomSheetRef.current?.collapse();
      setIsPrintingS(true);
    }
    init();
  }, [
    buttonSheetExpand,
    positionForm,
    propriedadss.propriedadname,
    productorss.productorname,
    frigorificoss.frigorificoname,
    init,
  ]);

  useEffect(() => {
    effects();
  }, [effects]);

  // ###############################   -EFFECT--FUNCTION  ################################

  // ----------------------------------------------

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <Loader visible={isLoadingS} />
        {/* @ts-ignore */}
        {!printPdf ? (
          <>
            <FormFinal
              //@ts-ignore
              coibfes={coibfes}
              userLocked={userLocked}
              userStatus={userStatus}
              buttonSheetExpand={buttonSheetExpand}
              setButtonSheetExpand={setButtonSheetExpand}
            />
          </>
        ) : (
          <>
            <FormFinalPdf
              //@ts-ignore
              coibfes={coibfes}
              userLocked={userLocked}
              userStatus={userStatus}
              buttonSheetExpand={buttonSheetExpand}
              setButtonSheetExpand={setButtonSheetExpand}
            />
          </>
        )}
        {/* ------- */}
        {isPrintingS && !printPdf ? (
          <>
            <TitleBlack size={12}>PRINT={printerCounter}</TitleBlack>
            <ViewRowS>
              <PrintButton
                onPress={() => {
                  showConfirmDialog();
                }}
              >
                <TitleWhite size={12}>
                  {translate('coibfe.coibfe_print')}
                </TitleWhite>
              </PrintButton>
              {/**-------------- */}

              <SendButton
                onPress={() => {
                  setPrintPdf(true);
                }}
              >
                <TitleWhite size={12}>
                  {translate('coibfe.coibfe_send')}
                </TitleWhite>
              </SendButton>
              {/**-------------- */}
              <PrintCancelButton
                onPress={() => {
                  printCancel();
                }}
              >
                <TitleWhite size={12}>
                  {translate('coibfe.coibfe_printclear')}
                </TitleWhite>
              </PrintCancelButton>
            </ViewRowS>
          </>
        ) : null}
        {/**
          <ViewCenter>
            <DetailButton>
              <Text>{translate('coibfe.submit')}</Text>
            </DetailButton>
          </ViewCenter>
        */}
        <BottomSheet
          style={{ flexGrow: 1, justifyContent: 'center' }}
          ref={bottomSheetRef}
          index={0}
          snapPoints={['8%', '65%']}
        >
          <BottomSheetView>
            <FormView>
              {/* switch */}
              {(() => {
                switch (positionForm) {
                  case 0:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={handleIncForm}
                          />
                        </ViewRowS>
                        <TextInput
                          ref={textInputPropriedadRef}
                          placeholder={translate('coibfe.buscaprop')}
                          value={search || ''}
                          style={styles.search}
                          onChangeText={(text) => {
                            setSearch(text);
                          }}
                        />
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                        <PropriedadList
                          search={search}
                          propriedads={[]}
                          propriedadss={propriedadss}
                          setPropriedadss={setPropriedadss}
                        />
                      </>
                    );
                  case 1:
                    return (
                      <>
                        <ScrollView>
                          <ViewRowS>
                            <ButtonBack
                              title={translate('coibfe.anterior')}
                              onPress={handleDecForm}
                            />
                            <ButtonNext
                              title={translate('coibfe.proxima')}
                              onPress={handleIncForm}
                            />
                          </ViewRowS>
                          <TextInput
                            ref={textInputProductorRef}
                            placeholder={translate('coibfe.buscaprod')}
                            value={search || ''}
                            style={styles.search}
                            onChangeText={(text) => {
                              setSearch(text);
                            }}
                          />
                          {isFormErrorS ? (
                            <FormError>
                              {translate('coibfe.formerror')}
                            </FormError>
                          ) : null}
                          <ProductorPropiedadList
                            filters={filterss || ''}
                            search={search}
                            productors={[]}
                            productorss={productorss}
                            setProductorss={setProductorss}
                          />
                        </ScrollView>
                      </>
                    );
                  case 2:
                    return (
                      <>
                        <ScrollView>
                          <ViewRowS>
                            <ButtonBack
                              title={translate('coibfe.anterior')}
                              onPress={handleDecForm}
                            />
                            <ButtonNext
                              title={translate('coibfe.proxima')}
                              onPress={handleIncForm}
                            />
                          </ViewRowS>
                          <TextInput
                            ref={textInputFrigorificoRef}
                            placeholder={translate('coibfe.buscafrigo')}
                            value={search || ''}
                            style={styles.search}
                            onChangeText={(text) => {
                              setSearch(text);
                            }}
                          />
                          {isFormErrorS ? (
                            <FormError>
                              {translate('coibfe.formerror')}
                            </FormError>
                          ) : null}

                          <FrigorificoList
                            search={search}
                            frigorificos={[]}
                            frigorificoss={frigorificoss}
                            setFrigorificoss={setFrigorificoss}
                          />
                        </ScrollView>
                      </>
                    );
                  case 3:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={handleIncForm}
                          />
                        </ViewRowS>
                        <ViewPanel>
                          <RadioGroup
                            radioButtons={radioButtonsFinalidad}
                            onPress={onPressRadioButtonFinalidad}
                            layout="row"
                          />
                        </ViewPanel>
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                      </>
                    );
                  case 4:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={handleIncForm}
                          />
                        </ViewRowS>
                        <ViewPanel>
                          <RadioGroup
                            radioButtons={radioButtonsDestino}
                            onPress={onPressRadioButtonDestino}
                            layout="row"
                          />
                        </ViewPanel>

                        <ViewPanel2>
                          <ViewRowSS>
                            <Pads />
                            <TitleGray size={16}>Chile</TitleGray>
                          </ViewRowSS>
                        </ViewPanel2>

                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                      </>
                    );
                  case 5:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={handleIncForm}
                          />
                        </ViewRowS>
                        <ViewPanel>
                          <RadioGroup
                            radioButtons={radioButtonsTransporte}
                            onPress={onPressRadioButtonTransporte}
                            layout="row"
                          />
                        </ViewPanel>
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                      </>
                    );
                  case 6:
                    return (
                      <>
                        <View>
                          <ViewRowSS>
                            <ButtonBack
                              title={translate('coibfe.anterior')}
                              onPress={handleDecForm}
                            />
                            <ButtonNext
                              title={translate('coibfe.proxima')}
                              onPress={handleIncForm}
                            />
                          </ViewRowSS>
                          <ViewContainer>
                            <ViewRowSS>
                              <TitleBlack size={12}>
                                {translate('coibfe.toros')}
                                {'      '}
                              </TitleBlack>
                              <InputAnimal
                                // autoFocus
                                autoCorrect={false}
                                placeholderTextColor={'gray'}
                                onChangeText={async (text: any) => {
                                  setCoibfes({
                                    ...coibfes,
                                    coibfeanitoros: text,
                                  });
                                  await storageUpdate(
                                    '@LOCALCOIBFE',
                                    'coibfeAniToros',
                                    text
                                  );
                                }}
                                placeholder={'0'}
                                value={coibfes.coibfeanitoros || ''}
                                keyboardType="numeric"
                              />
                            </ViewRowSS>
                            <ViewRowSS>
                              <TitleBlack size={12}>
                                {translate('coibfe.otross')}
                              </TitleBlack>
                              <InputAnimal
                                // autoFocus
                                autoCorrect={false}
                                placeholderTextColor={'gray'}
                                onChangeText={async (text: any) => {
                                  setCoibfes({
                                    ...coibfes,
                                    coibfeaniotros: text,
                                  });
                                  await storageUpdate(
                                    '@LOCALCOIBFE',
                                    'coibfeAniOtros',
                                    text
                                  );
                                }}
                                placeholder={'0'}
                                value={coibfes.coibfeaniotros || ''}
                                keyboardType="numeric"
                              />
                            </ViewRowSS>
                          </ViewContainer>
                          <ViewContainer>
                            <ViewRowSS>
                              <TitleBlack size={12}>
                                {translate('coibfe.vacas')}
                                {'      '}
                              </TitleBlack>
                              <InputAnimal
                                // autoFocus
                                autoCorrect={false}
                                placeholderTextColor={'gray'}
                                onChangeText={async (text: any) => {
                                  setCoibfes({
                                    ...coibfes,
                                    coibfeanivacas: text,
                                  });
                                  await storageUpdate(
                                    '@LOCALCOIBFE',
                                    'coibfeAniVacas',
                                    text
                                  );
                                }}
                                placeholder={'0'}
                                value={coibfes.coibfeanivacas || ''}
                                keyboardType="numeric"
                              />
                            </ViewRowSS>
                            <ViewRowSS>
                              <TitleBlack size={12}>
                                {translate('coibfe.vaquillas')}
                              </TitleBlack>
                              <InputAnimal
                                // autoFocus
                                autoCorrect={false}
                                placeholderTextColor={'gray'}
                                onChangeText={async (text: any) => {
                                  setCoibfes({
                                    ...coibfes,
                                    coibfeanivaquillas: text,
                                  });
                                  await storageUpdate(
                                    '@LOCALCOIBFE',
                                    'coibfeAniVaquillas',
                                    text
                                  );
                                }}
                                placeholder={'0'}
                                value={coibfes.coibfeanivaquillas || ''}
                                keyboardType="numeric"
                              />
                            </ViewRowSS>
                          </ViewContainer>
                          <ViewContainer>
                            <ViewRowSS>
                              <TitleBlack size={12}>
                                {translate('coibfe.novillos')}
                              </TitleBlack>
                              <InputAnimal
                                // autoFocus
                                autoCorrect={false}
                                placeholderTextColor={'gray'}
                                onChangeText={async (text: any) => {
                                  setCoibfes({
                                    ...coibfes,
                                    coibfeaninovillos: text,
                                  });
                                  await storageUpdate(
                                    '@LOCALCOIBFE',
                                    'coibfeAniNovillos',
                                    text
                                  );
                                }}
                                placeholder={'0'}
                                value={coibfes.coibfeaninovillos || ''}
                                keyboardType="numeric"
                              />
                            </ViewRowSS>
                          </ViewContainer>
                        </View>
                        <ViewCenter>
                          <TitleBlack size={15}>
                            {translate('coibfe.totalani')}
                            {coibfes.coibfeanitotal || '0'}
                          </TitleBlack>
                        </ViewCenter>
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}

                        <ViewSpace />
                      </>
                    );
                  case 7:
                    return (
                      <>
                        <View>
                          <ViewRowSS>
                            <ButtonBack
                              title={translate('coibfe.anterior')}
                              onPress={handleDecForm}
                            />
                            <ButtonNext
                              title={translate('coibfe.proxima')}
                              onPress={handleIncForm}
                            />
                          </ViewRowSS>
                          {!isHilton ? (
                            <>
                              <ViewContainer>
                                <ViewRowSS>
                                  <TitleBlack size={12}>
                                    {translate('coibfe.toros')}
                                    {'      '}
                                  </TitleBlack>
                                  <InputAnimal
                                    // autoFocus
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    onChangeText={async (text: any) => {
                                      setCoibfes({
                                        ...coibfes,
                                        coibfeanitoros: text,
                                      });
                                      await storageUpdate(
                                        '@LOCALCOIBFE',
                                        'coibfeAniToros',
                                        text
                                      );
                                    }}
                                    placeholder={'0'}
                                    value={coibfes.coibfeanitoros || ''}
                                    keyboardType="numeric"
                                  />
                                </ViewRowSS>
                                <ViewRowSS>
                                  <TitleBlack size={12}>
                                    {translate('coibfe.otross')}
                                  </TitleBlack>
                                  <InputAnimal
                                    // autoFocus
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    onChangeText={async (text: any) => {
                                      setCoibfes({
                                        ...coibfes,
                                        coibfeaniotros: text,
                                      });
                                      await storageUpdate(
                                        '@LOCALCOIBFE',
                                        'coibfeAniOtros',
                                        text
                                      );
                                    }}
                                    placeholder={'0'}
                                    value={coibfes.coibfeaniotros || ''}
                                    keyboardType="numeric"
                                  />
                                </ViewRowSS>
                              </ViewContainer>
                              <ViewContainer>
                                <ViewRowSS>
                                  <TitleBlack size={12}>
                                    {translate('coibfe.vacas')}
                                    {'      '}
                                  </TitleBlack>
                                  <InputAnimal
                                    // autoFocus
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    onChangeText={async (text: any) => {
                                      setCoibfes({
                                        ...coibfes,
                                        coibfeanivacas: text,
                                      });
                                      await storageUpdate(
                                        '@LOCALCOIBFE',
                                        'coibfeAniVacas',
                                        text
                                      );
                                    }}
                                    placeholder={'0'}
                                    value={coibfes.coibfeanivacas || ''}
                                    keyboardType="numeric"
                                  />
                                </ViewRowSS>
                                <ViewRowSS>
                                  <TitleBlack size={12}>
                                    {translate('coibfe.vaquillas')}
                                  </TitleBlack>
                                  <InputAnimal
                                    // autoFocus
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    onChangeText={async (text: any) => {
                                      setCoibfes({
                                        ...coibfes,
                                        coibfeanivaquillas: text,
                                      });
                                      await storageUpdate(
                                        '@LOCALCOIBFE',
                                        'coibfeAniVaquillas',
                                        text
                                      );
                                    }}
                                    placeholder={'0'}
                                    value={coibfes.coibfeanivaquillas || ''}
                                    keyboardType="numeric"
                                  />
                                </ViewRowSS>
                              </ViewContainer>
                              <ViewContainer>
                                <ViewRowSS>
                                  <TitleBlack size={12}>
                                    {translate('coibfe.novillos')}
                                  </TitleBlack>
                                  <InputAnimal
                                    // autoFocus
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    onChangeText={async (text: any) => {
                                      setCoibfes({
                                        ...coibfes,
                                        coibfeaninovillos: text,
                                      });
                                      await storageUpdate(
                                        '@LOCALCOIBFE',
                                        'coibfeAniNovillos',
                                        text
                                      );
                                    }}
                                    placeholder={'0'}
                                    value={coibfes.coibfeaninovillos || ''}
                                    keyboardType="numeric"
                                  />
                                </ViewRowSS>
                              </ViewContainer>
                            </>
                          ) : null}
                          {isHilton ? (
                            <>
                              <ViewContainer>
                                <ViewRowSS>
                                  <TitleBlack size={12}>
                                    {translate('coibfe.hilton')}
                                  </TitleBlack>
                                  <InputAnimal
                                    // autoFocus
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    onChangeText={async (text: any) => {
                                      const hiltons =
                                        parseInt(text || '', 10) || 0;
                                      setCoibfes({
                                        ...coibfes,
                                        coibfeanihilton: String(hiltons),
                                      });
                                      await storageUpdate(
                                        '@LOCALCOIBFE',
                                        'coibfeAniHilton',
                                        text
                                      );
                                    }}
                                    placeholder={'0'}
                                    value={coibfes.coibfeanihilton || ''}
                                    keyboardType="numeric"
                                  />
                                </ViewRowSS>
                              </ViewContainer>
                            </>
                          ) : null}
                        </View>
                        <ViewCenter>
                          <TitleBlack size={15}>
                            {translate('coibfe.totalani')}
                            {coibfes.coibfeanitotal || '0'}
                          </TitleBlack>
                        </ViewCenter>
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                        <ViewSpace />
                      </>
                    );

                  case 8:
                    return (
                      <>
                        <ViewRowSS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={handleIncForm}
                          />
                        </ViewRowSS>
                        <ViewRowSS>
                          <TitleBlack size={15}>
                            {translate('coibfe.precinto1')}
                          </TitleBlack>
                          <InputAnimal
                            // autoFocus
                            autoCorrect={false}
                            placeholderTextColor={'gray'}
                            onChangeText={async (text: any) => {
                              setCoibfes({ ...coibfes, coibfeprecinto1: text });
                              await storageUpdate(
                                '@LOCALCOIBFE',
                                'coibfePrecinto1',
                                text
                              );
                            }}
                            placeholder={''}
                            value={coibfes.coibfeprecinto1 || ''}
                            keyboardType="numeric"
                          />
                        </ViewRowSS>
                        <ViewRowSS>
                          <TitleBlack size={15}>
                            {translate('coibfe.precinto2')}
                          </TitleBlack>
                          <InputAnimal
                            // autoFocus
                            autoCorrect={false}
                            placeholderTextColor={'gray'}
                            onChangeText={async (text: any) => {
                              setCoibfes({ ...coibfes, coibfeprecinto2: text });
                              await storageUpdate(
                                '@LOCALCOIBFE',
                                'coibfePrecinto2',
                                text
                              );
                            }}
                            placeholder={''}
                            value={coibfes.coibfeprecinto2 || ''}
                            keyboardType="numeric"
                          />
                        </ViewRowSS>
                        <ViewRowSS>
                          <TitleBlack size={15}>
                            {translate('coibfe.precinto3')}
                          </TitleBlack>
                          <InputAnimal
                            // autoFocus
                            autoCorrect={false}
                            placeholderTextColor={'gray'}
                            onChangeText={async (text: any) => {
                              setCoibfes({ ...coibfes, coibfeprecinto3: text });
                              await storageUpdate(
                                '@LOCALCOIBFE',
                                'coibfePrecinto3',
                                text
                              );
                            }}
                            placeholder={''}
                            value={coibfes.coibfeprecinto3 || ''}
                            keyboardType="numeric"
                          />
                        </ViewRowSS>
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                      </>
                    );
                  case 9:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={handleIncForm}
                          />
                        </ViewRowS>
                        <TextInput
                          ref={textInputFrigorificoRef}
                          placeholder={translate('coibfe.observa')}
                          value={coibfes.coibfeobs || ''}
                          style={styles.search}
                          onChangeText={async (text) => {
                            setCoibfes({ ...coibfes, coibfeobs: text });
                            await storageUpdate(
                              '@LOCALCOIBFE',
                              'coibfeOBS',
                              text
                            );
                          }}
                        />
                      </>
                    );
                  case 10:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                        </ViewRowS>
                        <TextInput
                          ref={textInputFrigorificoRef}
                          placeholder={translate('coibfe.caravanasani')}
                          value={coibfes.coibfeanimales || ''}
                          style={styles.search}
                          onChangeText={async (text) => {
                            setCoibfes({ ...coibfes, coibfeanimales: text });
                            await storageUpdate(
                              '@LOCALCOIBFE',
                              'coibfeAnimales',
                              text
                            );
                          }}
                        />
                        <ButtonNext
                          title={'Scanner'}
                          onPress={() => {
                            scanner();
                          }}
                        />
                      </>
                    );
                  case 11:
                    return (
                      <>
                        {/*
                      <FormTitle>texto</FormTitle>
                      <Input
                        placeholder="New skill..."
                        onChangeText={setName}
                        value={name || ''}
                      />
                      <Button title="Save" onPress={handleSave} />
                      */}
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                          <ButtonNext
                            title={translate('coibfe.proxima')}
                            onPress={handleIncForm}
                          />
                        </ViewRowS>
                      </>
                    );
                  default:
                    return (
                      <ViewRowS>
                        <ButtonBack
                          title={translate('coibfe.anterior')}
                          onPress={handleDecForm}
                        />
                        <ButtonNext
                          title={translate('coibfe.proxima')}
                          onPress={handleIncForm}
                        />
                      </ViewRowS>
                    );
                }
              })()}
              {/* switch */}
            </FormView>
          </BottomSheetView>

          <ViewSpace />
        </BottomSheet>
        <FlashMessage />
      </KeyboardAvoidingView>
    </>
  );
};

export default memo(CoibfeScreen);
