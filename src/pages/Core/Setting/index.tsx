/* eslint-disable react-native/no-inline-styles */
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
  Alert,
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

import { useAuth } from '@/core';
import { translate } from '@/core';
import usuarioService from '@/services/usuario/UsuarioService';
import { Button, Screen } from '@/ui';

import styles from './styles';

type FormData = {
  email: string;
  password: string;
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
});

export const Setting = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();
  const [senha, setSenha] = useState('');
  const [ids, setIds] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // dbase
  const onSubmit1 = () => {
    navigation.navigate('SettingData');
  };

  // printer
  function onSubmit2() {
    navigation.navigate('TestPrinter');
    if (Env.DEBUG === 'true') {
      console.log('PRINT');
    }
  }

  // server
  async function onSubmit3() {
    if (Env.DEBUG === 'true') {
      console.log('3');
    }

    await login();
  }

  // tools
  const onSubmit4 = () => {
    if (Env.DEBUG === 'true') {
      console.log('4');
    }
    navigation.navigate('Activate');
    if (!netInfo.isConnected) {
      onMessage(translate('errors.internet'), ' !!!! ', 'danger');
    }
    if (Env.DEBUG === 'true') {
      console.log('data');
    }
  };

  const enviar = async () => {
    const dadus = {
      user_status: 'active',
      user_locked: 'unlocked',
    };

    usuarioService
      .activar(ids, dadus)
      .then(async (response) => {
        //for first register or 2 register have active and unlocked
        // console.log('RESPONSE', response?.data);
        if (response.data) {
          console.log('RESPONSE2', response.data);
          setIds(response?.data.Status);
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  //------------------
  const login = async () => {
    setLoading(true);

    let dadus = {
      email: ids,
      password: senha,
    };

    if (Env.DEBUG === 'true') {
      //console.log('LOCAL', dadus);
    }

    usuarioService
      .simple_login(dadus)
      //.status(String(data.vpa))
      .then((response: any) => {
        // LOGIN
        if (Env.DEBUG === 'true') {
          // console.log("RESPONSE",response.data);
        }
        if (
          dadus.email === response.data?.email &&
          response.data?.user_system_type === 'ADMIN'
        ) {
          // signIn({
          //   access: response.data?.access_token,
          //   refresh: 'refresh-token',
          // });

          setLoading(false);
          onMessage(translate('errors.success'), ' !!!! ', 'success');
          //Messages('Informar su VPA, Correo y Teléfono Para Desbloqueo');
          setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Activate' }],
            });
          }, 2000);
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

  function onMessageClick() {
    console.log('CLICK');
  }

  function Register() {
    navigation.navigate('Register');
  }

  function Password() {
    navigation.navigate('Password');
  }

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
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          {/*                                                                   */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder={translate('setting.Email')}
              onChangeText={(value) => setIds(value)}
              value={ids}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder={translate('setting.Password')}
              onChangeText={(value) => setSenha(value)}
              secureTextEntry={true}
              value={senha}
            />
          </View>
          {/*                                                                   */}
          <Button
            label={translate('setting.but1')}
            onPress={() => {
              onSubmit1();
            }}
            variant="secondary"
          />
          {/*                                                                   */}
          <Button
            label={translate('setting.but2')}
            onPress={() => {
              onSubmit2();
            }}
            variant="secondary"
          />
          {/*                                                                   */}
          <Button
            label={translate('setting.but3')}
            onPress={() => {
              onSubmit3();
            }}
            variant="secondary"
          />
          {/*                                                                   */}
          <Button
            label={translate('setting.but4')}
            onPress={() => {
              onSubmit4();
            }}
            variant="secondary"
          />
        </View>
        <Text style={styles.text}>
          {Env.VERSION} {Env.KERNEL}
        </Text>
        {/*                                                                   */}
      </ScrollView>
    </Screen>
  );
};
