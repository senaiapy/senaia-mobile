/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import 'react-native-gesture-handler';

import { Env } from '@env';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import React from 'react';
import { Platform } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Orientation from 'react-native-orientation-locker';
import type { Permission } from 'react-native-permissions';
import { PERMISSIONS } from 'react-native-permissions';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { QueryClient, QueryClientProvider } from 'react-query';
import SpInAppUpdates from 'sp-react-native-in-app-updates';

import APIProvider from '@/api/useQuery/APIProvider';
import SyncIndicator from '@/components/SyncIndicator';
import { hydrateAuth, hydrateRegis /*, setI18nConfig */ } from '@/core';
import database from '@/database/index';
import { RootNavigator } from '@/navigation';
import dump from '@/services/coibfeSync/dump';
// POST
// import sync, {triggerSync} from'@/services/watermellondbSync/sync';
// import dump from'@/services/watermellondbSync/dump';
// COIBFE
// sync();
import { triggerSync } from '@/services/coibfeSync/sync';
import { ThemeProvider } from '@/ui/theme/theme';

triggerSync();
dump();
// // Senaia
//import {CustomDrawerNavigatorSenaia} from 'routes/Senaia/CustomDrawerNavigatorSenaia';

Ionicons.loadFont();
//setI18nConfig();
hydrateAuth(); // init authentication
hydrateRegis(); // init register

enableScreens();

type GreetingProps = {
  name: string;
};

let APPLAND = false;

if (Env.POSITION === 'landscape') {
  Orientation.lockToLandscape();
  APPLAND = true;
  console.log('POSITIOSN', Env.POSITION);
} else {
  console.log('POSITIOSN', Env.POSITION);
}

let APPSENAIA = false;

if (Env.APPINIT === 'Senaia') {
  APPSENAIA = true;
}

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

const inAppUpdates = new SpInAppUpdates(
  true // isDebug = false
);

const App = () => {
  // const { data, loading } = useGetCharactersQuery();
  if (APPLAND) {
    Orientation.lockToLandscape();
  } else {
    Orientation.lockToPortrait();
  }
  //----------------------------------------------
  /*
  async function updateApp() {
    const {isAvailable} = await Updates.checkForUpdateAsync();
    console.log('update');
    if (isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }
  useEffect(() => {
    // StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
    // isMountedRef.current = true;
    isMountedRef.current = true;
    updateApp();
    return () => {
      isMountedRef.current = false;
    };
  }, []);
*/

  // // curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info
  // inAppUpdates.checkNeedsUpdate({curVersion: '1.3.0'}).then(result => {
  //   if (result.shouldUpdate) {
  //     let updateOptions: StartUpdateOptions = {};
  //     if (Platform.OS === 'android') {
  //       // android only, on iOS the user will be promped to go to your app store page
  //       updateOptions = {
  //         updateType: IAUUpdateKind.FLEXIBLE,
  //       };
  //     }
  //     inAppUpdates.startUpdate(updateOptions); // https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/master/src/types.ts#L78
  //   }
  // });

  return (
    <DatabaseProvider database={database}>
      <APIProvider>
        <ThemeProvider>
          <SyncIndicator />
          <QueryClientProvider client={queryClient}>
            <RootNavigator />
            {/*  {APPSENAIA ? <CustomDrawerNavigatorSenaia /> : null} */}
          </QueryClientProvider>
          <FlashMessage position="top" />
        </ThemeProvider>
      </APIProvider>
    </DatabaseProvider>
  );
};
//export default App;
export default App;
