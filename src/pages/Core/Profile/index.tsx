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
import Storage from '@/services/crudStorage';
import { Button, Screen } from '@/ui';

import { Profiles } from './extra/data';
import { ProfileSocial } from './extra/profile-social.component';
import { RateBar } from './extra/rate-bar.component';
import styles from './styles';

let onlyOne = false;

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

export const Profile = () => {
  const { signOut } = useAuth();

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const profile: Profiles = Profiles.jenniferGreen();

  const netInfo = useNetInfo(); // declare the constant
  const { signIn } = useAuth();

  const [name, setName] = useState('');
  const [vpa, setVpa] = useState('');
  const [coibfe, setCoibfe] = useState('');

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
  // ----------------------------------------
  const SignOut = () => {
    signOut();
  };
  // -----------------------------------------
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

  const [rating, setRating] = React.useState<number>(profile.experience);

  const onFollowButtonPress = (): void => {};

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
  // -------------------------------------------------
  const init = useCallback(async () => {
    let dbs = null;
    let storageCoibfe: any;
    let storageRegister: any;
    //setIsLoadingS(true);
    if (!onlyOne) {
      onlyOne = true;
      storageRegister = await Storage.getDatas('@LOCALREGISTER');
    }

    if (Env.DEBUG === 'true') {
      // console.log('HAVE DATA', PRINTER_COUNTER);
      console.log('STORAGEREGISTER', storageRegister);
      // console.log('DBS', dbs);
      // console.log('CONNECTION', connection);
    }
    setCoibfe(storageRegister.coibfeid);
    setVpa(storageRegister.ids);
    setName(storageRegister.name);
  }, []);
  // ----------------------------------------------
  // ----------------------------------------------
  useEffect(() => {
    /*
    (async () => {
      console.log('coibfes', coibfes);
      console.log('updates', updates);
    })();
    // */
    init();
  }, [coibfe, name, vpa, init]);
  // ----------------------------------------------
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
        <View style={styles.profileContainer}>
          <View style={styles.profileDetailsContainer}>
            <Text>{profile.fullName}</Text>
            <Text>{profile.location}</Text>
            <RateBar
              style={styles.rateBar}
              hint="Calificación"
              value={rating}
              onValueChange={setRating}
            />
          </View>
        </View>
        <View style={styles.profileSocialsContainer}>
          <ProfileSocial hint="VPA" value={vpa} />
          <ProfileSocial hint="COIBFE" value={coibfe} />
        </View>
        <Button
          label={translate('login.Login')}
          onPress={() => onFollowButtonPress}
          variant="secondary"
        />
        <Button label={translate('home.SignOut')} onPress={signOut} />

        <Text style={styles.profileDescription}>Dr.{name}</Text>
        <View style={styles.profileParametersSection} />
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
