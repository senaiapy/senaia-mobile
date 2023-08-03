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
import { useNetInfo } from '@react-native-community/netinfo'; // import the hook
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
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
import RNRestart from 'react-native-restart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';

import { useAuth } from '@/core';
import { translate } from '@/core';
import { Screen } from '@/ui';

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
    .required(translate('login.PasswordError'))
    .min(4, translate('login.PasswordValida'))
    .max(4, translate('login.PasswordValida')),
});

export const About = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (!netInfo.isConnected) {
      onMessage(translate('errors.internet'), ' !!!! ', 'danger');
    }
    if (Env.DEBUG === 'true') {
      console.log(data);
    }
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };

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
          'whatsapp://send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      } else {
        return Linking.openURL(
          'https://api.whatsapp.com/send?phone=' + Env.WHATSPHONE + '&text=Hola'
        );
      }
    });
  }

  function onButtonPress() {
    RNRestart.Restart(); // reboot
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

        <View style={styles.mainBody}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={styles.SectionFrame}>
              <Text style={styles.versionText}>{Env.VERSION}</Text>
              <Text style={styles.versionText}>{Env.KERNEL}</Text>
              <Text style={styles.versionText}>{Env.APPCOMPANY}</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(Env.SITE);
                }}
              >
                <Text style={styles.versionSite}>{Env.SITE}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {/*                                                                   */}
        <View style={styles.bottom}>
          <TouchableOpacity onPress={onButtonPress}>
            <Text>{translate('setting.updates')}</Text>
          </TouchableOpacity>
        </View>
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
