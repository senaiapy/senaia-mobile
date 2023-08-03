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
import React, { memo, useState } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/Ionicons';

import Loader from '@/components/loader';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/Core/Fundo.png');

//  import { Character, useGetCharactersQuery } from '@/common/generated/graphql';
//  import CharacterCard from '@/common/components/CharacterCard';

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}

// ############### internationalization #######################

const PrinterScreen: React.FC = () => {
  Orientation.lockToPortrait();

  // const { data, loading } = useGetCharactersQuery();

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  //----------------------------------------------
  const [isLoadingS, setLoadingS] = useState(false);

  // ----------------------------------------------
  // ----------------------------------------------

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <KeyboardAvoidingView enabled>
            {/* HEADER */}
            <View style={styles.header} />
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('@/assets/images/Senaia/Logo1.png')}
                style={{
                  width: '70%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 5,
                  marginLeft: 30,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />
            </View>
            {/* HEADER */}
            {/* LOGIN */}
            <View style={styles.mainBody}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <Loader visible={isLoadingS} />
                <View style={styles.SectionFrame}>
                  <View>
                    <Text style={styles.title}>Impresora</Text>
                    {/* frame */}
                    {/* Tipo De */}
                    <View style={styles.SectionFrame2}>
                      <View style={styles.SectionFrame3}>
                        <View style={styles.SectionStyle}>
                          <View style={styles.SectionStyleText}>
                            <TextInput
                              style={styles.inputStyle2}
                              onChangeText={() => {}}
                              placeholder={'Seleccione Impresora'} //dummy@abc.com
                              placeholderTextColor="rgba(52, 52, 52, 0.6)"
                              autoCapitalize="none"
                              keyboardType="number-pad"
                              returnKeyType="next"
                              onSubmitEditing={() => {}}
                              blurOnSubmit={false}
                            />
                          </View>
                          <View style={styles.IconTipoDe} />
                        </View>
                        <View style={styles.IconPlus}>
                          <TouchableOpacity>
                            <Icon name="search" size={25} color="grey" />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View>
                        <Text style={styles.datoAnimal}> ONLINE</Text>
                      </View>

                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Digitar config'} //dummy@abc.com
                              placeholderTextColor="rgba(52, 52, 52, 0.6)"
                              autoCapitalize="none"
                              keyboardType="number-pad"
                              returnKeyType="next"
                              onSubmitEditing={() => {}}
                              blurOnSubmit={false}
                            />
                          </View>
                          <View style={styles.IconColor} />
                        </View>
                      </View>
                    </View>
                    <View />
                  </View>
                  {/* MOLDURA */}

                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => {}}
                  >
                    <Text style={styles.buttonTextStyle}>IMPRIMIR</Text>
                  </TouchableOpacity>
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
export default memo(PrinterScreen);
