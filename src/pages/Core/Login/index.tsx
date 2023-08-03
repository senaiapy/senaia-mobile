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
//import {useNetInfo} from '@react-native-community/netinfo'; // import the hook
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
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

import Loader from '@/components/loader';
import { useAuth } from '@/core';
import { translate } from '@/core';
import Storage from '@/services/crudStorage';
import usuarioService from '@/services/usuario/UsuarioService';
import { Button, ControlledInput, Screen } from '@/ui';

import styles from './styles';
import type { IStorageRegister } from './types';

type FormData = {
  vpa: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required(translate('login.EmailError'))
    .email(translate('login.EmailValida')),
  vpa: yup
    .string()
    .required(translate('login.PasswordError'))
    .min(1, translate('login.PasswordValida'))
    .max(4, translate('login.PasswordValida')),
  password: yup
    .string()
    .required(translate('login.PasswordError'))
    .min(4, translate('login.PasswordValida'))
    .max(9, translate('login.PasswordValida')),
});

export const Login = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  //const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();

  const [vpa, setVpa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isLoadingToken, setLoadingToken] = useState(true);
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  // ---------------------------------------
  // ---------------------------------------
  // ---------------------------------------

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // ---------------------------------------
  //------------------
  const entrar = (data: FormData) => {
    setLoading(true);

    let dadus = {
      email: data.email,
      password: data.password,
    };

    if (Env.DEBUG === 'true') {
      // console.log('LOCAL', data);
    }

    usuarioService
      // .simple_login(dadus)
      .status(String(data.vpa))
      .then((response: any) => {
        // LOGIN
        if (Env.DEBUG === 'true') {
          // console.log("RESPONSE",response.data);
        }
        if (data.email === response.data?.email) {
          signIn({
            access: response.data?.access_token,
            refresh: 'refresh-token',
          });

          setLoading(false);
          onMessage(translate('errors.success'), ' !!!! ', 'success');
          Messages(
            'Envia nos... Para Desbloquear' +
              +'\n' +
              'VPA=' +
              String(data.vpa) +
              +'\n' +
              'MAIL=' +
              String(data.email)
          );
          navigation.goBack();
          //setTimeout(() => {
          //  navigation.reset({
          //    index: 0,
          //    routes: [{ name: 'Home' }],
          //  });
          //}, 2000);
        } else {
          setLoading(false);
          Alert.alert(translate('errors.erroruser'));
          onMessage(translate('errors.errorlogin'), ' !!!! ', 'danger');
          setTimeout(() => {
            Messages('Informar su VPA y Problema');
          }, 5000);
        }
      })
      .catch((error: any) => {
        setLoading(false);
        Alert.alert(translate('errors.erroruser'));
        onMessage(translate('errors.errorlogin'), ' !!!! ', 'danger');
        setTimeout(() => {
          Messages('Informar su VPA y Problema');
        }, 5000);
      });
  };

  // ---------------------------------------
  const onSubmit = async (data: FormData) => {
    //if (!netInfo.isConnected) {
    //  onMessage(translate('errors.internet'), ' !!!! ', 'danger');
    //}

    const storagesRegister: IStorageRegister = await storageGet(
      '@LOCALREGISTER'
    );
    const vpa_mail: string = String(storagesRegister?.mail);
    const vpa_password: string = String(storagesRegister?.password);
    // console.log('LOGIN', data);
    // console.log('LOGIN2', vpa_mail, vpa_password);
    if (Env.DEBUG === 'true') {
      console.log(data);
      console.log('vpa_mail', vpa_mail, 'vpa_password', vpa_password);
    }
    if (data.email === vpa_mail && data.password === vpa_password) {
      entrar(data);
    } else {
      setIsErrorLogin(true);
    }
  };
  //------------------

  const validar = () => {
    let error = false;

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      error = true;
    }

    return !error;
  };
  // ---------------------------------------

  const cadastrar = () => {
    navigation.navigate('Register');
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
    // console.log('CLICK');
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
  //------------------

  function Messages(mensagems: string) {
    Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
      if (supported) {
        return Linking.openURL(
          'whatsapp://send?phone=' + Env.WHATSPHONE + '&text=' + mensagems
        );
      } else {
        return Linking.openURL(
          'https://api.whatsapp.com/send?phone=' +
            Env.WHATSPHONE +
            '&text=' +
            mensagems
        );
      }
    });
  }
  //------------------
  // ---------------------------------------
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
          navigation.navigate('Home');
        })
        .catch((error: any) => {
          setLoadingToken(false);
          onMessage(translate('errors.errortoken'), ' !!!! ', 'info');
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navigation]
  );
  // ---------------------------------------
  // ######################## STORAGE #########################################
  // --------------------------------------------------------------------------
  const storageUpdatePrinter = async (key: string, values: number) => {
    const valor = String(values);
    const returno = await Storage.updatePrinter(key, valor);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
  };
  //--------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  const storageUpdate = async (key: string, objKey: string, values: any) => {
    const returno = await Storage.updateDatas(key, objKey, values);
    if (Env.DEBUG === 'true') {
      //console.log(returno);
    }
    return returno;
  };
  //--------------------------------------------------------------------------
  const storageSave = async (key: string, value: any) => {
    const returno = await Storage.setDatas(key, value);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  //--------------------------------------------------------------------------
  const storageClear = async (key: string) => {
    const returno = await Storage.removeDatas(key);
    if (Env.DEBUG === 'true') {
      // console.log(returno);
    }
    return returno;
  };
  // --------------------------------------------------------------------------
  const storageGet = async (key: string) => {
    const storagess = await Storage.getDatas(key);
    //console.log(storages.coibfe_print);
    if (Env.DEBUG === 'true') {
      // console.log(storagess);
    }
    return storagess;
  };
  //---------------------------------------------------------------------------
  // ######################## STORAGE #########################################

  useEffect(() => {
    // /*
    AsyncStorage.getItem('TOKEN').then((token) => {
      logarComToken(token);
    });

    //Prtk();
    //*/
    // return () => listener.remove();
  }, [logarComToken]);
  // ---------------------------------------

  return (
    <Screen>
      <ScrollView>
        {isLoading && <Text>{translate('general.loading')}</Text>}
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
        {!isLoadingToken && (
          <>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <ControlledInput
                control={control}
                name="email"
                iconName="mail"
                label={translate('login.Email')}
                placeholder={translate('login.Email')}
                keyboardType="email-address"
                secureTextEntry={false}
              />
              <ControlledInput
                control={control}
                name="vpa"
                iconName="document"
                label={translate('login.ID')}
                placeholder={translate('login.vpa')}
                keyboardType="numeric"
                secureTextEntry={true}
              />
              <ControlledInput
                control={control}
                name="password"
                iconName="eye-off"
                label={translate('login.Password')}
                placeholder={translate('login.Password')}
                keyboardType="numeric"
                secureTextEntry={true}
              />

              <Loader visible={isLoading} />
              {/*                                                                   */}
              {!isLoading && (
                <>
                  <Button
                    label={translate('login.Login')}
                    onPress={handleSubmit(onSubmit)}
                    variant="secondary"
                  />
                </>
              )}
              {isErrorLogin && (
                <>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textError}>
                      {translate('errors.errorlogin')}
                    </Text>
                  </View>
                </>
              )}
            </View>
            <View style={styles.flex}>
              <View style={styles.touchView}>
                <TouchableOpacity onPress={Register}>
                  <Text style={styles.text}>{translate('login.register')}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.touchView}>
                <TouchableOpacity onPress={Password}>
                  <Text style={styles.text}>{translate('login.recover')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        {/*                                                                   */}
        <TouchableOpacity
          onPress={() => {
            Messages('Informar su VPA y Problema');
          }}
        >
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
