/* eslint-disable max-lines-per-function */
/* eslint-disable max-params */
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
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';

import Loader from '@/components/loader';
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
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
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
const MenuCoibfeScreen: React.FC = () => {
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
    if (page === 'ModelMessage') {
    } else {
      navigation.navigate(page, { dato });
    }
    // navigation.goBack();
  }
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
    showSimpleMessage('COIBFE', 'SENAIA', 'success', {
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
                  <View
                    style={{
                      alignContent: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View style={{ alignItems: 'center' }} />
                    {/* Botão Menu */}
                    <View style={styles.corpo}>
                      <View style={styles.groupButton}>
                        <TouchableOpacity
                          onPress={() => {
                            navigateToPages('Coibfe', '');
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
                            {translate('coibfe.menuembarque')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.groupButton}>
                        <TouchableOpacity
                          onPress={() => {
                            navigateToPages('Inventario', '');
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
                            source={require('@/assets/images/Core/Inventario.png')}
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
                            {translate('coibfe.menurelatorio')}
                          </Text>
                        </TouchableOpacity>
                      </View>

                      {/*last button */}
                    </View>
                  </View>
                </ScrollView>
              </View>
              {/* LOGIN */}
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
        <FlashMessage />
      </NHCSafeAreaView>
    </>
  );
};
export default memo(MenuCoibfeScreen);
