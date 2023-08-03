/* eslint-disable max-lines-per-function */
// @ts-nocheck
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import { useAuths } from '@/core';
import { useIsFirstTime } from '@/core/hooks';
import {
  About,
  Activate,
  Camera,
  Message,
  Password,
  Profile,
  Register,
  Scanner,
  Setting,
  SettingData,
} from '@/pages/Core';
import { Cadastro } from '@/pages/Core/Cadastro/index';
import { LoginScreen } from '@/pages/Core/LoginScreen/index';
import { Printer } from '@/pages/Core/Printer';
import Privacy_Policy from '@/pages/Core/Privacy_Policy';
import { Servico } from '@/pages/Core/Servico/index';
import Terms_Conditions from '@/pages/Core/Terms_Conditions';
import Config from '@/pages/Senaia/GENERAL/ConfigScreen';
import Services from '@/pages/Senaia/GENERAL/ServicesScreen';
import Control from '@/pages/Senaia/IDENTIFICA/ControlScreen';
import NewPost from '@/pages/watermellondb/NewPost';
import ModalPage from '@/scenes/ModalPage';
import UserDetails from '@/scenes/UserDetails';
import UsersList from '@/scenes/UsersList';
import { Onboarding } from '@/screens';

//import { AuthNavigator } from './auth-navigator';
import { CustomDrawerNavigator } from './drawer-navigator';
import { NavigationContainer } from './navigation-container';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuths.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      hideSplash();
    }
  }, [hideSplash, status]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Group>
          {status === 'signOut' ? (
            <Stack.Screen name="Auth" component={CustomDrawerNavigator} />
          ) : (
            <Stack.Screen name="App" component={CustomDrawerNavigator} />
          )}
        </Stack.Group>
      )}

      <Stack.Screen
        name={'Register'}
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={'Activate'}
        component={Activate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={'About'}
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Message'}
        component={Message}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Setting'}
        component={Setting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'SettingData'}
        component={SettingData}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Password'}
        component={Password}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Camera" component={Camera} />

      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />

      <Stack.Screen name={'UserDetails'} component={UserDetails} />
      <Stack.Screen name={'UsersList'} component={UsersList} />
      <Stack.Screen name={'ModalPage'} component={ModalPage} />
      <Stack.Screen
        name={'ServicoScreen'}
        component={Servico}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'CadastroScreen'}
        component={Cadastro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={'Config'}
        component={Config}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'control'}
        component={Control}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Services'}
        component={Services}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Printer'}
        component={Printer}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Root" component={Root} />
      <Stack.Screen name="NewPost" component={NewPost} />
      <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} />
      <Stack.Screen name="Terms_Conditions" component={Terms_Conditions} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
