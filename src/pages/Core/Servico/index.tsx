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
import type BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';

import type { MenuTypeProps } from '@/components/Menu';
import servicoService from '@/services/ServicoService';

import { Container, styles } from './styles';

export const Servico = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

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

  // -------------------DATABASE-----------
  const [type, setType] = useState<MenuTypeProps>('soft');
  const [name, setName] = useState('');

  const bottomSheetRef = useRef<BottomSheet>(null);

  // -------------------DATABASE--FUNCTION---------
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [errorTitulo, setErrorTitulo] = useState('');
  const [errorDescricao, setErrorDescricao] = useState('');
  const [isLoading, setLoading] = useState(false);

  const validar = () => {
    let error = false;
    setErrorTitulo('');
    setErrorDescricao('');

    if (titulo.length < 5) {
      setErrorTitulo('Digite pelo menos 5 letras no título');
      error = true;
    }
    if (descricao.length < 20) {
      setErrorDescricao('Digite pelo menos 20 letras na descrição');
      error = true;
    }

    return !error;
  };

  const salvar = () => {
    if (validar()) {
      setLoading(true);

      let data = {
        titulo: titulo,
        descricao: descricao,
      };

      servicoService
        .cadastrar(data)
        .then((response: any) => {
          setLoading(false);
          Alert.alert(response.data.mensagem);
          setTitulo('');
          setDescricao('');
        })
        .catch((error: any) => {
          setLoading(false);
          Alert.alert('Erro', 'Houve um erro inesperado');
        });
    }
  };
  useEffect(() => {
    bottomSheetRef.current?.expand();
  }, [type]);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.container]}
        keyboardVerticalOffset={80}
      >
        <ScrollView style={{ width: '100%' }}>
          <Text>Cadastre-se</Text>

          <TextInput
            placeholder="Título do serviço"
            onChangeText={(value) => {
              setTitulo(value);
              setErrorTitulo('');
            }}
          />

          <TextInput
            placeholder="Descreva o serviço para explicar melhor"
            onChangeText={(value) => {
              setDescricao(value);
              setErrorDescricao('');
            }}
          />

          {isLoading && <Text>Carregando...</Text>}

          {!isLoading && (
            <>
              <Button title="Salvar" onPress={() => salvar()} />
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
