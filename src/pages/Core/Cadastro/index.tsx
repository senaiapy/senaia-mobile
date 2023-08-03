/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
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
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { MaskedTextInput } from 'react-native-mask-text';

import Loader from '@/components/loader';
import usuarioService from '@/services/UsuarioService';

import { Container, styles } from './styles';

export const Cadastro = () => {
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

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isSelected, setSelected] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorTelefone, setErrorTelefone] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [errorTitulo, setErrorTitulo] = useState('');
  const [errorDescricao, setErrorDescricao] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [visibleDialog, setVisibleDialog] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState('');

  let cpfField: any = null;
  let telefoneField: any = null;

  const showDialog = (titulo: string, mensagem: string, tipo: string) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };

  const hideDialog = (status: any) => {
    setVisibleDialog(status);
  };

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
    if (cpfField === '') {
      setErrorCpf('Preencha seu CPF corretamente');
      error = true;
    }
    if (telefone === '') {
      setErrorTelefone('Preencha seu telefone corretamente');
      error = true;
    }
    if (senha === '') {
      setErrorSenha('Preencha a senha');
      error = true;
    }
    return !error;
  };

  const salvar = () => {
    if (validar()) {
      setLoading(true);

      let data = {
        email: email,
        cpf: cpf,
        nome: nome,
        telefone: telefone,
        senha: senha,
      };
      console.log(data);

      usuarioService
        .cadastrar(data)
        .then((response) => {
          setLoading(false);
          const titulo = response.data.status ? 'Sucesso' : 'Erro';
          showDialog(titulo, response.data.mensagem, 'SUCESSO');
          //Alert.alert(titulo, response.data.mensagem)
        })
        .catch((error) => {
          setLoading(false);
          showDialog('Erro', 'Houve um erro inesperado', 'ERRO');
          console.log(error);
          //Alert.alert("Erro", "Houve um erro inesperado")
        });
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.container, styles.specificContainer]}
        keyboardVerticalOffset={80}
      >
        <ScrollView style={{ width: '100%' }}>
          <Text>Cadastre-se</Text>

          <TextInput
            placeholder="E-mail"
            onChangeText={(value) => {
              setEmail(value);
              setErrorEmail('');
            }}
            keyboardType="email-address"
          />
          <Text style={styles.errorMessage}>{errorEmail}</Text>

          <TextInput
            placeholder="Nome"
            onChangeText={(value) => setNome(value)}
          />
          <Text style={styles.errorMessage}>{errorNome}</Text>

          <View style={styles.containerMask}>
            <MaskedTextInput
              placeholder="CPF"
              mask="999.999.999-99"
              value={cpf}
              onChangeText={(text) => {
                setCpf(text);
                setErrorCpf('');
              }}
              keyboardType="number-pad"
              returnKeyType="done"
              style={styles.maskedInput}
              ref={(ref) => (cpfField = ref)}
            />
          </View>
          <Text style={styles.errorMessage}>{errorCpf}</Text>

          <View style={styles.containerMask}>
            <MaskedTextInput
              placeholder="Telefone"
              mask="(999)9999-99999"
              value={telefone}
              onChangeText={(text) => {
                setTelefone(text);
                setErrorTelefone('');
              }}
              keyboardType="phone-pad"
              returnKeyType="done"
              style={styles.maskedInput}
              ref={(ref) => (telefoneField = ref)}
            />
          </View>
          <Text style={styles.errorMessage}>{errorTelefone}</Text>

          <TextInput
            placeholder="Senha"
            onChangeText={(value) => setSenha(value)}
            secureTextEntry={true}
          />
          <Text style={styles.errorMessage}>{errorSenha}</Text>

          <View style={styles.rowStyles}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text>"Eu aceito os termos de uso"</Text>
          </View>

          <Loader visible={isLoading} />
          {!isLoading && <Button title="Salvar" onPress={() => salvar()} />}

          {visibleDialog && (
            <View>
              <Text>{titulo}</Text>
              <Text>{mensagem}</Text>
              <Text>{mensagem}</Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
