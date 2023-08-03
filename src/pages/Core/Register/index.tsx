/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-shadow */
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
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';

import { CheckBox } from '@/components/CheckBox';
import Loader from '@/components/loader';
import { useRegis } from '@/core';
// import {useNetInfo} from '@react-native-community/netinfo'; // import the hook
import { translate } from '@/core';
import Storage from '@/services/crudStorage';
import usuarioService from '@/services/usuario/UsuarioService';
import { Button, ControlledInput, Screen } from '@/ui';
import Protek from '@/utils/Protek';

import { styles } from './styles';

type FormData = {
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  nome: string;
  cpf: string;
  status?: string;
  locked?: string;
  user_token?: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required(translate('register.EmailError'))
    .email(translate('register.EmailValida')),
  password: yup
    .string()
    .required(translate('register.PasswordError'))
    .min(4, translate('register.PasswordValida'))
    .max(9, translate('register.PasswordValida')),
  passwordConfirm: yup
    .string()
    .required(translate('register.PasswordError'))
    .min(4, translate('register.PasswordValida'))
    .max(9, translate('register.PasswordValida')),
  phone: yup
    .string()
    .required(translate('register.PhoneError'))
    .min(6, translate('register.PhoneValida'))
    .max(14, translate('register.PhoneValida')),
  nome: yup
    .string()
    .required(translate('general.pressagain'))
    .min(6, translate('general.pressagain')),
  cpf: yup
    .string()
    .required(translate('general.pressagain'))
    .min(1, translate('general.pressagain'))
    .max(4, translate('general.pressagain')),
});

