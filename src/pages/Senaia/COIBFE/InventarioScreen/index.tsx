/* eslint-disable max-lines-per-function */
/* eslint-disable max-params */
/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Linking,
  PermissionsAndroid,
  Platform,
  TextInput,
  Vibration,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import GetLocation from 'react-native-get-location';
import Orientation from 'react-native-orientation-locker';
import RNRestart from 'react-native-restart';
import * as yup from 'yup';

import { ButtonBack } from '@/components/ButtonBack';
import { ButtonNext } from '@/components/ButtonNext';
import Loader from '@/components/loader';
import type { RadioButtonProps } from '@/components/RadioButtonsGroup';
import { useAuth, useRegis } from '@/core';
//import {useNetInfo} from '@react-native-community/netinfo'; // import the hook
import { translate } from '@/core';
import CoibfeList from '@/pages/Senaia/COIBFE/Components/CoibfeList';
import { createCoibfeCoibfesApi } from '@/services/coibfeSync/apis';
import Storage from '@/services/crudStorage';
// ###############################   WDB  ################################
import crudWDB from '@/services/crudWDB';
import usuarioService from '@/services/usuario/UsuarioService';
import Functions from '@/utils/Functions';
import protek from '@/utils/Protek';

//import ProductorList from '../Components/ProductorList';
import FormFinal from './formFinal';
import FormFinalPdf from './formFinalPdf';
import {
  FormError,
  FormView,
  PrintButton,
  PrintCancelButton,
  styles,
  TitleBlack,
  TitleWhite,
  ViewRowS,
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
    label: 'Terrestre',
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

const InventarioScreen: React.FC = () => {
  Orientation.lockToPortrait();
  const { status } = useAuth();
  const { statusr } = useRegis();

  const PY_DIGIT = 4;
  const maxFormNumber = 1;
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

  const [coibfess, setCoibfess] = useState<Partial<ICoibfes>>({
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
  const textInputCoibfeRef = useRef<TextInput>(null);

  // ###############################   HOOKS  ################################

  // ###############################   FUNCTIONS  ################################

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
    navigation.navigate('Home' /*, { film }*/);
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

    setIsLoadingS(false);
    onlyPrinter = true; // one printed
    navigation.navigate('PrinterInventario');
  };
  // ----------------------------------------------
  const inventoryFinal = async () => {
    // TEST IF REGISTERED

    // SAVE DB COIBFE
    // --- read print values = 0 update

    // console.log('COIBFE_VERIFY2', printerValue);

    // ############################UPDATE USER_TOKEN LOCAL if printer = 0
    const storagesRegister: IStorageRegister = await storageGet(
      '@LOCAL_INVENTORY'
    );
  };
  // ----------------------------------------------
  const printCancel = async () => {
    setIsLoadingS(true);
    setPositionForm(0); // reset forms
    setIsPrintingS(false); // hide buttons
    // Cancel DB COIBFE
    await storageSave('@LOCALCOIBFE_INVENTORY', COIBFE_DATA_NULL); //init storage
    storage = await storageGet('@LOCALCOIBFE_INVENTORY');
    storeToCoibfe(); // recover
    //const value = await crudWDB.findAllWDB('coibfecoibfes');
    //console.log(value);

    const result = await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfe_print',
      '0'
    );
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
      if (coibfess.coibfeid !== '') {
        setFilterss(propriedadss.propriedadproductors || '');
        setSearch('');
        setIsFormErrorS(false);
        initLogin();
        incForm();
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfePropriedadName',
          coibfess.coibfepropriedadname
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfePropriedad_ID',
          coibfess.coibfepropriedad_id
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfePropriedadSigor',
          coibfess.coibfepropriedadsigor
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfePropriedadSitrap',
          coibfess.coibfepropriedadsitrap
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfePropriedadDepartamento',
          coibfess.coibfepropriedaddepartamento
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfePropriedadDistrito',
          coibfess.coibfepropriedaddistrito
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeDocNroProp',
          coibfess.coibfedocnroprop
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeDocDigProp',
          coibfess.coibfedocdigprop
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeDocOrigAbrev',
          coibfess.coibfedocorigabrev
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeDocTipoAbrev',
          coibfess.coibfedoctipoabrev
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeProductorName',
          coibfess.coibfeproductorname
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeProductor_ID',
          coibfess.coibfeproductor_id
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeProductorSitrap',
          coibfess.coibfeproductorsitrap
        );

        setSearch('');
        setIsFormErrorS(false);
        setCoibfes({
          ...coibfes,
          coibfefrigorificoname: coibfess.coibfefrigorificoname,
          coibfefrigorifico_id: coibfess.coibfefrigorifico_id,
          coibfeproductorname: coibfess.coibfeproductorname,
          coibfeproductor_id: coibfess.coibfeproductor_id,
          coibfeproductorsitrap: coibfess.coibfeproductorsitrap,
          coibfepropriedadname: coibfess.coibfepropriedadname,
          coibfepropriedad_id: coibfess.coibfepropriedad_id,
          coibfepropriedadsigor: coibfess.coibfepropriedadsigor,
          coibfepropriedadsitrap: coibfess.coibfepropriedadsitrap,
          coibfepropriedaddepartamento: coibfess.coibfepropriedaddepartamento,
          coibfepropriedaddistrito: coibfess.coibfepropriedaddistrito,
          coibfedocnroprop: coibfess.coibfedocnroprop,
          coibfedocdigprop: coibfess.coibfedocdigprop,
          coibfedocorigabrev: coibfess.coibfedocorigabrev,
          coibfedoctipoabrev: coibfess.coibfedoctipoabrev,
        });
        incForm();
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeFrigorificoName',
          coibfess.coibfefrigorificoname
        );
        await storageUpdate(
          '@LOCALCOIBFE_INVENTORY',
          'coibfeFrigorifico_ID',
          coibfess.coibfefrigorifico_id
        );
        //setIsLoadingS(false);
      } else if (positionForm > 1) {
        bottomSheetRef.current?.collapse();
        incForm();

        coibfeToStore(); // change data to store
        storageSave('@LOCALCOIBFE_INVENTORY', COIBFE_DATA);
      }
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
          setCoibfess({
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
          });
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
    await storageUpdate('@LOCALCOIBFE_INVENTORY', 'coibfeCodigoV', codigov);
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
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeAniTotal',
      String(total)
    );
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeAniToros',
      String(toros)
    );
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeAniVacas',
      String(vacas)
    );
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeAniVaquillas',
      String(vaquillas)
    );
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeAniOtros',
      String(otros)
    );
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeAniNovillos',
      String(novillos)
    );
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeAniHilton',
      String(hilton)
    );
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
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeFinalidad',
      String(values)
    );
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
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeDestino',
      String(values)
    );
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
    await storageUpdate(
      '@LOCALCOIBFE_INVENTORY',
      'coibfeTransporte',
      String(values)
    );
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
        '@LOCALCOIBFE_INVENTORY',
        'coibfePosLatitud',
        latitudis
      );

      const resultlong = await storageUpdate(
        '@LOCALCOIBFE_INVENTORY',
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
      const storageReg = await Storage.getDatas('@LOCAL_INVENTORY');
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
      const storageReg = await Storage.getDatas('@LOCAL_INVENTORY');
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
      '@LOCAL_INVENTORY'
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

    const ids: any = await protek.getProtek(Env.KEY);
    const pos_id: string = String(ids.posId);
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

      storage = await storageGet('@LOCALCOIBFE_INVENTORY');
      if (Functions.isObject(storage)) {
        const value = storage?.coibfe_print || '0';
        // console.log('HAVE  PRINTER', value);

        await storageSave('@LOCALCOIBFE_INVENTORY', COIBFE_DATA); //init storage
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
    }
  }, []);
  // ----------------------------------------------
  // ######################## EFFECT #########################################

  const effects = useCallback(() => {
    // HELLO MESSAGE
    // FORMS CONTROL
    if (buttonSheetExpand) {
      bottomSheetRef.current?.expand();
    }

    if (positionForm === 0 && coibfess.coibfeid !== '') {
      setSearch(coibfess.coibfeid || '');
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
    coibfess.coibfeid,
    init,
  ]);

  useEffect(() => {
    effects();
  }, [effects]);

  // ###############################   -EFFECT--FUNCTION  ################################

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        {/* @ts-ignore */}
        {!printPdf ? (
          <>
            <Loader visible={isLoadingS} />
            <FormFinal
              //@ts-ignore
              coibfes={coibfess}
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
                  printFinal();
                }}
              >
                <TitleWhite size={12}>
                  {translate('coibfe.coibfe_print')}
                </TitleWhite>
              </PrintButton>
              {/**-------------- */}

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
                          placeholder={translate('inventario.Search')}
                          value={search || ''}
                          style={styles.search}
                          onChangeText={(text) => {
                            setSearch(text);
                          }}
                        />
                        {isFormErrorS ? (
                          <FormError>{translate('coibfe.formerror')}</FormError>
                        ) : null}
                        <CoibfeList
                          search={search}
                          coibfes={[]}
                          coibfess={coibfess}
                          setCoibfess={setCoibfess}
                        />
                      </>
                    );
                  case 1:
                    return (
                      <>
                        <ViewRowS>
                          <ButtonBack
                            title={translate('coibfe.anterior')}
                            onPress={handleDecForm}
                          />
                        </ViewRowS>
                      </>
                    );
                  case 2:
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

export default memo(InventarioScreen);
