/* eslint-disable max-lines-per-function */
/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React, { memo } from 'react';
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

import BG_IMAGE from '@/assets/images/Core/Fundo.png';

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import styles from './styles';

// ############### internationalization #######################

const AdminScreen: React.FC = () => {
  Orientation.lockToPortrait();

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
                    <Text style={styles.title}>Admin</Text>
                    {/* frame */}
                    {/* Tipo De */}
                    <View style={styles.SectionFrame2}>
                      <Text style={styles.titleConsulta}>Consultar Orden</Text>
                      <View style={styles.SectionFrame3}>
                        <View style={styles.SectionStyle}>
                          <View style={styles.SectionStyleText}>
                            <TextInput
                              style={styles.inputStyle2}
                              onChangeText={() => {}}
                              placeholder={'N.Ordem'} //dummy@abc.com
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
                        <Text style={styles.TextoTitulo}> Orden</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Num. Ordem'} //dummy@abc.com
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
                      {/* Fim Input */}

                      <View>
                        <Text style={styles.TextoTitulo}> Guias</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Num. Guias'} //dummy@abc.com
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
                      {/* Fim Input */}

                      <View>
                        <Text style={styles.TextoTitulo}> Contrato</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Num. Contrato'} //dummy@abc.com
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
                      {/* Fim Input */}

                      <View>
                        <Text style={styles.TextoTitulo}> Fecha Entrada</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Entrada'} //dummy@abc.com
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
                      {/* Fim Input */}

                      <View>
                        <Text style={styles.TextoTitulo}> Cantidad</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Cantidad'} //dummy@abc.com
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
                      {/* Fim Input */}
                      <View>
                        <Text style={styles.TextoTitulo}> Origem</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Origem'} //dummy@abc.com
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
                      {/* Fim Input */}
                      <View>
                        <Text style={styles.TextoTitulo}> Categoria</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Categoria'} //dummy@abc.com
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
                      {/* Fim Input */}
                      <View>
                        <Text style={styles.TextoTitulo}> Corral</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Corral'} //dummy@abc.com
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
                      {/* Fim Input */}
                      <View>
                        <Text style={styles.TextoTitulo}> Modalidad</Text>
                      </View>
                      <View style={styles.SectionFrame4}>
                        <View style={styles.SectionStyle2}>
                          <View style={styles.SectionStyleText2} />
                          <View style={styles.SectionStyleText2}>
                            <TextInput
                              style={styles.inputStyle}
                              onChangeText={() => {}}
                              placeholder={'Modalidad'} //dummy@abc.com
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
                      {/* Fim Input */}
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
export default memo(AdminScreen);