export const Register = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  // const netInfo = useNetInfo(); // declare the constant
  const { regisIn } = useRegis();

  const [posid, setPosid] = useState('');
  const [usertype, setUsertype] = useState('');
  const [usercoibfeid, setUsercoibfeid] = useState('');

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isSelected, setSelected] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorTelefone, setErrorTelefone] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [isLoadingS, setIsLoadingS] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorCheckBox, setIsErrorCheckBox] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState('');
  //------------------
  //------------------
  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  //------------------

  const salvar = (data: FormData) => {
    console.log('data', data);
    setIsLoadingS(true);
    setIsError(false);
    setIsErrorCheckBox(false);

    let dadus = {
      email: data.email,
      cpf: data.cpf,
      user_vpa: data.cpf,
      nome: data.nome,
      telefone: data.phone,
      senha: data.password,
      user_key_hardware: posid,
    };

    if (Env.DEBUG === 'true') {
      console.log('LOCAL', data);
    }

    usuarioService
      .cadastrar(dadus)
      .then(async (response) => {
        //for first register or 2 register have active and unlocked
        console.log('RESPONSE', response?.data);
        if (
          response.data?.status ||
          (response.data?.user_locked === 'unlocked' &&
            response.data?.user_status === 'active')
        ) {
          const titulo = response.data?.status ? 'Sucesso' : 'Erro';
          showDialog(titulo, response.data?.mensagem, 'SUCESSO');
          //Alert.alert(titulo, response.data.mensagem)
          setUsertype(response.data?.user_system_type);
          setUsercoibfeid(response.data?.user_token);
          // REGISTER
          if (Env.DEBUG === 'true') {
            // console.log(response?.data);
          }
          regisIn({
            access: 'access-token',
            refresh: 'refresh-token',
            posid: posid,
            mail: data.email,
            phone: data.phone,
            name: data.nome,
            ids: data.cpf,
            password: data.password,
            usertype: usertype,
            vpa: data.cpf,
            coibfeid: '0',
          });

          const tempcoibfeid: any = String(data?.user_token);
          let coibfeIds = parseInt(tempcoibfeid, 10);

          if (isNaN(coibfeIds)) {
            coibfeIds = 0;
          }
          let REGISTER_DATA = null;

          if (response.data?.status === true) {
            // ACTIVATE
            // console.log('RESPONSE1', response.data);

            REGISTER_DATA = {
              access: 'access-token',
              refresh: 'refresh-token',
              posid: posid,
              mail: data.email,
              phone: data.phone,
              name: data.nome,
              ids: data.cpf,
              password: data.password,
              usertype: usertype,
              vpa: data?.cpf,
              coibfeid: usercoibfeid,
              status: response.data?.user_status,
              locked: response.data?.user_locked,
            };

            const returno = await Storage.setDatas(
              '@LOCALREGISTER',
              REGISTER_DATA
            );
            setIsLoadingS(false);

            onMessage(translate('errors.success'), ' !!!! ', 'success');

            setTimeout(() => {
              navigation.navigate('Login');
            }, 2000);
          } else if (
            response.data?.user_locked === 'unlocked' &&
            response.data?.user_status === 'active'
          ) {
            // FIRST REGISTER
            // console.log('RESPONSE2', response.data);
            // console.log('RESPONSE3', data);
            // THE SAME MAIL AND PHONE
            if (
              response.data?.email === data.email &&
              response.data?.telefone === data.phone
            ) {
              REGISTER_DATA = {
                access: 'access-token',
                refresh: 'refresh-token',
                posid: posid,
                mail: data.email,
                phone: data.phone,
                name: data.nome,
                ids: response.data?.cpf,
                password: data.password,
                usertype: response.data?.user_system_type,
                vpa: response.data?.cpf,
                coibfeid: response.data?.user_token,
                status: response.data?.user_status,
                locked: response.data?.user_locked,
              };

              const returno = await Storage.setDatas(
                '@LOCALREGISTER',
                REGISTER_DATA
              );
              setIsLoadingS(false);

              onMessage(translate('errors.success'), ' !!!! ', 'success');
              setTimeout(() => {
                navigation.navigate('Login');
              }, 2000);
            } else {
              // console.log('RESPONSEe1', response?.data);
              setIsLoadingS(false);
              onMessage(translate('errors.errorregister'), ' !!!! ', 'danger');
            }
          } else {
            // console.log('RESPONSEe2', response?.data);
            setIsLoadingS(false);
            onMessage(translate('errors.errorregister'), ' !!!! ', 'danger');
          }
        } else {
          // console.log('RESPONSEe3', response?.data);
          setIsLoadingS(false);
          onMessage(translate('errors.errorregister'), ' !!!! ', 'danger');
          setTimeout(() => {
            Messages(
              'Informar su VPA y Problema' +
                +'\n' +
                'VPA=' +
                String(data.cpf) +
                +'\n' +
                'MAIL=' +
                String(data.email) +
                +'\n' +
                'PHONE=' +
                String(data.phone)
            );
          }, 5000);
        }
      })
      .catch((e: any) => {
        console.log('RESPONSEe4', e);
        setIsLoadingS(false);
        showDialog('Erro', 'Houve um erro inesperado', 'ERRO');
        //Alert.alert("Erro", "Houve um erro inesperado")
        onMessage(translate('errors.errorregister'), ' !!!! ', 'danger');
        setTimeout(() => {
          Messages(
            'Informar su VPA y Problema' +
              +'\n' +
              'VPA=' +
              String(data.cpf) +
              +'\n' +
              'MAIL=' +
              String(data.email) +
              +'\n' +
              'PHONE=' +
              String(data.phone)
          );
        }, 5000);
      });
  };
  //------------------
  const onSubmit = (data: FormData) => {
    console.log('data');

    setIsError(false);
    setIsErrorCheckBox(false);
    let iserror = false;
    let iserrorcheck = false;
    // if (!netInfo.isConnected) {
    //   onMessage(translate('errors.internet'), ' !!!! ', 'danger');
    // }

    if (password === passwordConfirm) {
      if (isSelected) {
        salvar(data);
      } else {
        iserrorcheck = true;
        setIsErrorCheckBox(true);
      }
    } else {
      iserror = true;
      setIsError(true);
    }
  };
  //------------------

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
  //------------------

  function onMessageClick() {
    // console.log('CLICK');
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
  const showDialog = (titulo: string, mensagem: string, tipo: string) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };
  //------------------

  const hideDialog = (status: any) => {
    setVisibleDialog(status);
  };
  //------------------

  const validar = () => {
    let error = false;
    setErrorEmail('');
    setErrorCpf('');
    setErrorSenha('');

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail('Preencha seu e-mail corretamente');
      error = true;
    }
    if (telefone == null) {
      setErrorTelefone('Preencha seu telefone corretamente');
      error = true;
    }
    if (senha == null) {
      setErrorSenha('Preencha a senha');
      error = true;
    }
    return !error;
  };
  //------------------

  const getPosId = useCallback(async () => {
    // TODO: TAKE POS ID
    const ids: any = await Protek.getProtek(Env.KEY);
    // console.log(ids);
    setPosid(String(ids.posId));
  }, []);
  // ------------------
  useEffect(() => {
    getPosId();
  }, [getPosId, isError, isErrorCheckBox]);
  // ---------------------------------------

  // ----------------------------------------------

  return (
    <Screen>
      <ScrollView>
        <Loader visible={isLoadingS} />
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
            iconName="ios-mail"
            placeholder={translate('register.email')}
            secureTextEntry={false}
            keyboardType="email-address"
          />
          {/*                                                                   */}
          <ControlledInput
            control={control}
            name="phone"
            iconName="call"
            placeholder={translate('register.phone')}
            secureTextEntry={false}
            keyboardType="numeric"
          />
          {/*                                                                   */}
          <ControlledInput
            control={control}
            name="nome"
            iconName="person"
            placeholder={translate('register.name')}
            secureTextEntry={false}
          />
          <ControlledInput
            control={control}
            name="cpf"
            iconName="document"
            placeholder={translate('register.ID')}
            keyboardType="numeric"
            secureTextEntry={false}
          />
          <ControlledInput
            control={control}
            name="password"
            iconName="eye-off"
            placeholder={translate('register.Password')}
            keyboardType="numeric"
            secureTextEntry={true}
          />
          {isError && (
            <Text style={styles.errorMessage}>
              {translate('general.pressagain')}
            </Text>
          )}
          <ControlledInput
            control={control}
            name="passwordConfirm"
            iconName="eye-off"
            placeholder={translate('register.PasswordConfirm')}
            keyboardType="numeric"
            secureTextEntry={true}
          />
          {isError && (
            <Text style={styles.errorMessage}>
              {translate('general.pressagain')}
            </Text>
          )}
          {/*                                                                   */}
          <View style={styles.viewRow}>
            <CheckBox
              color="red"
              checked={isSelected}
              onPress={() => setSelected(!isSelected)}
            />
            <Text style={styles.checkText}>{translate('register.terms')}</Text>
          </View>
          {isErrorCheckBox && (
            <Text style={styles.errorMessage}>
              {translate('general.pressagain')}
            </Text>
          )}
          {/*
          <View style={styles.containerMask}>
            <TextInputMask
              placeholder="Telefone"
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              value={telefone}
              onChangeText={(value: any) => {
                setTelefone(value);
                setErrorTelefone('');
              }}
              keyboardType="phone-pad"
              returnKeyType="done"
              style={styles.maskedInput}
              ref={(ref: any) => (telefoneField = ref)}
            />
          </View>
          <Text style={styles.errorMessage}>{errorTelefone}</Text>
          */}
          {isLoadingS && <Text>{translate('general.loading')}</Text>}
          {!isLoadingS && (
            <Button
              label={translate('login.Login')}
              onPress={handleSubmit(onSubmit)}
              variant="secondary"
            />
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
        </View>
      </ScrollView>
    </Screen>
  );
};

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});
