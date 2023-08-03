import { Env } from '@env';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';

import { useAuth } from '@/core';
import { translate } from '@/core';
import { ScrollView, Text, View } from '@/ui';
import { Rate, Share, Support, Website } from '@/ui';

import { Item } from './item';
import { ItemsContainer } from './items-container';
import { LanguageItem } from './language-item';
import { ThemeItem } from './theme-item';

export const Adjustes = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  // ----------------------------------------------
  function navigateToPages(page: string, dato: any | null) {
    // console.log(film.id);
    navigation.navigate(page, { dato });
    // navigation.goBack();
  }
  // ----------------------------------------------
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 px-4 pt-16">
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
          <Item text="settings.share" icon={<Share />} onPress={() => {}} />
          <Item text="settings.rate" icon={<Rate />} onPress={() => {}} />
          <Item text="settings.support" icon={<Support />} onPress={() => {}} />
        </ItemsContainer>

        <ItemsContainer title="settings.links">
          <Item text="settings.privacy" onPress={() => {}} />
          <Item text="settings.terms" onPress={() => {}} />
          <Item text="settings.website" icon={<Website />} onPress={() => {}} />
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
            <Item text="settings.logout" onPress={signOut} />
          </ItemsContainer>
        </View>
      </View>
    </ScrollView>
  );
};
