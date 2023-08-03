/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-vars */

import 'react-native-gesture-handler';

import { Env } from '@env';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Orientation from 'react-native-orientation-locker';
import type { Permission } from 'react-native-permissions';
import { PERMISSIONS } from 'react-native-permissions';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APIProvider as APIProviders } from '@/api';
import APIProvider from '@/api/useQuery/APIProvider';
import SyncIndicator from '@/components/SyncIndicator';
import { hydrateAuths, loadSelectedTheme } from '@/core';
import { hydrateAuth, hydrateRegis } from '@/core';
import database from '@/database/index';
import { RootNavigator } from '@/navigation';
// OFFLINE-FIRST
/*
// OLD
import dump from '@/services/coibfeSync/dump';
import { triggerSync } from '@/services/coibfeSync/sync';
triggerSync();
dump();
*/
import dump from '@/database/Sync/dump';
import { triggerSync } from '@/database/Sync/sync';
triggerSync();
dump();

Ionicons.loadFont();

hydrateAuths();
loadSelectedTheme();
SplashScreen.preventAutoHideAsync();
hydrateAuth();
hydrateRegis(); // init register
enableScreens();

let APPLAND = false;

if (Env.POSITION === 'landscape') {
  Orientation.lockToLandscape();
  APPLAND = true;
  console.log('POSITIOSN', Env.POSITION);
} else {
  console.log('POSITIOSN', Env.POSITION);
}

//let APPSENAIA = false;
//
//if (Env.APPINIT === 'Senaia') {
//  APPSENAIA = true;
//}

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// ------------------------ PERMISSIONS-----------------------------

const { SIRI, ...PERMISSIONS_IOS } = PERMISSIONS.IOS; // remove siri (certificate required)

const PLATFORM_PERMISSIONS = Platform.select<
  | typeof PERMISSIONS.ANDROID
  | typeof PERMISSIONS_IOS
  | typeof PERMISSIONS.WINDOWS
  | {}
>({
  android: PERMISSIONS.ANDROID,
  ios: PERMISSIONS_IOS,
  windows: PERMISSIONS.WINDOWS,
  default: {},
});

const PERMISSIONS_VALUES: Permission[] = Object.values(PLATFORM_PERMISSIONS);

type NotificationSettings = {
  // properties only available on iOS
  // unavailable settings will not be included in the response object
  alert?: boolean;
  badge?: boolean;
  sound?: boolean;
  carPlay?: boolean;
  criticalAlert?: boolean;
  provisional?: boolean;
  providesAppSettings?: boolean;
  lockScreen?: boolean;
  notificationCenter?: boolean;
};

// ------------------------ PERMISSIONS-----------------------------
const App = () => {
  // const { data, loading } = useGetCharactersQuery();
  if (APPLAND) {
    Orientation.lockToLandscape();
  } else {
    Orientation.lockToPortrait();
  }
  //----------------------------------------------
  return (
    <GestureHandlerRootView style={styles.container}>
      <DatabaseProvider database={database}>
        <BottomSheetModalProvider>
          <APIProvider>
            <APIProviders>
              <SyncIndicator />
              <QueryClientProvider client={queryClient}>
                <RootNavigator />
                {/*  {APPSENAIA ? <CustomDrawerNavigatorSenaia /> : null} */}
              </QueryClientProvider>
              <FlashMessage position="top" />
            </APIProviders>
          </APIProvider>
        </BottomSheetModalProvider>
      </DatabaseProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
