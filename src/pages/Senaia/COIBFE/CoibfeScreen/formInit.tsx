/* eslint-disable unicorn/filename-case */

/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck

//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//###########################################

import { useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  BackHandler,
  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  LayoutAnimation,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue';
import RNRestart from 'react-native-restart';
// https://github.com/kohver/react-native-touchable-scale
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';

import logoCowImg from '@/assets/icons/cow.png';
import logoImg from '@/assets/logo.png';
import UserTypeItem from '@/components/UserTypeItem';

import styles from './styles';
const BG_IMAGE = require('@/assets/images/wallpaper_7.jpg');
import axios from 'axios';

import logoCFacialImg from '@/assets/icons/facialsmall.png';
import api from '@/utils/api/apiSicoga';

var AES256 = require('aes-everywhere');
import type { ConfigType } from '@config';
const appEnv = process.env.APP_ENV ?? 'development';
import { getConfig } from '../../../config/config.js';
const Config = getConfig(appEnv) as ConfigType;
import { Env } from '@env';

const AES256 = require('acypher');
const key = Env.AESKEY;
import NetworkUtils from '@/utils/Networkutils';
import protek from '@/utils/Protek';

const avatar_url =
  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';

// ############### internationalization #######################
// ############### internationalization #######################

// ####################################################
// ##################  DATABASE  ######################
import { openDatabase } from 'react-native-sqlite-storage';

import database from '@/utils/DatabaseModel';
var db = openDatabase({ name: 'sicogaCoibfe.db' });
var datosPropProdE = []; // propriedad sigor productorid
var datosProtekE = []; // protek
var datosCoibfeAE = []; // coibfe
var datosProductorE = []; // productor
var datosPropriedadE = []; // propriedad
var datosFrigorificoE = []; // frigorifico
var datosEmpezarE = []; // empezar
var datosTecnicoE = []; // empezar
var datosConfigE = []; // empezar
var merda = [];
var datosUserE = []; // user

// ####################################################
// ##################  DATABASE  ######################
let axiosInUseE = false;
let onlyOneOKEM = false;
var sigorToSend = 0;
var sigorToRec = 0;
var proteK = {};
var serverE = {};
var empezarPropriedad = [];
var empezarEmpezar = [];
var empezarPropProd = [];
var empezarFrigorifico = [];
var empezarProductor = [];
var flagServer = 0;

var flagsEmpezar = {
  toSaveDb: false,
  toRestart: false,
  toFinishCicle: false,
};

// ####################################################
// ##################  EXCEPTIONS  ####################

import { BackAndroid } from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';

const reporter = (error) => {
  // Logic for reporting to devs
  // Example : Log issues to github issues using github apis.
  console.log(error); // sample
};

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    reporter(e);
    Alert.alert(
      i18n.t('coibfe.Unexpected'),
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}       
        `,
      [
        {
          text: 'Salir',
          onPress: () => {
            BackAndroid.exitApp();
          },
        },
      ]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler);

// ####################################################
// ##################  EXCEPTIONS  ####################

export default function formInit() {
  // -------------------------------------
  // -------------------------NAVIGATION--INIT
  const navigation = useNavigation();
  const route = useRoute();
  const proteKK = route.params.proteK;

  function navigateBack() {
    if (!loading && !axiosInUseE) {
      RNRestart.Restart(); // reboot
    }
  }

  // --------------------------REFS-

  const acreditationFRef = useRef('');
  const nameFRef = useRef('');
  const passwordFRef = useRef('');
  // ---------------------------STATES

  const [dadus, setDadus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  // MESSAGES
  const [showMessage, setShowMessage] = useState(false);
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');

  const [plusButton1, setPlusButtom1] = useState(false);
  const [plusButton2, setPlusButtom2] = useState(false);
  const [plusButton3, setPlusButtom3] = useState(false);

  const [acreditationF, setAcreditationF] = useState('');
  const [nameF, setNameF] = useState('');
  const [passwordF, setPasswordF] = useState('');
  const [access, setAccess] = useState(0);
  const [frigorifico, setFrigorifico] = useState([]);
  const [productor, setProductor] = useState([]);
  const [propriedad, setPropriedad] = useState([]);

  const [buttonDisable, setButtonDisable] = useState(true);
  const [buttonCancelar, setButtonCancelar] = useState(false);

  //---------------------------FORMS STATES ---------

  const [vpa_nombreS, setvpa_nombreS] = useState('');
  const [vpa_IdS, setvpa_IdS] = useState('');

  //---------------------------GENERAL STATES ---------
  const [server, setServer] = useState({});
  const [protekS, setProtekS] = useState([]);
  const [loged, setLoged] = useState(false);

  // ---------------------------------------FUNCTIONS-PROTEK--------
  // ---------------------------------------FUNCTIONS-PROTEK--------
  // -----------------------------------------------------------------------
  function tryParseInt(str, defaultValue) {
    return parseInt(str, 10) === str ? parseInt(str, 10) : defaultValue;
  }
  // -----------------------------------------------------------------------
  async function loadProtek() {
    //const protek = JSON.stringify({posApiKeyMobile, posKeyPrivate});
    proteK = await protek.getProtek(serverE.machineKey);
    if (Env.DEBUG === true) {
      // console.log(proteK);
    }
    //setProtekS(protek);

    return proteK;
  } // end function protek
  //-----------------------
  async function loadServidor() {
    if (await testNetServer()) {
      // if charging not continue
      // not reentry
      if (axiosInUseE) {
        return;
      }
      // not reentry
      axiosInUseE = true;
      try {
        const response = await api.get('server');
        axiosInUseE = false;

        if (response.status === 200) {
          serverE = response.data;
          await loadProtek();
        }
      } catch (e) {
        flagsEmpezar.toRestart = true;

        // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
        console.log('server error load' + ' LoadServ', e);
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.server_fail') + ' LoadServ');
        axiosInUseE = false;
      }
      //setIncidents(response.data);
      // sum 2 vectors actual and old
      //await serverE.push(response.data);
      //setServer(response.data);
      if (Env.DEBUG === true) {
        console.log(server);
      }
    }
    axiosInUseE = false;
  }
  // ------------------------------------

  //-------------------------FACIAL FUNC------------------------
  //-------------------------FACIAL FUNC------------------------

  const [selectedType, setSelectedType] = useState(null);

  function updateSelectedType(selectedTypes) {
    LayoutAnimation.easeInEaseOut();
    setSelectedType(selectedTypes);
    if (Env.DEBUG === true) {
      console.log(selectedTypes);
    }
  }
  //-------------------------------------------------
  function facialRecognition() {
    Vibration.vibrate();
    if (Env.DEBUG === true) {
      console.log('Facial Init');
    }
  }
  //-----------------------API FUNCTIONS ---------------------
  //-----------------------API FUNCTIONS ---------------------
  async function testNetServer() {
    var returno = false;
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (!isConnected) {
      flagsEmpezar.toRestart = true;

      setMessage1(i18n.t('coibfe.net_fail'));
      setShowMessage(true);
    } else {
      returno = true;
    }

    return returno;
  }
  // -----------------------------------------------------------
  async function loadData() {
    Vibration.vibrate();
    // if charging not continue
    if (loading) {
      return;
    }
    // not reentry
    setLoading(true);
    const host = 'sicoga/enviar';
    const response = await api.get(host);
    //setIncidents(response.data);
    // sum 2 vectors actual and old
    setDadus([dadus, response.data]);
    setLoading(false); // reentry
  }
  // ------------------------------------
  // ------------------------------------
  // ------------------------------------

  // ------------------------------------------------

  function onSendF() {
    // Set all data TEST LOGIN
    if (testCierre()) {
      if (testNetServer()) {
        if (loged) {
          clearForms();
          setShowForm1(false);
          setShowForm2(true);
        } else if (passwordF !== '' && acreditationF !== '') {
          if (Env.DEBUG === true) {
            console.log(server);
            console.log(access, nameF, passwordF, acreditationF);
          }
          // EXECUTE FUNCTION
          if (
            acreditationF === Env.ROOT_ACREDITACION &&
            passwordF === Env.ROOT_PASSWORD
          ) {
            setvpa_IdS(Env.ROOT_VPA_ID);
            setvpa_nombreS(Env.ROOT_VPA_NOMBRE);
            setShowForm1(false);
            setShowForm2(true);
            // THE LAST COMMAND
            setAccess(access + 1); //actualize screen
            setShowMessage(false);
            setMessage1(i18n.t('coibfe.'));
          }
          testVpaLogin();
          clearForms();
        } //not login complete
        else {
          clearForms();
          setShowMessage(true);
          setMessage1(i18n.t('coibfe.datos_error'));
        } // test loged
      } // test net
    } // test cierred
    else {
      // NOT CIERRED
      setButtonCancelar(true);
    }
  }

  //----------------------------------------------
  async function testVpaLogin() {
    var result = false;
    //-------test local base have data to send
    // TODO: TEST LOCAL BASE IF VPA is OK or facial and save VPAids in base
    try {
      var token = null;
      var vpa_id = null;
      var name = null;
      var password = null;
      var mac = null;
      var key = null;

      let sizeArray = 0; // user [{xxx.userToken,user_name....}]
      if (Array.isArray(datosUserE) && datosUserE.length) {
        datosUserE.forEach((element) => {
          sizeArray += 1;
          vpa_id = element.user_vpa_id;
          password = element.user_password;
          name = element.user_register;
          mac = element.user_mac;
          key = element.user_key;
        });
      }
      if (Env.DEBUG === true) {
        console.log('token', proteK.posApiKeyMobile);
      }

      // real device key
      var tokenxx = await AES256.decrypt(
        proteK.posApiKeyMobile,
        serverE.machineKey
      );

      // crip machine name with mobile key
      const tokenECrip = await AES256.encrypt(mac, tokenxx);

      if (Env.DEBUG === true) {
        console.log('tokenx', tokenECrip);
        console.log('tokenx0', tokenxx);
      }

      //var tokens = tryParseInt(tokenDCrip, 10);
      //tokens = tokens + 1;pply index

      if (Env.DEBUG === true) {
        console.log('size', sizeArray);
        console.log('dadoss', datosUserE);
        console.log('size', sizeArray);
        console.log('dadoss', datosUserE);
        console.log('tokenECrip', tokenECrip);
      }

      var passDCrip = await AES256.decrypt(password, serverE.machineKey);

      if (Env.DEBUG === true) {
        console.log('passUCrip', passDCrip);
        console.log('acreditationF', acreditationF);
      }

      if (
        acreditationF === vpa_id &&
        passwordF === passDCrip &&
        passwordF !== null &&
        passwordF !== '' &&
        passwordF !== 'undefined' &&
        proteK.posApiKeyMobile !== null &&
        proteK.posApiKeyMobile !== '' &&
        proteK.posApiKeyMobile !== 'undefined'
      ) {
        result = true;
        setvpa_IdS(vpa_id);
        setvpa_nombreS(name);
        const datosss = {
          user_vpa_id: String(vpa_id),
          user_register: String(name),
          user_password: String(password),
          user_key: String(proteK.posApiKeyMobile),
          user_mac: String(tokenECrip),
        };

        await callAPIuserTest(datosss);
      } else {
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.login_error'));
      }
    } catch (e) {
      //e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('autentica error', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.autentica_fail'));
      setLoading(false); // reentry
    }
    // if cierred ok return true

    return result;
  }
  // #####################################################
  // #####################################################
  async function callAPIuserTest(datoss) {
    var host = 'http://' + serverE.machineServerName + '/api/v0/sicoga';
    //console.log(host);
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'
      baseURL: String(host),
      timeout: 60000,
    });
    // if charging not continue
    // not reentry
    if (loading) {
      return;
    }
    // not reentry
    setLoading(true);
    //setIncidents(response.data);
    // sum 2 vectors actual and old

    // TODO: IF RETURN PROPRIEDAD/FRIGORIFICO IS NOT VALID... CALL MESSAGES ERROR ASN FUNCTIONS

    // baseURL: POST 'http://209.208.97.67:3333/empezar/testuser' test
    // RETURN datos
    try {
      const responsep = await apis.post(
        'empezar/usertest',
        datoss,
        {
          headers: {},
        },
        {
          data: {
            // This is the body part return
          },
        }
      );

      if (responsep.status === 200) {
        // save all propriedads

        var token = null;
        var status = null;
        var mac = null;
        if (Array.isArray(datosUserE) && datosUserE.length) {
          datosUserE.forEach((element) => {
            token = element.userToken;
            status = element.user_status;
            mac = element.user_mac;
          });
        }
        //test status
        /*
        var tokenLocalDCrip = await AES256.decrypt(token, serverE.machineKey); // dec token
        var tokenZero = await AES256.encrypt('0', serverE.machineKey); // dec token
        var tokenRemoteDCrip = await AES256.decrypt(
          responsep.data.userToken,
          serverE.machineKey,
        );
*/
        if (responsep.data.user_status === 'active') {
          if (Env.DEBUG === true) {
            console.log('token', token);
            // console.log('tokenZero', tokenZero);
            // console.log('tokenLocalDCrip', tokenLocalDCrip);
            // console.log('tokenRemoteDCrip', tokenRemoteDCrip);
          }

          if (String(mac) === String(responsep.data.user_mac)) {
            if (Env.DEBUG === true) {
              console.log('responsep', responsep.data);
              console.log('datoss', datoss);
            }
            // all ok
            setLoading(false); // reentry
            setLoged(true);
            clearForms();
            setShowForm1(false);
            setShowForm2(true);
          } else {
            flagsEmpezar.toRestart = true;

            setLoading(false); // reentry
            setShowMessage(true);
            setMessage1(i18n.t('coibfe.error_api_tk'));
          }
        } else {
          setShowMessage(true);
          setMessage1(i18n.t('coibfe.error_user'));
        } // end test status
      } // response 200
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server user test error' + ' ApiUser', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + ' ApiUser');
      setLoading(false); // reentry
    }
    setLoading(false); // reentry
  }
  // #####################################################
  // #####################################################
  async function callApiFrigorifico(datasss) {
    const host = 'http://' + serverE.machineServerName + '/api/v0/sicoga';
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'
      baseURL: String('http://' + serverE.machineServerName + '/api/v0/sicoga'),
      timeout: 60000,
    });
    // if charging not continue
    // not reentry
    if (loading) {
      return;
    }

    // not reentry
    setLoading(true);
    //setIncidents(response.data);
    // sum 2 vectors actual and old
    // TODO: IF RETURN PROPRIEDAD/FRIGORIFICO IS NOT VALID... CALL MESSAGES ERROR ASN FUNCTIONS
    try {
      // baseURL: POST 'http://209.208.97.67:3333/empezar/ frigorifico propriedad productor propriedad_productor' store
      // RETURN datos
      const responsef = await apis.get('empezar/frigorifico');

      if (responsef.status === 200) {
        // setFrigorifico(responsef.data);
        setFrigorifico(responsef.data);

        var returno = false;
        if (Array.isArray(responsef.data) && responsef.data.length) {
          responsef.data.forEach((element) => {
            if (
              element.frigorifico_ID !== null &&
              element.frigorificoName !== null
            ) {
              //await database.InsertDBfrigorifico(element); // ARRAY
              empezarFrigorifico.push(element);

              returno = true;
            }
          });
        }

        if (Env.DEBUG === true) {
          // console.log('frigorifico', responsef.data);
        }
        setLoading(false); // reentry

        if (returno) {
          // CALL API PROPRIEDAD

          await loadPropriedad(datasss);
        }
      } else {
        setLoading(false); // reentry
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.error_api_frigo'));
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server error frigo' + ' ApiFri', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + ' ApiFri');
    }
    setLoading(false); // reentry
  }
  // #####################################################
  // #####################################################
  async function callApiProductorS(sigores) {
    const host = 'http://' + serverE.machineServerName + '/api/v0/sicoga';
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'callApiProductor
      baseURL: String('http://' + serverE.machineServerName + '/api/v0/sicoga'),
      timeout: 60000,
    });
    // if charging not continue
    // not reentry
    if (loading) {
      return;
    }
    // not reentry
    setLoading(true);
    //setIncidents(response.data);
    // sum 2 vectors actual and old
    // TODO: IF RETURN PROPRIEDAD/FRIGORIFICO IS NOT VALID... CALL MESSAGES ERROR ASN FUNCTIONS

    try {
      // TODO: select references of sigor propriedad
      const sigorP = { productor_propriedad_ID: String(sigores) };
      const responsed = await apis.post(
        'empezar/productores/id',
        sigorP,
        {
          headers: {},
        },
        {
          data: {
            // This is the body part return
          },
        }
      );

      if (responsed.status === 200) {
        // setProductor(responsed.data);
        sigorToRec += 1;

        setProductor(responsed.data);

        // ######   S U C E S S ####
        empezarProductor.push(responsed.data);

        if (Array.isArray(responsed.data) && responsed.data.length) {
          responsed.data.forEach((element) => {
            if (
              element.productor_ID !== null &&
              element.productorName !== null &&
              element.productorStatus === 'active'
            ) {
              //await database.InsertDBfrigorifico(element); // ARRAY
              empezarProductor.push(element);
              returno = true;
            }
          });
        }
        // only one insert
        if (!flagsEmpezar.toFinishCicle) {
          flagsEmpezar.toFinishCicle = true; //finish one complete cicle
          flagServer += 1;
        }

        empezarEmpezar.push({
          empezar_sigor: String(sigores),
          //TODO: take coibfe ID
          empezar_coibfe: String(sigores),
        });

        await saveAllDBs();
        // TEST FOR SUCESS
        setLoading(false); // reentry
      } else {
        setLoading(false); // reentry
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.productor_erro'));
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server error productor' + ' ApiProd', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + ' ApiProd');
      setLoading(false); // reentry
    }
    setLoading(false); // reentry
  }
  // #####################################################
  // #####################################################

  // #####################################################
  // #####################################################
  async function callApiProductor(prodIds) {
    const host = 'http://' + serverE.machineServerName + '/api/v0/sicoga';
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'callApiProductor
      baseURL: String('http://' + serverE.machineServerName + '/api/v0/sicoga'),
      timeout: 60000,
    });
    // if charging not continue
    // not reentry
    if (loading) {
      return;
    }
    // not reentry
    setLoading(true);
    //setIncidents(response.data);
    // sum 2 vectors actual and old
    // TODO: IF RETURN PROPRIEDAD/FRIGORIFICO IS NOT VALID... CALL MESSAGES ERROR ASN FUNCTIONS

    try {
      // TODO: select references of sigor propriedad
      const productorId = { sigorProductor: String(prodIds) };
      const responsed = await apis.post(
        'empezar/productor/id',
        productorId,
        {
          headers: {},
        },
        {
          data: {
            // This is the body part return
          },
        }
      );

      if (responsed.status === 200) {
        // setProductor(responsed.data);
        sigorToRec += 1;

        setProductor(responsed.data);

        if (String(responsed.data.productorStatus) === 'active') {
          if (
            responsed.data.productor_ID !== null &&
            responsed.data.productorName !== null
          ) {
            // ######   S U C E S S ####
            empezarProductor.push(responsed.data);

            setLoading(false); // reentry
            saveAllDBs();
            // only one insert
            if (!flagsEmpezar.toFinishCicle) {
              flagsEmpezar.toFinishCicle = true; //finish one complete cicle
              flagServer += 1;
            }
          } //test productor active
        } //test sigor
        // TEST FOR SUCESS
        setLoading(false); // reentry
      } else {
        setLoading(false); // reentry
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.productor_erro'));
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server error productor' + ' ApiProd', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + ' ApiProd');
      setLoading(false); // reentry
    }
    setLoading(false); // reentry
  }
  // #####################################################
  // #####################################################
  async function callApiPropriedadProductor(sigores) {
    const host = 'http://' + serverE.machineServerName + '/api/v0/sicoga';
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'
      baseURL: String('http://' + serverE.machineServerName + '/api/v0/sicoga'),
      timeout: 60000,
    });
    // if charging not continue
    // not reentry
    if (loading) {
      return;
    }
    // not reentry
    setLoading(true);
    //setIncidents(response.data);
    // sum 2 vectors actual and old
    // TODO: IF RETURN PROPRIEDAD/FRIGORIFICO IS NOT VALID... CALL MESSAGES ERROR ASN FUNCTIONS
    try {
      const sigorP = { propriedadSigor: String(sigores) };

      const responsep = await apis.get('registrar/propriedad_productor');

      if (responsep.status === 200) {
        // save all propriedads
        //setPropriedad([...propriedad, ...responsep.data]);

        // take one element of array
        var lastElementCoibfeId = '';
        datosPropProdE = [];
        if (Array.isArray(responsep.data) && responsep.data.length) {
          responsep.data.forEach((element) => {
            const sigor = element.propriedadSigor;
            if (sigor === sigores) {
              //database.InsertDBpropriedad_productor(element); // ARRAY
              empezarPropProd.push(element);
              datosPropProdE.push(element); // recover db
              lastElementCoibfeId = element.coibfeId;
            }
          });
        }
        //TODO:if sigor not registered...init
        // set database empezar

        // INSERT IN DB EMPEZAR
        empezarEmpezar.push({
          empezar_sigor: String(sigores),
          //TODO: take coibfe ID
          empezar_coibfe: String(lastElementCoibfeId),
        });

        //all sigors sended

        setLoading(false); // to reentry below

        await loadProductor(); // TODO:  DONT CHANGE TIME ERROR
      } else {
        setLoading(false); // to reentry below
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.propprod_erro'));
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server error prop prod' + ' Apipropprod', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + ' Apipropprod');
      setLoading(false); // reentry
    }

    setLoading(false); // reentry
  }
  // #####################################################
  // #####################################################
  async function callApiPropriedad(sigores) {
    flagsEmpezar.toFinishCicle = false; //init one complete cicle
    // init backup values

    const host = 'http://' + serverE.machineServerName + '/api/v0/sicoga';
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'
      baseURL: String('http://' + serverE.machineServerName + '/api/v0/sicoga'),
      timeout: 60000,
    });

    // if charging not continue
    // not reentry
    if (loading) {
      return;
    }
    // not reentry
    setLoading(true);
    //setIncidents(response.data);
    // sum 2 vectors actual and old
    // TODO: IF RETURN PROPRIEDAD/FRIGORIFICO IS NOT VALID... CALL MESSAGES ERROR ASN FUNCTIONS

    try {
      const sigorP = { propriedadSigor: String(sigores) };

      const responsep = await apis.post(
        'empezar/propriedad',
        sigorP,
        {
          headers: {},
        },
        {
          data: {
            // This is the body part return
          },
        }
      );

      if (responsep.status === 200) {
        if (
          String(sigorP.propriedadSigor) ===
          String(responsep.data.propriedadSigor)
        ) {
          // IF ALL SIGORS ACTIVE
          if (String(responsep.data.propriedadStatus) === 'active') {
            // save all propriedads
            setPropriedad(responsep.data);
            empezarPropriedad.push(responsep.data);

            setLoading(false); // reentry
            // CALL API PROPRIEDAD PRODUCTOR
            // INSERT IN DB EMPEZAR

            //  await callApiPropriedadProductor(sigores);
            await callApiProductorS(sigores);
          } else {
            setShowMessage(true);
            setMessage1(i18n.t('coibfe.error_propriedad'));
          } // test if active
        } else {
          setShowMessage(true);
          setMessage1(i18n.t('coibfe.error_api_prop'));
        } // test if is this sigor
      } else {
        setLoading(false); // to reentry below
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.propriedad_erro'));
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server error prop' + ' Apiprop', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + ' Apiprop');
      setLoading(false); // reentry
    }
    setLoading(false); // reentry
  }
  //-------------------------------------------------
  async function saveAllDBs() {
    console.log('saveAllDBs 1');
    flagsEmpezar.toSaveDb = true;
    var empezarOnlyOneElement = [];

    if (flagServer > 0) {
      // PRODUCTOR

      // sort productor list for only one productor
      if (Array.isArray(empezarProductor) && empezarProductor.length) {
        empezarProductor.forEach(async (element) => {
          if (
            Array.isArray(!empezarOnlyOneElement) &&
            !empezarOnlyOneElement.length
          ) {
            //first push
            empezarOnlyOneElement.push(element);
          } else {
            const element_productor_ID = element.productor_ID;
            var returno00 = false;
            var elementus2 = {};
            elementus2 = element;

            empezarOnlyOneElement.forEach(async (element2) => {
              const element2_productor_ID = element2.productor_ID;
              if (element_productor_ID === element2_productor_ID) {
                returno00 = true;
              }
            });
            if (returno00 === false) {
              empezarOnlyOneElement.push(elementus2);
            }
          }
        });
      }

      // console.log('received', empezarProductor);
      // console.log('filter', empezarOnlyOneElement);

      // recover cleared productor list
      var returno00 = true;
      if (
        Array.isArray(empezarOnlyOneElement) &&
        empezarOnlyOneElement.length
      ) {
        empezarOnlyOneElement.forEach(async (element) => {
          var returnos = await database.InsertDBproductor(element);
          if (returnos) {
            returno00 = false;
          }
        });
      }

      // FRIGO
      var returno0 = true;
      if (Array.isArray(empezarFrigorifico) && empezarFrigorifico.length) {
        empezarFrigorifico.forEach(async (element) => {
          var returnos = await database.InsertDBfrigorifico(element);
          if (returnos) {
            returno0 = false;
          }
        });
      }

      // PROPRIEDAD PRODUCTOR
      var returno1 = true;
      if (Array.isArray(empezarPropProd) && empezarPropProd.length) {
        empezarPropProd.forEach(async (element) => {
          var returnos = await database.InsertDBpropriedad_productor(element);
          if (returnos) {
            returno1 = false;
          }
        });
      }

      // EMPEZAR
      var returno2 = true;
      if (Array.isArray(empezarEmpezar) && empezarEmpezar.length) {
        empezarEmpezar.forEach(async (element) => {
          var returnos = await database.InsertDBempezar(element);
          if (returnos) {
            returno2 = false;
          }
        });
      }

      // PROPRIEDAD
      var returno3 = true;
      if (Array.isArray(empezarPropriedad) && empezarPropriedad.length) {
        empezarPropriedad.forEach(async (element) => {
          var returnos = await database.InsertDBpropriedad(element);
          if (returnos) {
            returno3 = false;
          }
        });
      }
      flagsEmpezar.toSaveDb = false;
      flagsEmpezar.toRestart = true;

      setShowMessage(true);
      setMessage1(i18n.t('coibfe.sucess'));
      if (sigorToSend > flagServer) {
        setMessage2(i18n.t('coibfe.total_sigor') + String(sigorToSend));
      } else {
        setMessage2(i18n.t('coibfe.total_sigor') + String(flagServer));
      }
    }
  }

  //------------------------FORMS FUNC---------------
  //------------------------FORMS FUNC---------------

  //----------------------------------------------
  function clearForms() {
    //Vibration.vibrate();
    setAcreditationF('');
    setNameF('');
    setPasswordF('');
    passwordFRef.current?.clear();
    // nameFRef.current?.clear();
    acreditationFRef.current?.clear();
  }
  // --------------------------------------FORMS

  // ------------------------------------------------
  function splusButton1() {
    setPlusButtom1(true);
    setAccess(access + 1); //actualize screen
  }
  // ------------------------------------------------
  function splusButton2() {
    setPlusButtom2(true);
    setAccess(access + 1); //actualize screen
  }
  // ------------------------------------------------
  function splusButton3() {
    setPlusButtom3(true);
    setAccess(access + 1); //actualize screen
  }
  // ------------------------------------------------
  function sendForms(datoss) {
    // ============ DESCRIPTO APIKEYMO
    // TODO: if not cierred
    // encryption
    // --------------- // TODO: DONT CHANGE THIS SEQUENCE..TIMER PROBLEM

    if (validaSigor(datoss)) {
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.waiting'));
      loadFrigorifico(datoss);
      // finish message
    } else {
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.sigor_error'));
      console.log('ssss2', datoss);
    }
  }
  // ------------------------------
  function validaSigor(datoss) {
    var returno = false;
    var value = 0;
    if (datoss.sigor4 !== '' && datoss.sigor4 !== null) {
      value += 1;
    }
    if (datoss.sigor3 !== '' && datoss.sigor3 !== null) {
      value += 1;
    }
    if (datoss.sigor2 !== '' && datoss.sigor2 !== null) {
      value += 1;
    }
    if (datoss.sigor1 !== '' && datoss.sigor1 !== null) {
      value += 1;
    }

    switch (value) {
      case 1:
        returno = true;
        break;
      case 2:
        if (datoss.sigor1 !== datoss.sigor2) {
          returno = true;
        }
        break;
      case 3:
        if (
          datoss.sigor1 !== datoss.sigor2 &&
          datoss.sigor2 !== datoss.sigor3 &&
          datoss.sigor1 !== datoss.sigor3
        ) {
          returno = true;
        }
        break;
      case 4:
        if (
          datoss.sigor1 !== datoss.sigor2 &&
          datoss.sigor2 !== datoss.sigor3 &&
          datoss.sigor3 !== datoss.sigor4 &&
          datoss.sigor1 !== datoss.sigor4 &&
          datoss.sigor4 !== datoss.sigor2 &&
          datoss.sigor1 !== datoss.sigor3
        ) {
          returno = true;
        }
        break;

      default:
        returno = false;
        break;
    }
    return returno;
  }
  // ------------------------------

  function testArraySize() {
    var sizeArrays = 0;
    //have data in array
    if (Array.isArray(datosEmpezarE) && datosEmpezarE.length) {
      var sizeArrays = datosEmpezarE.length;
    }

    return sizeArrays;
  }
  //-------------------------------------------------
  // ------------------------------------------------

  function testCierre() {
    var result = false;

    const sizeArrays = testArraySize();
    // free array
    if (sizeArrays === 0) {
      result = true;
    }
    if (result === false) {
      flagsEmpezar.toRestart = true;
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.nada_empezar'));
    }
    // if cierred ok return true
    return result;
  }
  //-------------------------------------------------
  //-------------------------------------------------
  //-------------------------------------------------
  async function loadPropriedad(values) {
    if (values.sigor4 !== '' && values.sigor4 !== null) {
      sigorToSend += 1;
    }

    if (values.sigor3 !== '' && values.sigor3 !== null) {
      sigorToSend += 1;
    }

    if (values.sigor2 !== '' && values.sigor2 !== null) {
      sigorToSend += 1;
    }

    if (values.sigor1 !== '' && values.sigor1 !== null) {
      sigorToSend += 1;
    }

    if (values.sigor1 !== '' && values.sigor1 !== null) {
      await callApiPropriedad(values.sigor1);

      // tempData => sqlite
      // TODO: save local database sigors 1 a 4
      // TODO: test if have data showw sucess sigor 1 a 4
    }

    if (values.sigor2 !== '' && values.sigor2 !== null) {
      await callApiPropriedad(values.sigor2);
      // tempData => sqlite
      // TODO: save local database sigors 1 a 4
    }

    if (values.sigor3 !== '' && values.sigor3 !== null) {
      await callApiPropriedad(values.sigor3);
      // tempData => sqlite
      // TODO: save local database sigors 1 a 4
    }

    if (values.sigor4 !== '' && values.sigor4 !== null) {
      await callApiPropriedad(values.sigor4);
      // tempData => sqlite
      // TODO: save local database sigors 1 a 4
    }
    // TODO: save local database sigors 1 a 4
  }
  //-------------------------------------------------
  //-------------------------------------------------
  //-------------------------------------------------
  async function loadFrigorifico(datass) {
    await callApiFrigorifico(datass);
    // frigorifico => sqlite
    // TODO: save local database frigorifico
  }
  // -------------------------------------------------------
  async function loadProductor() {
    var productores = [];
    // TODO: erro sync DB
    /*
    datosPropProdE = [
      {
        coibfeId: '9000016',
        productor_ID: '023',
        propriedadSigor: '012',
        propriedad_productor_id: 1,
        propriedad_productor_issinc: null,
      },
      {
        coibfeId: '9000016',
        productor_ID: '025',
        propriedadSigor: '012',
        propriedad_productor_id: 2,
        propriedad_productor_issinc: null,
      },
      {
        coibfeId: '9000016',
        productor_ID: '026',
        propriedadSigor: '012',
        propriedad_productor_id: 3,
        propriedad_productor_issinc: null,
      },
      {
        coibfeId: '9000017',
        productor_ID: '023',
        propriedadSigor: '012',
        propriedad_productor_id: 4,
        propriedad_productor_issinc: null,
      },
    ];
    // */
    //database.openDBpropprod();
    //var merdas = await database.SelectDBprop_prod();
    var productorID = {};
    if (Array.isArray(empezarPropProd) && empezarPropProd.length) {
      empezarPropProd.forEach(async (element) => {
        productorID = element.productor_ID;
        await callApiProductor(productorID);

        if (Env.DEBUG === true) {
          console.log('productor ID', productorID);
        }
      });
    }
  }
  // -------------------------------------------------------
  //-------------------------------------------------
  async function finishDB() {
    // await database.dropDBempezar();
    await database.dropAllDBempezar();
    await database.dropAllDBproductor();
    await database.dropAllDBpropriedad();
    await database.dropAllDBpropriedad_productor();
    await database.dropAllDBcoibfe();
    await database.dropAllDBfrigorifico();

    // clear auto login
    RNRestart.Restart(); // reboot
  }
  //-------------------------------------------------
  // -------------------------------------------------------
  // -------------------------------------------------------
  // -------------------------------------------------------
  function saveLogSdcard(datosCoibfes) {
    // TODO: save in sdcard backup
  }
  // ##################  DATABASE  ######################
  // ##################  DATABASE  ######################
  //--------------------------- STATES ---------

  async function loadLocalDataBase() {
    datosEmpezarE = [];
    datosFrigorificoE = [];
    datosProductorE = [];
    datosPropriedadE = [];
    datosConfigE = [];
    datosProtekE = [];
    datosTecnicoE = [];
    datosCoibfeAE = [];
    datosPropProdE = [];
    datosUserE = [];

    try {
      datosUserE = await SelectDB('table_user');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_user', e);
    }
    try {
      datosEmpezarE = await SelectDB('table_empezar');
      //testArraySize(datosEmpezarE); //test if have data
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_empezar', e);
    }

    try {
      datosFrigorificoE = await SelectDB('table_frigorifico');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_frigorifico', e);
    }

    try {
      datosProductorE = await SelectDB('table_productor');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_productor', e);
    }

    try {
      datosPropriedadE = await SelectDB('table_propriedad');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_propriedad', e);
    }

    try {
      datosConfigE = await SelectDB('table_config');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_config', e);
    }

    try {
      datosProtekE = await SelectDB('table_protek');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_protek', e);
    }

    try {
      datosTecnicoE = await SelectDB('table_tecnico');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_tecnico', e);
    }

    try {
      datosCoibfeAE = await SelectDB('table_coibfe');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_coibfe', e);
    }

    try {
      datosPropProdE = await SelectDB('table_propriedad_productor');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_propriedad_productor', e);
    }

    if (Env.DEBUG === true) {
      //  console.log('table_empezar', datosEmpezarE);
      //  console.log('table_frigorifico', datosFrigorificoE);
      //  console.log('table_productor', datosProductorE);
      //  console.log('table_propriedad', datosPropriedadE);
      //  console.log('table_config', datosConfigE);
      //  console.log('table_protek', datosProtekE);
      //  console.log('table_tecnico', datosTecnicoE);
      //  console.log('table_coibfe', datosCoibfeAE);
      //  console.log('table_propriedad_productor', datosPropProdE);
    }
  }

  //--------------------------------------------------

  async function SelectDB(table_name) {
    await db.transaction(async (txn) => {
      await txn.executeSql(
        'SELECT * FROM ' + table_name + ' ',
        //'SELECT * FROM table_user',
        [],
        async (tx, results) => {
          var len = results.rows.length;
          if (Env.DEBUG === true) {
            console.log('DB', table_name, len);
          }
          if (len > 0) {
            var temp = [];
            switch (table_name) {
              case 'table_user':
                datosUserE = [];
                break;
              case 'table_config':
                datosConfigE = [];
                break;
              case 'table_propriedad_productor':
                datosPropProdE = [];
                break;
              case 'table_empezar':
                datosEmpezarE = [];
                break;
              case 'table_propriedad':
                datosPropriedadE = [];
                break;
              case 'table_productor':
                datosProductorE = [];
                break;
              case 'table_frigorifico':
                datosFrigorificoE = [];
                break;
              case 'table_tecnico':
                datosTecnicoE = [];
                break;
              case 'table_coibfe':
                datosCoibfeAE = [];
                break;
              case 'table_protek':
                datosProtekE = [];
                break;
            }
            let i = 0;
            for (i = 0; i < results.rows.length; ++i) {
              switch (table_name) {
                case 'table_user':
                  datosUserE.push(results.rows.item(i));
                  break;
                case 'table_config':
                  datosConfigE.push(results.rows.item(i));
                  break;
                case 'table_propriedad_productor':
                  datosPropProdE.push(results.rows.item(i));
                  break;
                case 'table_empezar':
                  datosEmpezarE.push(results.rows.item(i));
                  break;
                case 'table_propriedad':
                  datosPropriedadE.push(results.rows.item(i));
                  break;
                case 'table_productor':
                  datosProductorE.push(results.rows.item(i));
                  break;
                case 'table_frigorifico':
                  datosFrigorificoE.push(results.rows.item(i));
                  break;
                case 'table_tecnico':
                  datosTecnicoE.push(results.rows.item(i));
                  break;
                case 'table_coibfe':
                  datosCoibfeAE.push(results.rows.item(i));
                  break;
                case 'table_protek':
                  datosProtekE.push(results.rows.item(i));
                  break;
              }
              temp.push(results.rows.item(i));
            }
            // returno = results.rows.item(i - 1);
            return temp;
          } else {
            if (Env.DEBUG === true) {
              console.log('Fail');
            }
            return temp;
          }
        }
      );
    });
  }
  // ##################  DATABASE  ######################
  // ##################  DATABASE  ######################

  // ################### EXECUTE ON START SCREEN ######
  // ##################################################

  async function onlyOne() {
    if (!onlyOneOKEM) {
      onlyOneOKEM = true;
      BackHandler.addEventListener('hardwareBackPress', () => true);

      // ##################  DATABASE  ######################
      await database.openDB();
      // ##################  DATABASE  ######################
      await loadServidor();

      await loadLocalDataBase();

      if (Env.DEBUG === true) {
        console.log('BOOT');
      }
    }
  }

  // ##################################################
  // single shoot
  setTimeout(() => {
    onlyOne();
  }, 2000);

  // ##################################################
  // ##################################################
  useEffect(() => {
    function onBoot() {}
    onBoot();
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  });
  // ##################################################
  // ##################################################

  //--------------------PAGES-----------------------------
  //--------------------PAGES-----------------------------

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.returnButton}
              onPress={() => {
                Linking.openURL('http://pyingenieriaysistemas.ga');
              }}
            >
              <Image source={logoImg} style={styles.image} />
            </TouchableOpacity>

            <Text style={styles.title}>{i18n.t('coibfe.empezar')}</Text>

            <TouchableOpacity
              style={styles.returnButton}
              onPress={navigateBack}
            >
              <View style={styles.headerBackIcon}>
                <Icon name="backward" size={30} color="#251fe0" />
              </View>
            </TouchableOpacity>
          </View>
          {/* SCROLLVIEW */}
          <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <Image
                style={styles.logo}
                source={
                  logoCowImg /*{
                  uri:
                    'https://storage.googleapis.com/golden-wind/unform/unform.png',
                }*/
                }
              />
              {/* HIDE FORMS*/}
              {showForm1 ? (
                <View style={styles.viewForm1}>
                  {/* Facial*/}

                  <View style={styles.userTypesContainerF}>
                    <View style={styles.logoItemsF}>
                      <UserTypeItem
                        label={i18n.t('coibfe.facial')}
                        labelColor="#190a2a"
                        image={logoCFacialImg}
                        onPress={() => {
                          facialRecognition();
                        }}
                        selected={selectedType === 'facial'}
                      />
                    </View>
                  </View>
                  {/*
                  <View style={styles.viewText}>
                    <Text style={styles.text}>{i18n.t('coibfe.name')}</Text>
                  </View>
                  <View style={styles.viewInput}>
                    <TextInput
                      ref={nameFRef}
                      autoCapitalize="none"
                      style={styles.input}
                      placeholder={i18n.t('coibfe.name')}
                      onChangeText={(text) => {
                        setNameF(text);
                      }}
                    />
                  </View>
*/}
                  <View style={styles.viewText}>
                    <Text style={styles.text}>
                      {i18n.t('coibfe.acreditation')}
                    </Text>
                  </View>

                  <View style={styles.viewInput}>
                    <TextInput
                      ref={acreditationFRef}
                      keyboardType="number-pad"
                      style={styles.input}
                      placeholder={i18n.t('coibfe.acreditation')}
                      onChangeText={(text) => {
                        setAcreditationF(text);
                      }}
                    />
                  </View>

                  <View style={styles.viewText}>
                    <Text style={styles.text}>{i18n.t('coibfe.password')}</Text>
                  </View>
                  {/* HIDE FORMS*/}
                  <View style={styles.viewInput}>
                    <TextInput
                      ref={passwordFRef}
                      keyboardType="number-pad"
                      style={styles.input}
                      secureTextEntry={true}
                      placeholder={i18n.t('coibfe.password')}
                      onChangeText={(text) => {
                        setPasswordF(text);
                      }}
                    />
                  </View>
                  <View style={styles.viewTextCounter}>
                    <Text style={styles.text1}>
                      {i18n.t('coibfe.access')}: {access}
                    </Text>
                  </View>

                  <View style={styles.viewButton}>
                    <AwesomeButton
                      style={styles.buttonAB}
                      progress
                      onPress={(next) => {
                        setTimeout(() => {
                          next();
                          onSendF();
                        }, 1000);
                      }}
                      type="primary"
                      backgroundColor={'#63606d'}
                      borderRadius={20}
                      height={50}
                      width={300}
                    >
                      {i18n.t('coibfe.submit')}
                    </AwesomeButton>
                  </View>
                </View>
              ) : null}
              {/* FORMS */}
              {/* HIDE FORMS*/}
              {showForm2 ? (
                <View style={styles.viewForm2}>
                  <Formik
                    initialValues={{
                      sigor1: '',
                      sigor2: '',
                      sigor3: '',
                      sigor4: '',
                    }}
                    onSubmit={(values) => {
                      sendForms(values);
                    }}
                    validationSchema={yup.object().shape({
                      sigor1: yup.string(),
                      sigor2: yup.string(),
                      sigor3: yup.string(),
                      sigor4: yup.string(),
                    })}
                  >
                    {({
                      values,
                      handleChange,
                      errors,
                      setFieldTouched,
                      touched,
                      isValid,
                      handleSubmit,
                    }) => (
                      <View style={styles.formContainer}>
                        <View style={styles.viewSignButton}>
                          <TextInput
                            value={values.sigor1}
                            style={styles.inputStyle}
                            keyboardType="number-pad"
                            onChangeText={handleChange('sigor1')}
                            onBlur={() => {
                              setFieldTouched('sigor1');
                            }}
                            placeholder={'Sigor1'}
                          />
                          <Button
                            style={styles.signinButton}
                            title={' + '}
                            onPress={splusButton1}
                          />
                        </View>
                        {touched.sigor1 && errors.sigor1 && (
                          <Text style={styles.textError}>{errors.sigor1}</Text>
                        )}
                        {plusButton1 ? (
                          <View style={styles.viewSignButton}>
                            <TextInput
                              value={values.sigor2}
                              style={styles.inputStyle}
                              keyboardType="number-pad"
                              onChangeText={handleChange('sigor2')}
                              onBlur={() => {
                                setFieldTouched('sigor2');
                              }}
                              placeholder={'Sigor2'}
                            />
                            <Button
                              style={styles.signinButton}
                              title={' + '}
                              onPress={splusButton2}
                            />
                          </View>
                        ) : null}
                        {touched.sigor2 && errors.sigor2 && (
                          <Text style={styles.textError}>{errors.sigor2}</Text>
                        )}
                        {plusButton2 ? (
                          <View style={styles.viewSignButton}>
                            <TextInput
                              value={values.sigor3}
                              style={styles.inputStyle}
                              keyboardType="number-pad"
                              onChangeText={handleChange('sigor3')}
                              onBlur={() => {
                                setFieldTouched('sigor3');
                              }}
                              placeholder={'Sigor3'}
                            />
                            <Button
                              style={styles.signinButton}
                              title={' + '}
                              onPress={splusButton3}
                            />
                          </View>
                        ) : null}
                        {touched.sigor3 && errors.sigor3 && (
                          <Text style={styles.textError}>{errors.sigor3}</Text>
                        )}
                        {plusButton3 ? (
                          <View style={styles.viewSignButton}>
                            <TextInput
                              value={values.sigor4}
                              style={styles.inputStyle}
                              keyboardType="number-pad"
                              onChangeText={handleChange('sigor4')}
                              onBlur={() => {
                                setFieldTouched('sigor4');
                              }}
                              placeholder={'Sigor4'}
                            />
                          </View>
                        ) : null}

                        {touched.sigor4 && errors.sigor4 && (
                          <Text style={styles.textError}>{errors.sigor4}</Text>
                        )}
                        {/*BUTTON INIT */}
                        {buttonDisable ? (
                          <View style={styles.viewButtonSubmitBlue}>
                            <AwesomeButton
                              style={styles.buttonAB}
                              progress
                              onPress={(next) => {
                                setTimeout(() => {
                                  next();
                                  setButtonDisable(false);
                                  handleSubmit();
                                }, 1000);
                              }}
                              type="primary"
                              backgroundColor={'#3740FE'}
                              borderRadius={20}
                              height={50}
                              width={300}
                            >
                              {i18n.t('coibfe.submit')}
                            </AwesomeButton>
                          </View>
                        ) : null}
                      </View>
                    )}
                  </Formik>
                </View>
              ) : null}

              {/* FORMS */}

              {/* FORMS */}
            </ScrollView>
            {/* FORMS */}

            <FlatList
              // data={[1,2,3,4,5]}

              data={datosEmpezarE}
              style={styles.incidentList}
              keyExtractor={(empezars) => String(empezars.empezar_id)}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              // if end of list loading more
              //onEndReached={loadIncidents}
              // only loading if stay in 20% of final list
              onEndReachedThreshold={0.2}
              // change value item to incident
              renderItem={({ item: empezars }) => (
                <View style={styles.incident}>
                  <Text style={styles.incidentProperty}>
                    Sigor Inicializado:
                  </Text>
                  <Text style={styles.incidentValue}>
                    {empezars.empezar_sigor}
                  </Text>
                </View>
              )}
            />
            {/*
            <FlatList
              // data={[1,2,3,4,5]}
              data={productor}
              style={styles.incidentList}
              keyExtractor={(productors) => String(productors.produtor_id)}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              // if end of list loading more
              //onEndReached={loadIncidents}
              // only loading if stay in 20% of final list
              onEndReachedThreshold={0.2}
              // change value item to incident
              renderItem={({item: productors}) => (
                <View style={styles.incident}>
                  <Text style={styles.incidentProperty}>Productor:</Text>
                  <Text style={styles.incidentValue}>
                    {productors.productorName}
                  </Text>
                </View>
              )}
            />

            <FlatList
              // data={[1,2,3,4,5]}
              data={frigorifico}
              style={styles.incidentList}
              keyExtractor={(frigorificos) =>
                String(frigorificos.frigorificos_id)
              }
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              // if end of list loading more
              //onEndReached={loadIncidents}
              // only loading if stay in 20% of final list
              onEndReachedThreshold={0.2}
              // change value item to incident
              renderItem={({item: frigorificos}) => (
                <View style={styles.incident}>
                  <Text style={styles.incidentProperty}>Frigorificos:</Text>
                  <Text style={styles.incidentValue}>
                    {frigorificos.frigorificoName}
                  </Text>
                </View>
              )}
            />
             */}
            {/*BUTTON CANCEL */}
            {buttonCancelar ? (
              <View style={styles.viewButtonSubmitBlue}>
                <AwesomeButton
                  style={styles.buttonAB}
                  progress
                  onPress={(next) => {
                    setTimeout(() => {
                      next();
                      setButtonDisable(false);
                      finishDB();
                    }, 1000);
                  }}
                  type="primary"
                  backgroundColor={'#af39fe'}
                  borderRadius={20}
                  height={50}
                  width={300}
                >
                  {i18n.t('coibfe.erase')}
                </AwesomeButton>
              </View>
            ) : null}
            {/* ############################### view message */}
            {showMessage ? (
              <View style={styles.MessageContainer}>
                {/* DIVIDER MARGIN*/}
                {/* LISTITEM BADGES */}

                {/* LISTITEM BADGES */}
                <View style={styles.messages}>
                  <Avatar rounded source={{ uri: avatar_url }} />
                  <View>
                    <Text style={styles.titleMsg}> {message1} </Text>
                    <Text style={styles.titleMsg}> {message2} </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.returnButton}
                    onPress={() => {
                      setShowMessage(false);
                      setMessage1('');
                      setMessage2('');
                      setShowMessage(true);
                      if (flagsEmpezar.toRestart) {
                        RNRestart.Restart(); // reboot
                      }
                      if (flagsEmpezar.toSaveDb) {
                        saveAllDBs(); // reboot
                      }
                    }}
                  >
                    <View tyle={styles.MessageBtn}>
                      <Icon name="hand-o-up" size={30} color="#251fe0" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
            {/* ################################ view message */}
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
