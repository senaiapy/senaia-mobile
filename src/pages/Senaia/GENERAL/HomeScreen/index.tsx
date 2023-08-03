/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################

// import {useNetInfo} from '@react-native-community/netinfo';
// import NetInfo from '@react-native-community/netinfo';
import { Env } from '@env';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import parser from 'iptv-playlist-parser';
import NHCSafeAreaView from '@/components/NHCSafeAreaView';
//  import { Character, useGetCharactersQuery } from '@/common/generated/graphql';
//  import CharacterCard from '@/common/components/CharacterCard';
import type { Item } from '@/type/Item';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/Core/Fundo.png');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

// ############### internationalization #######################
import 'react-native-url-polyfill/auto';

import { showMessage } from 'react-native-flash-message';

import Loader from '@/components/loader';
import { translate } from '@/core';
import type CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';
import { createCoibfeCoibfesApi } from '@/services/coibfeSync/apis';
import Storage from '@/services/crudStorage';
// ###############################   WDB  ################################
import crudWDB from '@/services/crudWDB';
import usuarioService from '@/services/usuario/UsuarioService';
import Functions from '@/utils/Functions';
// ############### internationalization #######################
let onlyOne = false;
let PRINTER_COUNTER: number = 0;
let storageCoibfe: any;
let storageRegister: any;
let codigov: any = null; // verification code control base
let user_status = 'inactive';

export type Props = {
  datas: Item;
  navigatePage: any;
};

let APPLAND = false;

if (Env.POSITION === 'landscape') {
  Orientation.lockToLandscape();
  APPLAND = true;
}

