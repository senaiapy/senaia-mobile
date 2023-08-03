/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { memo } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/Core/Fundo.png');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}

// ############### internationalization #######################

const ConfigScreen: React.FC = () => {
  Orientation.lockToPortrait();

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <KeyboardAvoidingView enabled>
            {/* LOGIN */}
            <View style={styles.mainBody}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <View>
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      source={require('@/assets/images/Senaia/Logo1.png')}
                      style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'contain',
                        margin: 10,
                      }}
                    />
                  </View>
                  <View style={styles.grupoDeBotoes}>
                    <View style={styles.botaoConfig}>
                      <TouchableOpacity
                        style={styles.botaoEnviar}
                        activeOpacity={0.5}
                        onPress={() => {}}
                      >
                        <Text style={styles.buttonTextStyle}>
                          Configuraciones
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      style={styles.botaoEnviar}
                      activeOpacity={0.5}
                      onPress={() => {
                        navigation.navigate('GuiaSenaia');
                      }}
                    >
                      <Text style={styles.buttonTextStyle}>Crea Orden</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.botaoEnviar}
                      activeOpacity={0.5}
                      onPress={() => {}}
                    >
                      <Text style={styles.buttonTextStyle}>
                        Ayuda y Feadback
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.botaoEnviar}
                      activeOpacity={0.5}
                      onPress={() => {}}
                    >
                      <Text style={styles.buttonTextStyle}>Salir / Logout</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>

            {/* LOGIN */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

export default memo(ConfigScreen);
