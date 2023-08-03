/* eslint-disable react-native/no-inline-styles */
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/Core/Fundo.png');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

import { useGetCharactersQuery } from '@/common/generated/graphql';
import type { Item } from '@/type/Item';

export type Props = {
  datas: Item;
  navigatePage: any;
};

const Vacunacion: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const { data, loading } = useGetCharactersQuery();

  if (loading) {
    return (
      <View testID="progress" style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <KeyboardAvoidingView enabled>
            {/* HEADER */}
            <View style={styles.header} />
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('@/assets/images/Lazos/Logo1.png')}
                style={{
                  width: '40%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 5,
                  marginLeft: 30,
                  marginTop: -20,
                  marginBottom: -30,
                }}
              />
            </View>
            {/* HEADER */}
            {/* LOGIN */}
            <View style={styles.mainBody}>
              <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.SectionFrame}>
                  <View>
                    <Text style={styles.title}>Vacunación</Text>
                    {/* frame */}
                    {/* Tipo De */}
                    <View style={styles.SectionFrame2}>
                      <Text style={styles.titleConsulta}>
                        Consultar Caravana
                      </Text>
                      <View style={styles.SectionFrame3}>
                        <View style={styles.SectionStyle}>
                          <View style={styles.SectionStyleText}>
                            <TextInput
                              style={styles.inputStyle2}
                              onChangeText={() => {}}
                              placeholder={'Digite la caravana'} //dummy@abc.com
                              placeholderTextColor="rgba(52, 52, 52, 0.6)"
                              autoCapitalize="none"
                              keyboardType="email-address"
                              returnKeyType="next"
                              onSubmitEditing={() => {}}
                              blurOnSubmit={false}
                            />
                          </View>
                          <View style={styles.IconTipoDe} />
                        </View>
                        <View style={styles.IconSearch}>
                          <TouchableOpacity>
                            <Icon name="search" size={25} color="grey" />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View>
                        <Text style={styles.TextoTitulo}> Lote</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Digite Aquí'} //dummy@abc.com
                              placeholderTextColor="rgba(52, 52, 52, 0.6)"
                              autoCapitalize="none"
                              keyboardType="email-address"
                              returnKeyType="next"
                              onSubmitEditing={() => {}}
                              blurOnSubmit={false}
                            />
                          </View>
                          <View style={styles.IconColor} />
                        </View>
                      </View>

                      <View>
                        <Text style={styles.TextoTitulo}> Raza</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <Text style={styles.textInfo}> Dato animal 1</Text>
                          </View>
                          <View style={styles.IconColor} />
                        </View>
                      </View>

                      <View>
                        <Text style={styles.TextoTitulo}> Marca Fuego</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <Text style={styles.textInfo}> Dato animal 1</Text>
                          </View>
                          <View style={styles.IconColor} />
                        </View>
                      </View>

                      <View>
                        <Text style={styles.TextoTitulo}> Sexo del Animal</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <Text style={styles.textInfo}> Dato animal 1</Text>
                          </View>
                          <View style={styles.IconColor} />
                        </View>
                      </View>

                      <View>
                        <Text style={styles.TextoTitulo}>
                          Clasficación del Animal
                        </Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <Text style={styles.textInfo}> Dato animal 1</Text>
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
                    <Text style={styles.buttonTextStyle}>Confirmar</Text>
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

export default Vacunacion;
