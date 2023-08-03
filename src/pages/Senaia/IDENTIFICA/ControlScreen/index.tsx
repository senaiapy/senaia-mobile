/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################

import { Env } from '@env';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { memo, useEffect, useState } from 'react';
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
import { showMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import parser from 'iptv-playlist-parser';
import NHCSafeAreaView from '@/components/NHCSafeAreaView';
//  import { Character, useGetCharactersQuery } from '@/common/generated/graphql';
//  import CharacterCard from '@/common/components/CharacterCard';
import type { Item } from '@/type/Item';

/*
import {
  Container,
  Title,
  Rate,
  ActionContainer,
  ActionContainer2,
  ActionContainer3,
  ActionContainer4,
  DetailButton,
  Logo,
  LogoView,
  MenuButton,
  TextMenu,
  ImageMenu,
  TextView,
  InputUser,
  ContainerSearch,
  TitleCategory,
  CriptoView,
  Avatar,
  Loading,
} from './styles';
*/
import styles from './styles';

const BG_IMAGE = require('@/assets/images/Core/Fundo.png');
const SCREEN_WIDTH = Dimensions.get('window').width;

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import Loader from '@/components/loader';
import { translate } from '@/core';

// ############### internationalization #######################

type Props = {
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
const ControlScreen: React.FC = () => {
  // const { data, loading } = useGetCharactersQuery();
  if (APPLAND) {
    Orientation.lockToLandscape();
  } else {
    Orientation.lockToPortrait();
  }
  //----------------------------------------------

  const netInfo = useNetInfo();
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const route = useRoute();

  //----------------------------------------------
  const [isLoadingS, setLoadingS] = useState(false);

  // ----------------------------------------------

  // ----------------------------------------------

  function handleBack() {
    navigation.goBack();
  }

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
  // ----------------------------------------------

  function showSimpleMessage(
    messagem: string,
    description: string,
    types: string = 'default',
    props = {}
  ) {
    const message = {
      message: messagem,
      description: description,
      type: types,
      ...props,
    };
    // @ts-ignore
    showMessage(message);
  }
  // ----------------------------------------------
  useEffect(() => {
    showSimpleMessage('Usuario No Habilitado', 'SENAIA', 'success', {
      hideStatusBar: true,
    });
  }, []);

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
                  <View>
                    <View style={{ alignItems: 'center' }} />
                    {/* Botão Menu */}
                    <View style={styles.corpo}>
                      <View style={styles.inventarioButton}>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Liquidacion', '');
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
                              source={require('@/assets/images/Core/Inventario.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Inventario')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Animal', '');
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
                              source={require('@/assets/images/Core/Brinco.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Animal')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.inventarioButton}>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Entrada', '');
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
                              source={require('@/assets/images/Core/EntradaSaida.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Entrada')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Salida', '');
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
                              source={require('@/assets/images/Core/EntradaSaida.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Salida')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.inventarioButton}>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Peso', '');
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
                              source={require('@/assets/images/Core/Balança.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Pesage')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Vacuna', '');
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
                              source={require('@/assets/images/Core/Seringa.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Vacuna')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.inventarioButton}>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Identifica', '');
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
                              source={require('@/assets/images/user-icon.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Identifica')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.groupButton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigateToPages('Guia', '');
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
                              source={require('@/assets/images/Core/Chat.png')}
                              style={{
                                width: '50%',
                                height: 50,
                                resizeMode: 'contain',
                                margin: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: 'white',
                              }}
                            >
                              {translate('control.Guia')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      {/*last button */}
                      {/*                                                                   */}
                      <View style={styles.centerView}>
                        <TouchableOpacity onPress={Messages}>
                          <View style={styles.iconHelp}>
                            <Ionicons
                              style={{ marginRight: 10, marginTop: 20 }}
                              name="chatbox"
                              color="#25d366"
                              size={30}
                            />
                            <Text style={styles.text}>
                              {translate('general.Help')}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      {/*                                                                   */}
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
export default memo(ControlScreen);
