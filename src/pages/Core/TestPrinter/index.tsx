/* eslint-disable unused-imports/no-unused-vars */
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
import { Linking } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import type { MenuTypeProps } from '@/components/Menu';
import { Printers } from '@/services/printers';

import { Container } from './styles';
export const TestPrinter = () => {
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

  useEffect(() => {
    bottomSheetRef.current?.expand();
  }, [type]);

  return (
    <Container>
      <Printers />
    </Container>
  );
};
