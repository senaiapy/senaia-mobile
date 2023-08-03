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
import { useNetInfo } from '@react-native-community/netinfo'; // import the hook
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';

import { useAuth } from '@/core';
import { translate } from '@/core';
import { Button, Screen } from '@/ui';

import { Input, styles } from './styles';

type FormData = {
  message: string;
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
    .required(translate('login.PasswordError'))
    .min(4, translate('login.PasswordValida'))
    .max(4, translate('login.PasswordValida')),
  message: yup.string(),
});

export const Message = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();
  const [control, setControl] = useState('');

  const onSubmit = () => {};

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

  function Messages() {
    Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
      if (supported) {
        return Linking.openURL(
          'whatsapp://send?phone=' + Env.WHATSPHONE + '&text=' + control
        );
      } else {
        return Linking.openURL(
          'https://api.whatsapp.com/send?phone=' +
            Env.WHATSPHONE +
            '&text=' +
            control
        );
      }
    });
  }

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
              source={require('@/assets/logos/logosenaia.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          {/*                                                                   */}
          <Input
            placeholder={translate('message.Message')}
            value={control}
            onChangeText={(text: any) => {
              setControl(text);
            }}
          />
          {/*                                                                   */}
          <Button
            label={translate('message.Send')}
            onPress={Messages}
            variant="secondary"
          />
        </View>
        <View style={{ alignItems: 'center', borderRadius: 20 }}>
          <Image
            source={require('@/assets/images/Senaia/miestancia.png')}
            style={{
              width: '90%',
              height: 200,
              resizeMode: 'contain',
            }}
          />
        </View>
        {/*
         <TouchableOpacity onPress={Messages}>
           <View style={styles.iconHelp}>
             <Ionicons
               style={{marginRight: 10, marginTop: 20}}
               name="chatbox"
               color="#25d366"
               size={30}
             />
             <Text style={styles.text}>{translate('general.Help')}</Text>
           </View>
         </TouchableOpacity>
        */}
      </ScrollView>
    </Screen>
  );
};
