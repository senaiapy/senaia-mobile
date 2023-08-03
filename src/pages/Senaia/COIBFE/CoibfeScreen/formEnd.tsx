/* eslint-disable unicorn/filename-case */

/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */
//@ts-nocheck

//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//###########################################

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  BackHandler,
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

import UserTypeItem from '@/components/UserTypeItem';

var AES256 = require('aes-everywhere');

import { Env } from '@env';
import axios from 'axios';
import { Formik } from 'formik';
// https://github.com/kohver/react-native-touchable-scale
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';

import logoCowImg from '@/assets/icons/cow.png';
import logoImg from '@/assets/logo.png';
import api from '@/utils/api/apiSicoga';
import NetworkUtils from '@/utils/Networkutils';

import styles from './styles';
const BG_IMAGE = require('@/assets/images/wallpaper_7.jpg');
import logoCFacialImg from '@/assets/icons/facialsmall.png';

const avatar_url =
  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';

// ############### internationalization #######################
// ############### internationalization #######################

// ####################################################
// ##################  DATABASE  ######################
import { openDatabase } from 'react-native-sqlite-storage';

import database from '@/utils/DatabaseModel';
var db = openDatabase({ name: 'sicogaCoibfe.db' });
var datosProtekC = []; // protek
var datosCoibfeAC = []; // coibfe
var datosProductorC = []; // productor
var datosPropriedadC = []; // propriedad
var datosFrigorificoC = []; // frigorifico
var datosEmpezarC = []; // empezar
var datosTecnicoC = []; // empezar
var datosConfigC = []; // empezar
var datosPropProdC = []; // propriedad_productor
var datosUserC = []; // user
var datosCoibfeToC = []; // user
var datosEmpezarToC = []; // user

var flagsCerrar = {
  empezarNotSinc: false,
  coibfeNotSinc: false,
  toCerrar: false,
  toCancelar: false,
  NoCerrar: false,
  returno: false,
  timer: true,
};

// ####################################################
// ##################  DATABASE  ######################
let axiosInUseC = false;
let onlyOneOKC = false;

const LOGIN_KEY = 'login';
const NAME_KEY = 'name';
const PASSWORD_KEY = 'password';

// ####################################################
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

