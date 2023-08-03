/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { Env } from '@env';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNetInfo } from '@react-native-community/netinfo'; // import the hook
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';

import { signOut, useAuth, useRegis } from '@/core';
import { translate } from '@/core';
// ###############################   WDB  ################################
import type CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';
import type CoibfeFrigorificoModel from '@/database/model/CoibfeFrigorifico';
import type CoibfeProductorModel from '@/database/model/CoibfeProductor';
import type CoibfePropriedadModel from '@/database/model/CoibfePropriedad';
import Storage from '@/services/crudStorage';
import crudWDB from '@/services/crudWDB';
import { Button, ControlledInput, Screen } from '@/ui';
import Protek from '@/utils/Protek';

import styles from './styles';

type FormData = {
  email: string;
  password: string;
  result: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required(translate('login.EmailError'))
    .email(translate('login.EmailValida')),
  password: yup
    .string()
    .required(translate('setting.PasswordError'))
    .min(6, translate('setting.PasswordValida'))
    .max(6, translate('setting.PasswordValida')),
  result: yup.string(),
});
//---------------------------------------------------------------------------
export const SettingData = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const { signIn } = useAuth();
  const { regisIn } = useRegis();

  const netInfo = useNetInfo(); // declare the constant
  const [posid, setPosid] = useState('');
  const [result, setResult] = useState('');
  const [senha, setSenha] = useState('');

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  //---------------------------------------------------------------------------
  // delete storage
  const onSubmit1 = async () => {
    const returno = await Storage.clearAllData();
    setResult(String(returno));
    signOut();
  };
  //---------------------------------------------------------------------------
  // delete db
  async function onSubmit2() {
    const valueCoibfe = await crudWDB.deleteWDB<CoibfeCoibfeModel>(
      'coibfecoibfes'
    );
    const valueProductor = await crudWDB.deleteWDB<CoibfeProductorModel>(
      'coibfeproductors'
    );
    const valuePropriedad = await crudWDB.deleteWDB<CoibfePropriedadModel>(
      'coibfepropriedads'
    );
    const valueFrigorifico = await crudWDB.deleteWDB<CoibfeFrigorificoModel>(
      'coibfefrigorificos'
    );

    //const value = await crudWDB.findAllWDB('coibfecoibfes');
    //console.log(valueCoibfe);

    if (Env.DEBUG === 'true') {
      console.log('DELL DB');
    }
  }
  //---------------------------------------------------------------------------
  // server
  const onSubmit3 = async () => {
    // TODO: TAKE POS ID
    if (senha === '289828') {
      const ids: any = await Protek.getProtek(Env.KEY);
      const storagesCoibfe = await Storage.getDatas('@LOCALCOIBFE');
      const storagesRegister = await Storage.getDatas('@LOCALREGISTER');
      setPosid(String(ids.posId));
      setResult(String(ids.posId));
      if (Env.DEBUG === 'true') {
        console.log('ids', ids);
        console.log('storagesCoibfe', storagesCoibfe);
        console.log('storagesRegister', storagesRegister);
      }
    }
  };
  //---------------------------------------------------------------------------
  // tools
  const onSubmit4 = () => {
    if (senha === '289828') {
      navigation.navigate('DeviceKeyScreen');
    }
  };
  //---------------------------------------------------------------------------
  function onMessage(
    messages: string,
    descriptions: string = '',
    types: any = 'success'
  ) {
    showMessage({
      message: messages,
      description: descriptions,
      type: types, // danger // success
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
  //---------------------------------------------------------------------------
  function onMessageClick() {
    console.log('CLICK');
  }
  //---------------------------------------------------------------------------
  function Register() {
    navigation.navigate('Register');
  }
  //---------------------------------------------------------------------------
  function Password() {
    navigation.navigate('Password');
  }
  //---------------------------------------------------------------------------
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
  //---------------------------------------------------------------------------
  return (
    <Screen>
      <ScrollView>
        {/*                                                                   */}
        <View style={styles.avatarView}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(Env.SITE);
            }}
          >
            <Image
              source={require('@/assets/logos/logo-login.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
        {/*                                                                   */}
        {/*
        <Input
          control={control}
          name="password"
          iconName="person"
          label={translate('setting.Password')}
          placeholder={translate('setting.login')}
          secureTextEntry={true}
        />
        */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder={translate('setting.Password')}
            onChangeText={(value) => setSenha(value)}
            secureTextEntry={true}
            value={senha}
          />
        </View>

        <ControlledInput
          control={control}
          name="result"
          iconName="person"
          label={'Result'}
          placeholder={result}
          secureTextEntry={false}
        />
        {/*                                                                   */}
        <Button
          label={translate('setting.but5')}
          onPress={() => {
            onSubmit1();
          }}
          variant="secondary"
        />
        {/*                                                                   */}
        <Button
          label={translate('setting.but6')}
          onPress={() => {
            onSubmit2();
          }}
          variant="secondary"
        />
        {/*                                                                   */}
        <Button
          label={'PosId'}
          onPress={() => {
            onSubmit3();
          }}
          variant="secondary"
        />
        {/*                                                                   */}
        <Button
          label={'CRpK'}
          onPress={() => {
            onSubmit4();
          }}
          variant="secondary"
        />
        <Text style={styles.text}>
          {Env.VERSION} {Env.KERNEL}
        </Text>
        {/*                                                                   */}
      </ScrollView>
    </Screen>
  );
};
