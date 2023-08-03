/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 23:06:22
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:20:23
 * @ Description:
 */

/* eslint-disable react-native/no-inline-styles */
import React, { createRef } from 'react';
import { Text } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

import { LoadingModal } from '@/services/loading';
import { Colors } from '@/utils/colors';

LoadingModal.instance = createRef();

export const LoadingSheet = () => {
  return (
    <ActionSheet
      ref={LoadingModal.instance}
      closeOnTouchBackdrop={false}
      containerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.darker,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 30,
          fontSize: 20,
          marginTop: 0,
          color: Colors.foreground,
        }}
      >
        {'please_wait'}
      </Text>
    </ActionSheet>
  );
};
