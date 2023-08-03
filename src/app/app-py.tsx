/**
 * @ Author: Your name
 * @ Create Time: 2022-02-10 13:01:51
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 19:03:35
 * @ Description:
 */
import 'react-native-gesture-handler';
import 'i18n/i18next.config';
import 'react-native-gesture-handler';

import { Env } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import type { FC } from 'react';
import React from 'react';
import { StatusBar } from 'react-native';
import { LogBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Orientation from 'react-native-orientation-locker';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { QueryClient, QueryClientProvider } from 'react-query';

import Door from '@/components/Door';
import { LoadingSheet } from '@/components/loadingSheet';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import SyncIndicator from '@/components/SyncIndicator';
// Senaia
import { palette } from '@/theme/colorsPY';

// Ionicons.loadFont();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

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

const AppPY: FC<GreetingProps> = () => {
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
  return (
    <SafeAreaProvider>
      <SyncIndicator />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="dark-content" backgroundColor={palette.WHITE} />
          <MenuProvider children={undefined} />
        </QueryClientProvider>
        <FlashMessage position="top" />
        <LoadingSheet />
        <Door />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default AppPY;
