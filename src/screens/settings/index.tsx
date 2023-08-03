/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable max-lines-per-function */
import { Env } from '@env';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Alert, Linking, Vibration } from 'react-native';

import { useAuths } from '@/core';
import { translate } from '@/core';
import Storage from '@/services/crudStorage';
import { ScrollView, Text, View } from '@/ui';
import { Github, Rate, Share, Support, Website } from '@/ui/icons';
import colors from '@/ui/theme/colors';

import { Item } from './item';
import { ItemsContainer } from './items-container';
import { LanguageItem } from './language-item';
import { ThemeItem } from './theme-item';

export const Settings = () => {
  const signOut = useAuths.use.signOut();
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[400] : colors.neutral[500];
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  async function Signout() {
    const REGISTER_DATA = {
      access: '',
      refresh: '',
      posid: '',
      mail: '',
      phone: '',
      name: '',
      ids: '',
      password: '',
      usertype: '',
      vpa: '',
      coibfeid: '',
      status: '',
      locked: '',
    };

    const returno = await Storage.setDatas('@LOCALREGISTER', REGISTER_DATA);
    signOut();
    Vibration.vibrate();
  }
  // ----------------------------------------------
  function navigateToPages(page: string, dato: any | null) {
    // console.log(film.id);
    navigation.navigate(page, { dato });
    // navigation.goBack();
  }
  // ----------------------------------------------

  const showConfirmDialog = () => {
    return Alert.alert(
      '¿Estás Seguro?',
      'Si Continua... Borra Todos sus Datos!!!',
      [
        // The "Yes" button
        {
          text: 'Si',
          onPress: () => {
            Signout();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
        },
      ]
    );
  };
  // ---------------------------------
  return (
    <ScrollView>
      <View className="flex-1 px-4 pt-16 ">
        <Text variant="lg" className="font-bold">
          {translate('settings.title')}
        </Text>
        <ItemsContainer title="settings.generale">
          <LanguageItem />
          <ThemeItem />
        </ItemsContainer>

        <ItemsContainer title="settings.about">
          <Item text="settings.app_name" value={Env.NAME} />
          <Item text="settings.version" value={Env.VERSION} />
        </ItemsContainer>

        <ItemsContainer title="settings.support_us">
          <Item
            text="settings.share"
            icon={<Share color={iconColor} />}
            onPress={() => {}}
          />
          <Item
            text="settings.rate"
            icon={<Rate color={iconColor} />}
            onPress={() => {}}
          />
          <Item
            text="settings.support"
            icon={<Support color={iconColor} />}
            onPress={() => {}}
          />
        </ItemsContainer>

        <ItemsContainer title="settings.links">
          <Item text="settings.privacy" onPress={() => {}} />
          <Item text="settings.terms" onPress={() => {}} />
          <Item
            text="settings.github"
            icon={<Github color={iconColor} />}
            onPress={() => {}}
          />
          <Item
            text="settings.website"
            icon={<Website color={iconColor} />}
            onPress={() => {
              Linking.openURL(Env.SITE);
            }}
          />
        </ItemsContainer>

        <View className="my-8">
          <ItemsContainer>
            <Item
              text="navigation.Adjustes"
              onPress={() => {
                navigateToPages('Setting', '');
              }}
            />
          </ItemsContainer>
        </View>

        <View className="my-8">
          <ItemsContainer>
            <Item text="settings.logout" onPress={() => showConfirmDialog()} />
          </ItemsContainer>
        </View>
      </View>
    </ScrollView>
  );
};
