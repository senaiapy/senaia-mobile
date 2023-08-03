/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { Env } from '@env';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo'; // import the hook
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';

import { useAuth } from '@/core';
import { translate } from '@/core';
import usuarioService from '@/services/usuario/UsuarioService';
import { Button, ControlledInput, Screen } from '@/ui';

import styles from './styles';

type FormData = {
  email: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required(translate('login.EmailError'))
    .email(translate('login.EmailValida')),
});

export const Password = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();
  // ---------------------------------------

  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isLoadingToken, setLoadingToken] = useState(true);
  // ---------------------------------------
  // ---------------------------------------
  // ---------------------------------------

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // ---------------------------------------

  const entrar = () => {
    let data = {
      username: email,
    };

    usuarioService
      .recoverPassword(data)
      .then((response: any) => {
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch((error: any) => {
        setLoading(false);
        //Alert.alert('Usuário No Existe');
        Messages();
      });
  };
  // ---------------------------------------

  const logarComToken = useCallback(
    (token: string | null) => {
      setLoadingToken(true);
      let data = {
        token: token,
      };

      usuarioService
        .loginComToken(data)
        .then((response: any) => {
          setLoadingToken(false);
          navigation.navigate('HomeScreen');
        })
        .catch((error: any) => {
          setLoadingToken(false);
        });
    },
    [navigation]
  );
  // ---------------------------------------

  const cadastrar = () => {
    navigation.navigate('Register');
  };
  // ---------------------------------------
  const onSubmit = (data: FormData) => {
    if (!netInfo.isConnected) {
      onMessage(translate('errors.internet'), ' !!!! ', 'danger');
    }
    if (Env.DEBUG === 'true') {
      console.log(data);
    }
    entrar();
    // signIn({access: 'access-token', refresh: 'refresh-token'});
  };
  // ---------------------------------------

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
  // ---------------------------------------

  function onMessageClick() {
    console.log('CLICK');
  }

  // ---------------------------------------
  function Register() {
    navigation.navigate('Register');
  }
  // ---------------------------------------

  function Password() {
    navigation.navigate('Password');
  }
  // ---------------------------------------

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
  // ---------------------------------------

  useEffect(() => {
    AsyncStorage.getItem('TOKEN').then((token) => {
      logarComToken(token);
    });
  }, [logarComToken]);
  // ---------------------------------------

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
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <ControlledInput
            control={control}
            name="email"
            iconName="mail"
            label={translate('password.Email')}
            placeholder={translate('password.Email')}
            keyboardType="email-address"
            secureTextEntry={false}
          />
          {/*                                                                   */}
          {/*                                                                   */}
          <Button
            label={translate('login.Login')}
            onPress={handleSubmit(onSubmit)}
            variant="secondary"
          />
        </View>
        {/*                                                                   */}

        <TouchableOpacity onPress={Messages}>
          <View style={styles.iconHelp}>
            <Ionicons
              style={{ marginRight: 10, marginTop: 20 }}
              name="chatbox"
              color="#25d366"
              size={30}
            />
            <Text style={styles.text}>{translate('general.Help')}</Text>
          </View>
        </TouchableOpacity>
        {/*                                                                   */}
      </ScrollView>
    </Screen>
  );
};