// ----------------------------------------------
// ----------------------------------------------
const HomeScreen: React.FC<Props> = () => {
  // const { data, loading } = useGetCharactersQuery();
  if (APPLAND) {
    Orientation.lockToLandscape();
  } else {
    Orientation.lockToPortrait();
  }
  //----------------------------------------------

  // const netInfo = useNetInfo();
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const route = useRoute();

  // ###############################   VARIABLES  ############################
  let COIBFE_DATA = null;
  //----------------------------------------------
  const [isLoadingS, setIsLoadingS] = useState(false);
  const [netW, setNetW] = useState(false);
  const [connection, setConnection] = useState();
  // ----------------------------------------------
  const testNet = async () => {
    // if (netInfo.isConnected) {
    //   setNetW(false);
    // } else {
    //   setNetW(true);
    // }
  };
  // ----------------------------------------------
  function handleBack() {
    navigation.goBack();
  }
  // ----------------------------------------------
  function navigateToPages(page: string, dato: any | null) {
    // console.log(film.id);
    navigation.navigate(page, { dato });
    // navigation.goBack();
  }
  // ----------------------------------------------
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
    console.log('CLICK');
  }
  // ----------------------------------------------
  // ----------------------------------------------

  // ######################## STORAGE #######################################
  // ------------------------------------------------------------------------
  const storageUpdatePrinter = async (key: string, values: number) => {
    const valor = String(values);
    const returno = await Storage.updatePrinter(key, valor);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
  };
  // ------------------------------------------------------------------------
  // ------------------------------------------------------------------------
  const storageUpdate = async (key: string, objKey: string, values: any) => {
    const returno = await Storage.updateDatas(key, objKey, values);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  //-------------------------------------------------------------------------
  const storageSave = async (key: string, value: any) => {
    const returno = await Storage.setDatas(key, value);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  //-------------------------------------------------------------------------
  const storageClear = async (key: string) => {
    const returno = await Storage.removeDatas(key);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  // -------------------------------------------------------------------------
  const storageGet = async (key: string) => {
    const storagess = await Storage.getDatas(key);
    //console.log(storages.coibfe_print);
    if (Env.DEBUG === 'true') {
      // console.log(storagess);
    }
    return storagess;
  };
  // --------------------------------------------------------------------------
  // ######################## STORAGE #########################################

  // ######################## API #########################################
  const status = async (vpa: string) => {
    usuarioService
      .status(vpa)
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
          // signalize wdb  ITS SEND OK
          const storageReg = await Storage.getDatas('@LOCALREGISTER');
          // TEST TO UPDATE COIBFE ID
          if (
            storageReg?.status !== 'active' ||
            storageReg.locked !== 'unlocked'
          ) {
            await storageUpdate(
              '@LOCALREGISTER',
              'coibfeid',
              String(responses?.user_token)
            );
          } else if (
            storageReg?.status === 'active' ||
            storageReg.locked === 'unlocked'
          ) {
            user_status = 'active';
          }

          await storageUpdate(
            '@LOCALREGISTER',
            'status',
            String(responses?.user_status)
          );

          await storageUpdate(
            '@LOCALREGISTER',
            'locked',
            String(responses?.user_locked)
          );

          await storageUpdate(
            '@LOCALREGISTER',
            'usertype',
            String(responses?.user_system_type)
          );

          // console.log('SYNC_USER');
          return responses;
        }
      })
      .catch((e: any) => {
        // console.log('RESPONSEe1', e);
      });
  };
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
          //  console.log('RESPONSE2', responses);
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

      if (Env.DEBUG === 'true') {
        // console.log('vpas', vpas);
        // console.log('datas', datas);
        // console.log('storageReg', storageReg);
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
  async function SyncUser(storage: any) {
    setIsLoadingS(true);
    let saves = null;

    try {
      const storageReg = await Storage.getDatas('@LOCALREGISTER');
      // send data to server COibfe
      const datas = String(storageReg?.vpa);

      const userStatus: any = await status(datas);

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
  // ------------------------------------------------
  // ------------------------------------------------
  async function SyncCoibfe(coibfeV: any) {
    setIsLoadingS(true);
    let saves = null;
    let sendCoibfe = false;
    let sendUserCoibfeId = false;
    try {
      const storageReg = await Storage.getDatas('@LOCALREGISTER');
      // send data to server COibfe
      const datas = {
        cpf: storageReg?.ids,
        user_token: storageReg?.coibfeId,
      };

      // const sendUserCoibfesid = await updateUserCoibfeIdApi(datas);
      // console.log('SYNC_COIBFEvalue', coibfeV);

      // signalize wdb  ITS SEND OK
      if (
        storageReg?.status === 'active' &&
        storageReg?.locked === 'unlocked'
      ) {
        // SEND TO SERVER COIBFE
        const sendCoibfes = await createCoibfeCoibfesApi(coibfeV);
        console.log('SYNC_COIBFEreturn', sendCoibfes);
        // send data to local DB
        if (sendCoibfes?.coibfe_issinc === 'false') {
          console.log('SYNC_COIBFEsave');
          saves = await crudWDB.syncRegisterWDB(
            'coibfecoibfes',
            'coibfeid',
            coibfeV.coibfeid
          );
        }
        // console.log('SYNC_COIBFE');
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
  // ------------------------------------------------
  // ######################## API #########################################

  const loadDB = useCallback(async () => {
    let returnedTarget: any = null;
    let returno: any;
    //console.log('INIT_LOAD');
    //if (connection) {
    //console.log('HAVE_CONNECTION');
    // const result = await storageUpdate('@LOCALCOIBFE', 'coibfe_print', '0');
    let coibfes = await crudWDB.findAllWDB<CoibfeCoibfeModel>('coibfecoibfes');
    //coibfe_issinc==false;
    if (Array.isArray(coibfes) && coibfes.length) {
      // console.log('HAVE_COIBFE_ARRAY');
      coibfes.forEach(async (element) => {
        if (element.coibfeid !== '' && element.coibfe_issinc === 'false') {
          //Object.assign(returnedTarget, element);
          returnedTarget = {
            coibfeid: element.coibfeid,
            coibfekey: element.coibfekey,
            coibfetoken: element.coibfetoken,
            coibfecodigov: element.coibfecodigov,
            coibfedestino: element.coibfedestino,
            coibfefinalidad: element.coibfefinalidad,
            coibfetransporte: element.coibfetransporte,
            coibfeaninovillos: element.coibfeaninovillos,
            coibfeanitoros: element.coibfeanitoros,
            coibfeanivacas: element.coibfeanivacas,
            coibfeanivaquillas: element.coibfeanivaquillas,
            coibfeaniotros: element.coibfeaniotros,
            coibfeanitotal: element.coibfeanitotal,
            coibfeanihilton: element.coibfeanihilton,
            coibfetecnico_vpa_id: element.coibfetecnico_vpa_id,
            coibfetecniconame: element.coibfetecniconame,
            coibfefrigorificoname: element.coibfefrigorificoname,
            coibfefrigorifico_id: element.coibfefrigorifico_id,
            coibfeproductorname: element.coibfeproductorname,
            coibfeproductor_id: element.coibfeproductor_id,
            coibfeproductorsitrap: element.coibfeproductorsitrap,
            coibfepropriedadname: element.coibfepropriedadname,
            coibfepropriedad_id: element.coibfepropriedad_id,
            coibfepropriedadsigor: element.coibfepropriedadsigor,
            coibfepropriedadsitrap: element.coibfepropriedadsitrap,
            coibfepropriedaddepartamento: element.coibfepropriedaddepartamento,
            coibfepropriedaddistrito: element.coibfepropriedaddistrito,
            coibfepropriedad_productor_id:
              element.coibfepropriedad_productor_id,
            coibfeprecinto1: element.coibfeprecinto1,
            coibfeprecinto2: element.coibfeprecinto2,
            coibfeprecinto3: element.coibfeprecinto3,
            coibfepos_id: element.coibfepos_id,
            coibfeposlatitud: element.coibfeposlatitud,
            coibfeposlongitud: element.coibfeposlongitud,
            coibfeposdate: element.coibfeposdate,
            coibfeposapikeymobile: element.coibfeposapikeymobile,
            coibfeobs: element.coibfeobs,
            coibfedocnroprop: element.coibfedocnroprop,
            coibfedocdigprop: element.coibfedocdigprop,
            coibfedocorigabrev: element.coibfedocorigabrev,
            coibfedoctipoabrev: element.coibfedoctipoabrev,
            coibfeerrocode: element.coibfeerrocode,
            coibfeerromessage: element.coibfeerromessage,
            coibfeanimales: element.coibfeanimales,
            coibfe_issinc: element.coibfe_issinc,
          };
        }

        if (Functions.isObject(returnedTarget)) {
          // console.log('COIBFE_ARRAY', returnedTarget);
          returno = await SyncCoibfe(returnedTarget);
          //console.log('SERVERRESPONSE', returno);
        }
      });
    }

    if (Env.DEBUG === 'true') {
      // console.log('returnedTarget', returnedTarget);
      // console.log('returno', returno);
    }
    // }
    return returno;
  }, []);
  // -------------------------------------------------
  const init = useCallback(async () => {
    let dbs = null;
    //setIsLoadingS(true);
    if (!onlyOne) {
      onlyOne = true;
      storageRegister = await Storage.getDatas('@LOCALREGISTER');
      if (Env.DEBUG === 'true') {
        // console.log('STORAGE', storageRegister);
      }
      if (Functions.isObject(storageCoibfe)) {
        const value = storageCoibfe?.coibfe_print;
        PRINTER_COUNTER = parseInt(value, 10);
        if (PRINTER_COUNTER > 0) {
          showSimpleMessage(
            translate('general.Coibfe'),
            translate('general.toprint'),
            'danger'
          );
        }
      }

      storageCoibfe = await Storage.getDatas('@LOCALCOIBFE');
      if (Functions.isObject(storageCoibfe)) {
        dbs = await loadDB();
      }
    }

    if (Env.DEBUG === 'true') {
      // console.log('HAVE DATA', PRINTER_COUNTER);
      // console.log('STORAGECOIBFE', storageCoibfe);
      // console.log('STORAGEREGISTER', storageRegister);
      // console.log('DBS', dbs);
      // console.log('CONNECTION', connection);
    }

    const returnoUser = await SyncUser(storageRegister);

    const userStatus = await Storage.getOneDatas('@LOCALREGISTER', 'status');
    const userLocked = await Storage.getOneDatas('@LOCALREGISTER', 'locked');

    if (Env.DEBUG === 'true') {
      console.log('PRINTER_COUNTER', PRINTER_COUNTER);
      console.log('userStatus', userStatus);
      console.log('userLocked', userLocked);
    }

    // SYNC TOKEN IF NOT HAVE DOC TO PRINT AND USER ACTIVE AND UNLOCKED
    if (
      PRINTER_COUNTER === 0 &&
      userLocked === 'unlocked' &&
      userStatus === 'active'
    ) {
      const returnoToken = await SyncToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ----------------------------------------------
  // ----------------------------------------------
  useEffect(() => {
    /*
    (async () => {
      console.log('coibfes', coibfes);
      console.log('updates', updates);
    })();
    // */
    init();
  }, [connection, init]);
  // ----------------------------------------------

  return (
    <>
      <NHCSafeAreaView>
        <View style={styles.container}>
          <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
            <KeyboardAvoidingView enabled>
              {/* Registro */}
              <View style={styles.mainBody}>
                <Image
                  source={require('@/assets/images/Senaia/Logo1.png')}
                  style={{
                    width: '80%',
                    height: SCREEN_WIDTH * 0.18,
                    resizeMode: 'contain',
                    margin: 5,
                    alignSelf: 'center',
                  }}
                />
                <ScrollView keyboardShouldPersistTaps="handled">
                  <Loader visible={isLoadingS} />
                  <Loader visible={isLoadingS} />
                  <View>
                    <View />
                    {/* Botão Menu */}
                    <View style={styles.corpo}>
                      {/* Coibfe Menu */}
                      <View style={styles.groupButton}>
                        <TouchableOpacity
                          onPress={() => {
                            navigateToPages('MenuCoibfe', '');
                          }}
                          style={{
                            backgroundColor: '#474887',
                            width: '80%',
                            alignItems: 'center',
                            padding: 5,
                            borderRadius: 10,
                            marginTop: 20,
                            margin: 5,
                          }}
                        >
                          <Image
                            source={require('@/assets/images/Core/print.png')}
                            style={{
                              width: '50%',
                              height: 70,
                              resizeMode: 'contain',
                              margin: 10,
                              alignSelf: 'center',
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: 'white',
                            }}
                          >
                            {translate('home.COIBFE')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      {/* Identifica Menu */}
                      <View style={styles.groupButton}>
                        <TouchableOpacity
                          onPress={() => {
                            navigateToPages('Control', '');
                          }}
                          style={{
                            backgroundColor: '#474887',
                            width: '80%',
                            alignItems: 'center',
                            padding: 5,
                            borderRadius: 10,
                            margin: 5,
                          }}
                        >
                          <Image
                            source={require('@/assets/images/Core/Brinco.png')}
                            style={{
                              width: '50%',
                              height: 70,
                              resizeMode: 'contain',
                              margin: 10,
                              alignSelf: 'center',
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: 'white',
                            }}
                          >
                            {translate('home.Identifica')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      {/* Servicios Menu */}
                      <View style={styles.groupButton}>
                        <TouchableOpacity
                          onPress={() => {
                            navigateToPages('Services', '');
                          }}
                          style={{
                            backgroundColor: '#474887',
                            width: '80%',
                            alignItems: 'center',
                            padding: 5,
                            borderRadius: 10,
                            margin: 5,
                          }}
                        >
                          <Image
                            source={require('@/assets/images/Core/servicios.png')}
                            style={{
                              width: '50%',
                              height: 60,
                              resizeMode: 'contain',
                              margin: 10,
                              alignSelf: 'center',
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: 'white',
                            }}
                          >
                            {translate('home.Servicios')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      {/*                                                                   */}
                      <TouchableOpacity onPress={Messages}>
                        <View style={styles.iconHelp}>
                          <Ionicons
                            style={{ marginRight: 10 }}
                            name="chatbox"
                            color="#25d366"
                            size={30}
                          />
                          <Text style={styles.text}>
                            {translate('general.Help')}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      {/*
                      {/*
                      <View style={styles.groupButton}>
                        <TouchableOpacity
                          onPress={() => {
                            navigateToPages('Chat', '');
                          }}
                          style={{
                            backgroundColor: '#474887',
                            width: width - 250,
                            alignItems: 'center',
                            padding: 5,
                            borderRadius: 10,
                            marginBottom: 30,
                            marginTop: 20,
                            margin: 50,
                          }}
                        >
                          <Image
                            source={require('@/assets/images/Core/Chat.png')}
                            style={{
                              width: '50%',
                              height: 50,
                              margin: 10,
                              resizeMode: 'contain',
                              alignSelf: 'center',
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: 'white',
                            }}
                          >
                            Chat
                          </Text>
                        </TouchableOpacity>
                      </View>
                       */}
                      {/*last button */}
                    </View>
                  </View>
                </ScrollView>
              </View>
              {/* LOGIN */}
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </NHCSafeAreaView>
    </>
  );
};
export default memo(HomeScreen);
