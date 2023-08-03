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

import Loader from '@/components/loader';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/OziTV/FundoCriptoTV.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

import { Env } from '@env';

import { useGetCharactersQuery } from '@/common/generated/graphql';
import type { Item } from '@/type/Item';

let APPL = false;
let APPT = false;

if (Env.APPINIT === 'Lazos') {
  APPL = true;
}

if (Env.APPINIT === 'TVbox') {
  APPT = true;
}

export type Props = {
  datas: Item;
  navigatePage: any;
};

const RecuperaScreen: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const { data, loading } = useGetCharactersQuery();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <KeyboardAvoidingView enabled>
            {/* LOGIN */}
            <View style={styles.mainBody}>
              <Text style={styles.Recupera}>Recuperar Senha</Text>
              <ScrollView keyboardShouldPersistTaps="handled">
                <Loader visible={loading} />
                <View>
                  <View style={{ alignItems: 'center' }}>
                    {APPT ? (
                      <Image
                        source={require('@/assets/images/OziTV/Logo1.png')}
                        style={{
                          width: '80%',
                          height: 150,
                          resizeMode: 'contain',
                          margin: 10,
                        }}
                      />
                    ) : null}
                    {APPL ? (
                      <Image
                        source={require('@/assets/images/Lazos/Logo1.png')}
                        style={{
                          width: '80%',
                          height: 150,
                          resizeMode: 'contain',
                          margin: 10,
                        }}
                      />
                    ) : null}
                  </View>
                  {/* frame */}
                  <Text style={styles.Recupera2}>
                    Digite o email cadastrado para receber instruções
                  </Text>
                  <View style={styles.SectionFrame}>
                    <Text style={styles.Login}>Email Cadastrado </Text>
                    {/* USER */}
                    <View style={styles.SectionStyle}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleUsuario}
                          onChangeText={() => {}}
                          placeholder={'Digite seu email'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                    </View>
                    <Text style={styles.Senha}>Código Recebido </Text>
                    <View style={styles.SectionStyle}>
                      <View style={styles.SectionStyleText}>
                        <TextInput
                          style={styles.inputStyleContraseña}
                          onChangeText={() => {}}
                          placeholder={'Digite o código recebido'} //dummy@abc.com
                          placeholderTextColor="rgba(52, 52, 52, 0.6)"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          returnKeyType="next"
                          onSubmitEditing={() => {}}
                          blurOnSubmit={false}
                        />
                      </View>
                    </View>
                    {/* MOLDURA */}
                    <TouchableOpacity
                      style={styles.buttonStyleOlvide}
                      activeOpacity={0.5}
                      onPress={() => {}}
                    />
                  </View>

                  <TouchableOpacity
                    style={styles.botaoEnviar}
                    activeOpacity={0.5}
                    onPress={() => {}}
                  >
                    <Text style={styles.buttonTextStyle}>Enviar</Text>
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

export default RecuperaScreen;
