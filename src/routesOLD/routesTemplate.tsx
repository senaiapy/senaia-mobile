/* eslint-disable unicorn/filename-case */
/* eslint-disable react/no-unstable-nested-components */
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:36:28
 * @ Description:
 */
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import type { FC } from 'react';
import React from 'react';

import ModalPage from '@/scenes/ModalPage';

import { routeOverlayOption } from './routeOptions';

const RootStack = createStackNavigator();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ presentation: 'modal', ...routeOverlayOption }}
    >
      <RootStack.Screen
        name="MyModal"
        component={ModalPage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => <></>,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RootStack.Navigator>
  );
};
