/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import Loader from '@/components/loader';
import usuarioService from '@/services/UsuarioService';

import {
  ActionContainer,
  Container,
  EnviarButton,
  InputUser,
  Logo,
  LogoView,
  OlvideButton,
  OlvideText,
  Text01,
  Title,
} from './styles';

// ############### internationalization #######################

export const LoginScreen = () => {
  const images = '../../../assets/images/Senaia/Logo1.png';
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isLoadingToken, setLoadingToken] = useState(true);

  const entrar = () => {
    let data = {
      username: email,
      password: password,
    };

    usuarioService
      .login(data)
      .then((response: any) => {
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Principal' }],
        });
      })
      .catch((error: any) => {
        setLoading(false);
        Alert.alert('Usuário não existe');
      });
  };
  // ---------------------------------------

  const logarComToken = (token: string | null) => {
    setLoadingToken(true);
    let data = {
      token: token,
    };

    usuarioService
      .loginComToken(data)
      .then((response: any) => {
        setLoadingToken(false);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Principal' }],
        });
      })
      .catch((error: any) => {
        setLoadingToken(false);
      });
  };
  // ---------------------------------------

  const cadastrar = () => {
    navigation.navigate('CadastroScreen');
  };

  useEffect(() => {
    AsyncStorage.getItem('TOKEN').then((token) => {
      logarComToken(token);
    });
  }, []);
  // ---------------------------------------

  return (
    <>
      <Container>
        {/* HEADER */}
        <LogoView>
          <Logo source={require(images)} />
          {/* HEADER */}
          <ScrollView>
            {isLoadingToken && <Text>Aguarde...</Text>}

            {!isLoadingToken && (
              <>
                <Text>Entre </Text>
                <TextInput
                  placeholder={'E-mail'}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                />
                <TextInput
                  placeholder={'Sua senha'}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />

                <Loader visible={isLoading} />
                {!isLoading && (
                  <>
                    <Button
                      title="entrar"
                      onPress={() => {
                        entrar();
                      }}
                    />
                  </>
                )}

                <Button title="cadastrar" onPress={() => cadastrar()} />
              </>
            )}
            <Title size={25}>Haga su Acceso</Title>
            <ActionContainer>
              <Icon name="user" size={20} color="grey" />
              <InputUser>
                <Text>Acesso</Text>
              </InputUser>
            </ActionContainer>
            <ActionContainer>
              <Icon name="lock" size={20} color="grey" />
              <InputUser>
                <Text01>Contraseña</Text01>
              </InputUser>
            </ActionContainer>
            <EnviarButton>
              <Text> Enviar</Text>
            </EnviarButton>
            <OlvideButton>
              <OlvideText> Recuperar Su Contarseña</OlvideText>
            </OlvideButton>
          </ScrollView>
        </LogoView>
      </Container>
    </>
  );
};
