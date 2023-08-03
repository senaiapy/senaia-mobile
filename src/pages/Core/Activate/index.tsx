/* eslint-disable unused-imports/no-unused-vars */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import React from 'react';
import { Alert } from 'react-native';

import { useAuth } from '@/core';
import { translate } from '@/core';
import usuarioService from '@/services/usuario/UsuarioService';

import type { FormType } from './activate-form';
import { ActivateForm } from './activate-form';

export const Activate = () => {
  const { signIn } = useAuth();

  const onSubmit = (data: FormType) => {
    console.log(data);
    enviar(data);
    //signIn({ access: 'access-token', refresh: 'refresh-token' });
  };

  const enviar = async (data: FormType) => {
    console.log('RESPONSE2', data);
    const dadus = {
      user_token: data.token,
      user_status: data.status,
      user_locked: data.locked,
      user_system_type: data.type,
      // user_token: '0',
      // user_status: 'active',
      // user_locked: 'unlocked',
      // user_system_type: 'VPA',
    };

    usuarioService
      .activar(String(data.cpf), dadus)
      .then(async (response) => {
        //for first register or 2 register have active and unlocked
        // console.log('RESPONSE', response?.data);
        if (response.data) {
          console.log('RESPONSE2', response.data);
          Alert.alert(response?.data.Status);
        }
      })
      .catch((e: any) => {
        console.log(e);
        Alert.alert(translate('errors.erroruser'));
      });
  };

  return <ActivateForm onSubmit={onSubmit} />;
};