export default function formEnd() {
  // -------------------------------------
  // -------------------------NAVIGATION--
  const navigation = useNavigation();
  const route = useRoute();
  const proteK = route.params.proteK;

  function navigateBack() {
    if (!loading && !axiosInUseC) {
      RNRestart.Restart(); // reboot
    }
  }
  // --------------------------REFS-

  const acreditationFRef = useRef('');
  const nameFRef = useRef('');
  const passwordFRef = useRef('');
  // ---------------------------STATES

  const [loading, setLoading] = useState(false);
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');

  const [sigor1, setSigor1] = useState('');
  const [sigor2, setSigor2] = useState('');
  const [sigor3, setSigor3] = useState('');
  const [sigor4, setSigor4] = useState('');
  const [acreditationF, setAcreditationF] = useState('');
  const [nameF, setNameF] = useState('');
  const [passwordF, setPasswordF] = useState('');
  const [access, setAccess] = useState(0);
  const [buttonEnableCerrar, setButtonEnableCerrar] = useState(true);
  const [buttonEnableCancelar, setButtonEnableCancelar] = useState(true);
  const [sincEmpezar, setSincEmpezar] = useState([]);
  const [sincCoibfe, setSincCoibfe] = useState([]);

  //---------------------------FORMS STATES ---------
  const [cancelaS, setcancelaS] = useState(false);

  const [vpa_nombreS, setvpa_nombreS] = useState('');
  const [vpa_IdS, setvpa_IdS] = useState('');

  //---------------------------GENERAL STATES ---------
  // ---------------------------------------FUNCTIONS-------

  const [server, setServer] = useState({});

  // ---------------------------------------FUNCTIONS-PROTEK--------
  // ---------------------------------------FUNCTIONS-PROTEK--------

  // --------------------------------------
  // -----------------------------------------------------------------------
  function tryParseInt(str, defaultValue) {
    return parseInt(str, 10) === str ? parseInt(str, 10) : defaultValue;
  }
  // -----------------------------------------------------------------------
  //-------------------------FACIAL FUNC------------------------
  //-------------------------FACIAL FUNC------------------------
  //-------------------------------------------------

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
      setMessage1(i18n.t('coibfe.net_fail'));
      setShowMessage(true);
    } else {
      returno = true;
    }
    return returno;
  }
  //-----------------------
  async function loadServidor() {
    if (await testNetServer()) {
      // if charging not continue
      // not reentry
      if (axiosInUseC) {
        return;
      }
      // not reentry
      axiosInUseC = true;
      try {
        const response = await api.get('server');
        if (response.status === 200) {
          setServer(response.data);
          axiosInUseC = false;
        }
        axiosInUseC = false;
      } catch (e) {
        // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
        console.log('server error', e);
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.server_fail') + ' 1');
        axiosInUseC = false;
      }
      //setIncidents(response.data);
      // sum 2 vectors actual and old
      //setServer(response.data);
      /*
    console.log('resposta ' + String(server.length));
    if (server.length) {
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_error'));
    }
    */
    }
    axiosInUseC = false;
  }
  // ------------------------------------
  async function finishTest() {
    setShowMessage(true);
    setMessage1(i18n.t('coibfe.waiting'));

    await loadLocalDataBase();
    setTimeout(() => {
      testEmpezarSincronized();
      testCoibfeSincronized();
      testStatus();
    }, 3000);
  }
  // ------------------------------------------------

  async function onSendF() {
    // Set all data TEST LOGIN

    if (await testNetServer()) {
      // dont inited
      await testEmpezarSincronized();
      await testCoibfeSincronized();

      if (passwordF !== '' && acreditationF !== '') {
        if (Env.DEBUG === true) {
          console.log(server);
          console.log(access, nameF, passwordF, acreditationF);
        }
        // EXECUTE FUNCTION
        clearForms();

        if (
          acreditationF === Env.ROOT_ACREDITACION &&
          passwordF === Env.ROOT_PASSWORD
        ) {
          setvpa_IdS(Env.ROOT_VPA_ID);
          setvpa_nombreS(Env.ROOT_VPA_NOMBRE);
          await testStatus();

          setShowForm1(false);
          setShowForm2(true);
          // THE LAST COMMAND
          setAccess(access + 1); //actualize screen
          setShowMessage(false);
          setMessage1(i18n.t('coibfe.'));
        }
        await testVpaLogin();
        clearForms();
      } else {
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.datos_error'));
      }
    } // test net
  }
  //----------------------------------------------
  async function testVpaLogin() {
    var result = false;
    //-------test local base have data to send
    // TODO: TEST LOCAL BASE IF VPA is OK or facial and save VPAids in base
    try {
      var vpa_id = null;
      var name = null;
      var password = null;
      let sizeArray = 0; // user [{xxx.userToken,user_name....}]
      if (Array.isArray(datosUserC) && datosUserC.length) {
        datosUserC.forEach((element) => {
          sizeArray += 1;
          vpa_id = element.user_vpa_id;
          password = element.user_password;
          name = element.user_register;
        });
      }

      if (sizeArray) {
        var passDCrip = await AES256.decrypt(password, server.machineKey);

        if (Env.DEBUG === true) {
          console.log('passUCrip', passDCrip);
          console.log('acreditationF', acreditationF);
        }

        if (acreditationF === vpa_id && passwordF === passDCrip) {
          setvpa_IdS(vpa_id);
          setvpa_nombreS(name);
          clearForms();

          await testStatus();
          setShowForm1(false);
          setShowForm2(true);
        } else {
          setShowMessage(true);
          setMessage1(i18n.t('coibfe.login_error'));
        }
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('autentica error', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.autentica_fail'));
      setLoading(false); // reentry
    }
    // if cierred ok return true
    return result;
  }
  //----------------------------------------------
  //----------------------------------------------
  async function testStatus() {
    if (Env.DEBUG === true) {
      console.log('init', flagsCerrar);
    }

    if (!flagsCerrar.NoCerrar) {
      if (flagsCerrar.empezarNotSinc && !flagsCerrar.coibfeNotSinc) {
        // not sinc to empezar and all coibfeis sinc CERRAR
        flagsCerrar.toCancelar = true; //erase all
        setButtonEnableCerrar(true);
        setButtonEnableCancelar(true);
      } else if (!flagsCerrar.empezarNotSinc && flagsCerrar.coibfeNotSinc) {
        // all empezado but coibfe not sinc
        setButtonEnableCerrar(true);
        setButtonEnableCancelar(false);
      } else if (!flagsCerrar.empezarNotSinc && flagsCerrar.coibfeNotSinc) {
        flagsCerrar.toCerrar = true; //restart
        setButtonEnableCerrar(false);
        setButtonEnableCancelar(false);
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.to_cerrar'));
      } else if (flagsCerrar.empezarNotSinc && flagsCerrar.coibfeNotSinc) {
        // not empezado not coibfe not sinc  ofline
        setButtonEnableCerrar(true);
        setButtonEnableCancelar(false);
      } else if (!flagsCerrar.empezarNotSinc && !flagsCerrar.coibfeNotSinc) {
        // empezar sinc coibfe sinc and have empezar nocerrar false
        flagsCerrar.toCerrar = true; //restart
        setButtonEnableCerrar(false);
        setButtonEnableCancelar(false);
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.to_cerrar'));
      }
    } else {
      console.log('aki', flagsCerrar);
      //no cerrar true NOTHING TO CERRAR
      setButtonEnableCerrar(false);
      setButtonEnableCancelar(false);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.nada_coibfe'));
    }
  }
  //----------------------------------------------
  //----------------------------------------------
  //----------------------------------------------

  async function callApi(endpoints, datosCoibfes) {
    const host = 'http://' + server.machineServerName + '/api/v0/sicoga';
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'
      baseURL: String('http://' + server.machineServerName + '/api/v0/sicoga'),
      timeout: 30000,
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
      // baseURL: POST 'http://209.208.97.67:3333/enviar/' store
      // RETURN DATOSAUTENTICARS
      const responsep = await apis.post(
        'enviar/',

        datosCoibfes,

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
        // setTempData(responsep.data);
        if (String(datosCoibfes.coibfeId) === String(responsep.data.coibfeId)) {
          // ############ TEST IF ODNT HAVE COIBFE INSERTED #######################
          // ############ TEST IF ODNT HAVE COIBFE INSERTED #######################
          //test if send coibfe

          // ############ TEST IF ODNT HAVE COIBFE INSERTED #######################
          // ############ TEST IF ODNT HAVE COIBFE INSERTED #######################

          const returno2 = await database.UpdateDBcoibfeIsSinc(datosCoibfes); // coibfe_issinc = true print = 3

          // set sinc = true in empezar

          // TODO: databank return
          // if(returno1 && returno2 && returno3) {
          if (true) {
            if (Env.DEBUG === true) {
              console.log('aki user', datosCoibfes);
            }

            var vpa_id = null;
            var token = null;
            if (Array.isArray(datosUserC) && datosUserC.length) {
              datosUserC.forEach((element) => {
                token = element.userToken;
                vpa_id = element.user_vpa_id;
              });
            }

            const datosUser = {
              user_vpa_id: String(vpa_id),
              userToken: String(token),
            };

            await callAPIuserTKupdate(datosUser);
            //######################### INC TOKEN USER

            setLoading(false); // reentry
          } else {
            setShowMessage(true);
            setMessage1(i18n.t('coibfe.error_db'));
          }
        }
      } else {
        setShowMessage(true);
        setMessage1(i18n.t('coibfe.error'));
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server error', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + 'send');
    }
    setLoading(false); // reentry
  }
  //-------------------------------------------------
  //----------------------------------------------
  async function callAPIuserTKupdate(datoss) {
    const host = 'http://' + server.machineServerName + '/api/v0/sicoga';
    const apis = axios.create({
      // baseURL: 'http://192.168.100.159:3333'
      // baseURL: 'http://localhost:3333'
      baseURL: String('http://' + server.machineServerName + '/api/v0/sicoga'),
      timeout: 30000,
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

    // ###################################################
    // #####################################################
    // #####################################################
    try {
      // http://209.208.97.67:3333/api/v0/sicoga/registrar/id/user/token
      const responsep = await apis.put(
        'registrar/id/user/token',
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

        if (String(datoss.user_vpa_id) === String(responsep.data.user_vpa_id)) {
          if (Env.DEBUG === true) {
            console.log('responsep -fim', responsep.data);
            console.log('datoss', datoss);
          }
          setLoading(false); // reentry
          setShowMessage(true);
          setMessage1(i18n.t('coibfe.sucess'));
          // set new = token quant coibfe emit in empezar
          await finishTest();

          // all ok
        } else {
          setLoading(false); // reentry
          setShowMessage(true);
          setMessage1(i18n.t('coibfe.error_api_tk'));
        }
      }
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('server error', e);
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.server_fail') + 'TK');
      setLoading(false); // reentry
    }

    // #####################################################
    setLoading(false); // reentry
  }
  //-------------------------------------------------
  //-------------------------------------------------
  //-------------------------------------------------
  //-------------------------------------------------
  //------------------------FORMS FUNC---------------
  //------------------------FORMS FUNC---------------

  //----------------------------------------------
  //----------------------------------------------
  function clearForms() {
    Vibration.vibrate();
    setAcreditationF('');
    setNameF('');
    setPasswordF('');
    passwordFRef.current?.clear();
    // nameFRef.current?.clear();
    acreditationFRef.current?.clear();
  }
  // --------------------------------------FORMS

  // ------------------------------------------------
  function sendForms(datoss) {
    // ============ DESCRIPTO APIKEYMOBILY
    // encryption
    if (!cancelaS) {
      const returno = testCierreSended();
      if (returno === true) {
        sendCoibfes(datosCoibfeAC);
      }
    } else {
      //cancela
      finishDB();
    }
    // finish message
  }
  //-------------------------------------------------
  async function finishDB() {
    // await database.dropDBempezar();
    await database.dropAllDBempezar();
    await database.dropAllDBproductor();
    await database.dropAllDBpropriedad();
    await database.dropAllDBpropriedad_productor();
    await database.dropAllDBcoibfe();
    await database.dropAllDBfrigorifico();

    flagsCerrar.empezarNotSinc = false;
    flagsCerrar.coibfeNotSinc = false;
    // clear auto login
    await restoreDefaults();
    RNRestart.Restart(); // reboot
  }
  //-------------------------------------------------
  // ------------------------------
  //-------------------------------------------------
  //-------------------------------------------------

  async function testEmpezarSincronized() {
    flagsCerrar.empezarNotSinc = false;
    var sigorCounter = 0;
    if (Array.isArray(datosEmpezarC) && datosEmpezarC.length) {
      datosEmpezarC.forEach((element) => {
        if (element.empezar_issinc !== 'true') {
          flagsCerrar.empezarNotSinc = true;
        }
        setSincEmpezar(...element.empezar_sigor);
        datosEmpezarToC.push(element.empezar_sigor);
        switch (sigorCounter) {
          case 0: // if (x === 'value1')
            setSigor1(String(element.empezar_sigor));
            break;
          case 1: // if (x === 'value2')
            setSigor2(String(element.empezar_sigor));
            break;
          case 2: // if (x === 'value2')
            setSigor3(String(element.empezar_sigor));
            break;
          case 3:
            setSigor4(String(element.empezar_sigor));
            break;
        }
        // }
        sigorCounter += 1;
      });
    }
    if (sigorCounter === 0) {
      flagsCerrar.NoCerrar = true;
    }
    // console.log('empezar_sigor', datosEmpezarC);
    // console.log('flagsCerrar', flagsCerrar);

    return flagsCerrar;
  }
  //-------------------------------------------------
  async function testCoibfeSincronized() {
    flagsCerrar.coibfeNotSinc = false;
    var sigorCounter = 0;
    if (Array.isArray(datosCoibfeAC) && datosCoibfeAC.length) {
      datosCoibfeAC.forEach((element) => {
        if (element.coibfe_issinc !== 'true') {
          setSincCoibfe(...element.coibfeId);
          datosCoibfeToC.push(element.coibfeId);
          flagsCerrar.coibfeNotSinc = true;
        }
        sigorCounter += 1;
      });
    }
    // console.log('datosCoibfeAC', datosCoibfeAC);
    // console.log('flagsCerrar', flagsCerrar);
    return flagsCerrar;
  }
  //-------------------------------------------------

  function testCierreSended() {
    var result = false;
    //-------test database have data to send
    // TODO: TEST LOCAL BASE NOTHAVE COIBFES TO SEND=OK  TRUE ENABLE TO EMPEZAR

    if (
      (sigor1 !== '' && sigor1 !== null) ||
      (sigor2 !== '' && sigor2 !== null) ||
      (sigor3 !== '' && sigor3 !== null) ||
      (sigor4 !== '' && sigor4 !== null)
    ) {
      result = true; // have sigor to cierre
    }
    if (result === false) {
      setShowMessage(true);
      setMessage1(i18n.t('coibfe.to_cerrar'));
    }
    // if cierred ok return true
    return result;
  }

  //-------------------------------------------------
  async function sendCoibfes(datoss) {
    // test if sended
    if (Array.isArray(datoss) && datoss.length) {
      // TODO: only send if not sinc CIERRE
      datoss.forEach(async (element) => {
        if (element.coibfe_issinc !== 'true') {
          await callApi('coibfe', element);
        }
      });

      var tested = true;
      datoss.forEach((element) => {
        if (element.coibfe_issinc !== 'true') {
          tested = false; // have elements to send
        }
      });

      if (tested) {
        finishDB();
      }
    }
    // tempData => sqlite
    // TODO: save local base sigors 1 a 4
    // TODO: test if have data showw sucess sigor 1 a 4
  }
  // -------------------------------------------------------
  function saveLogSdcard(datosCoibfes, motivo) {
    // TODO: save in sdcard backup and criptography
    // if motivo=='cancelado'
    // if motivo=='coibfe'
  }
  // ##################  DATABASE  ######################
  // ##################  DATABASE  ######################

  async function loadLocalDataBase() {
    datosEmpezarC = [];
    datosFrigorificoC = [];
    datosProductorC = [];
    datosPropriedadC = [];
    datosConfigC = [];
    datosProtekC = [];
    datosTecnicoC = [];
    datosCoibfeAC = [];
    datosPropProdC = [];
    datosUserC = [];

    try {
      datosUserC = await SelectDB('table_user');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_user', e);
    }
    try {
      datosEmpezarC = await SelectDB('table_empezar');
      //testArraySize(datosCmpezarC); //test if have data
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_empezar', e);
    }

    try {
      datosFrigorificoC = await SelectDB('table_frigorifico');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_frigorifico', e);
    }

    try {
      datosProductorC = await SelectDB('table_productor');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_productor', e);
    }

    try {
      datosPropriedadC = await SelectDB('table_propriedad');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_propriedad', e);
    }

    try {
      datosConfigC = await SelectDB('table_config');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_config', e);
    }

    try {
      datosProtekC = await SelectDB('table_protek');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_protek', e);
    }

    try {
      datosTecnicoC = await SelectDB('table_tecnico');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_tecnico', e);
    }

    try {
      datosCoibfeAC = await SelectDB('table_coibfe');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_coibfe', e);
    }

    try {
      datosPropProdC = await SelectDB('table_propriedad_productor');
    } catch (e) {
      // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
      console.log('table_propriedad_productor', e);
    }

    if (Env.DEBUG === true) {
      console.log('table_empezar', datosEmpezarC);
      console.log('table_frigorifico', datosFrigorificoC);
      console.log('table_productor', datosProductorC);
      console.log('table_propriedad', datosPropriedadC);
      console.log('table_config', datosConfigC);
      console.log('table_protek', datosProtekC);
      console.log('table_tecnico', datosTecnicoC);
      console.log('table_coibfe', datosCoibfeAC);
      console.log('table_propriedad_productor', datosPropProdC);
    }
  }
  //-------------------------------------------------
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
                datosUserC = [];
                break;
              case 'table_config':
                datosConfigC = [];
                break;
              case 'table_propriedad_productor':
                datosPropProdC = [];
                break;
              case 'table_empezar':
                datosEmpezarC = [];
                break;
              case 'table_propriedad':
                datosPropriedadC = [];
                break;
              case 'table_productor':
                datosProductorC = [];
                break;
              case 'table_frigorifico':
                datosFrigorificoC = [];
                break;
              case 'table_tecnico':
                datosTecnicoC = [];
                break;
              case 'table_coibfe':
                datosCoibfeAC = [];
                break;
              case 'table_protek':
                datosProtekC = [];
                break;
            }
            let i = 0;
            for (i = 0; i < results.rows.length; ++i) {
              switch (table_name) {
                case 'table_user':
                  datosUserC.push(results.rows.item(i));
                  break;
                case 'table_config':
                  datosConfigC.push(results.rows.item(i));
                  break;
                case 'table_propriedad_productor':
                  datosPropProdC.push(results.rows.item(i));
                  break;
                case 'table_empezar':
                  datosEmpezarC.push(results.rows.item(i));
                  break;
                case 'table_propriedad':
                  datosPropriedadC.push(results.rows.item(i));
                  break;
                case 'table_productor':
                  datosProductorC.push(results.rows.item(i));
                  break;
                case 'table_frigorifico':
                  datosFrigorificoC.push(results.rows.item(i));
                  break;
                case 'table_tecnico':
                  datosTecnicoC.push(results.rows.item(i));
                  break;
                case 'table_coibfe':
                  datosCoibfeAC.push(results.rows.item(i));
                  break;
                case 'table_protek':
                  datosProtekC.push(results.rows.item(i));
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

  // ##################################################
  // ################### ASYNC_STORAGE           ######
  // ##################################################
  // import AsyncStorage from '@react-native-community/async-storage';
  // const LOGIN_KEY = 'login';
  // const NAME_KEY = 'name';
  // const PASSWORD_KEY = 'password';

  const [logins, setLogins] = useState('');
  const [names, setNames] = useState('');
  const [passwords, setPasswords] = useState('');

  async function loadAsyncData() {
    try {
      var loginss = await AsyncStorage.getItem(LOGIN_KEY);

      if (loginss !== null) {
        setLogins({ login: JSON.parse(loginss) });
        if (String(loginss) !== '') {
          // setAcreditationF(String(loginss));
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      var namess = await AsyncStorage.getItem(NAME_KEY);

      if (namess !== null) {
        setNames({ name: JSON.parse(namess) });
        if (String(namess) !== '') {
          // setNameF(String(namess));
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      var passwordss = await AsyncStorage.getItem(PASSWORD_KEY);

      if (passwordss !== null) {
        setPasswords({ password: JSON.parse(passwordss) });
        if (String(passwordss) !== '') {
          // setPasswordF(String(passwordss));
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  // ---------------------------------
  async function storeLogin(keys, loginss) {
    try {
      await AsyncStorage.setItem(keys, JSON.stringify(loginss));
      setLogins({ loginss });
    } catch (e) {
      console.log(e);
    }
  }
  // ---------------------------------

  // ---------------------------------
  async function storeName(keys, namess) {
    try {
      await AsyncStorage.setItem(keys, JSON.stringify(namess));
      setNames({ namess });
    } catch (e) {
      console.log(e);
    }
  }
  // ---------------------------------

  // ---------------------------------
  async function storePassword(keys, passwordss) {
    try {
      await AsyncStorage.setItem(keys, JSON.stringify(passwordss));
      setPasswords({ passwordss });
    } catch (e) {
      console.log(e);
    }
  }
  // ---------------------------------

  function restoreDefaults() {
    storeLogin(LOGIN_KEY, '');
    storeName(NAME_KEY, '');
    storePassword(PASSWORD_KEY, '');
  }

  // ##################################################
  // ################### EXECUTE ON START SCREEN ######
  // ##################################################

  async function onlyOne() {
    if (!onlyOneOKC) {
      onlyOneOKC = true;
      BackHandler.addEventListener('hardwareBackPress', () => true);

      // ##################  DATABASE  ######################
      await database.openDB();
      // ##################  DATABASE  ######################
      await loadLocalDataBase();
      await loadServidor();

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

            <Text style={styles.title}>{i18n.t('coibfe.cerrar')}</Text>

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
                            editable={false}
                            style={styles.inputStyle}
                            keyboardType="number-pad"
                            onChangeText={handleChange('sigor1')}
                            onBlur={() => {
                              setFieldTouched('sigor1');
                            }}
                            placeholder={sigor1}
                          />
                        </View>
                        {touched.sigor1 && errors.sigor1 && (
                          <Text style={styles.textError}>{errors.sigor1}</Text>
                        )}
                        {/*{plusButton1 ? (*/}
                        <View style={styles.viewSignButton}>
                          <TextInput
                            value={values.sigor2}
                            editable={false}
                            keyboardType="number-pad"
                            style={styles.inputStyle}
                            onChangeText={handleChange('sigor2')}
                            onBlur={() => {
                              setFieldTouched('sigor2');
                            }}
                            placeholder={sigor2}
                          />
                        </View>
                        {/*) : null}*/}
                        {touched.sigor2 && errors.sigor2 && (
                          <Text style={styles.textError}>{errors.sigor2}</Text>
                        )}
                        {/*{plusButton2 ? (*/}
                        <View style={styles.viewSignButton}>
                          <TextInput
                            value={values.sigor3}
                            editable={false}
                            keyboardType="number-pad"
                            style={styles.inputStyle}
                            onChangeText={handleChange('sigor3')}
                            onBlur={() => {
                              setFieldTouched('sigor3');
                            }}
                            placeholder={sigor3}
                          />
                        </View>
                        {/*) : null}*/}
                        {touched.sigor3 && errors.sigor3 && (
                          <Text style={styles.textError}>{errors.sigor3}</Text>
                        )}
                        {/*{plusButton3 ? (*/}
                        <View style={styles.viewSignButton}>
                          <TextInput
                            value={values.sigor4}
                            editable={false}
                            style={styles.inputStyle}
                            onChangeText={handleChange('sigor4')}
                            onBlur={() => {
                              setFieldTouched('sigor4');
                            }}
                            placeholder={sigor4}
                          />
                        </View>
                        {/*) : null}*/}
                        {touched.sigor4 && errors.sigor4 && (
                          <Text style={styles.textError}>{errors.sigor4}</Text>
                        )}
                        {buttonEnableCerrar ? (
                          <View style={styles.viewButtonSubmitBlue}>
                            <AwesomeButton
                              style={styles.buttonAB}
                              progress
                              onPress={(next) => {
                                setTimeout(() => {
                                  next();
                                  setButtonEnableCerrar(false);
                                  handleSubmit();
                                }, 1000);
                              }}
                              type="primary"
                              backgroundColor={'#3740FE'}
                              borderRadius={20}
                              height={50}
                              width={300}
                            >
                              {i18n.t('coibfe.envie_coibfe')}
                            </AwesomeButton>
                          </View>
                        ) : null}
                        {/*
                        {buttonEnableCancelar ? (
                          <View style={styles.viewButtonSubmitBlue}>
                            <AwesomeButton
                              style={styles.buttonAB}
                              progress
                              onPress={(next) => {
                                setTimeout(() => {
                                  next();
                                  setButtonEnableCancelar(false);
                                  setcancelaS(true);
                                  handleSubmit();
                                }, 5000);
                              }}
                              type="primary"
                              backgroundColor={'#E02041'}
                              borderRadius={20}
                              height={50}
                              width={300}>
                              {i18n.t('coibfe.to_cancelar')}
                            </AwesomeButton>
                          </View>
                        ) : null}
                      */}
                      </View>
                    )}
                  </Formik>
                </View>
              ) : null}

              {/* FORMS */}

              {/* FORMS */}
            </ScrollView>
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
                      if (flagsCerrar.toCerrar) {
                        finishDB();
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
