/* eslint-disable unused-imports/no-unused-vars */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

import { Env } from '@env';
import React from 'react';
import { Image, Linking, ScrollView, TouchableOpacity } from 'react-native';

import { useTasks } from '@/api/useQuery';
import { translate } from '@/core';
import { Button, Screen, View } from '@/ui';

import styles from './styles';

export const Home = () => {
  const { data, isLoading } = useTasks();

  const onSubmit1 = () => {};

  const onSubmit2 = () => {};

  const onSubmit3 = () => {
    console.log('ad');
  };

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
        <Button
          label={translate('setting.but1')}
          onPress={onSubmit1}
          variant="secondary"
        />
        <View style={styles.space} />
        {/*                                                                   */}
        <Button
          label={translate('setting.but2')}
          onPress={onSubmit2}
          variant="secondary"
        />
        <View style={styles.space} />

        {/*                                                                   */}
        <Button
          label={translate('setting.but3')}
          onPress={onSubmit3}
          variant="secondary"
        />
        <View style={styles.space} />

        {/*                                                                   */}
        {/*
        <View flex={1} justifyContent="center">
          <Text variant="header" textAlign="center">
            {translate('home.Home')}
          </Text>
          <Text variant="body" textAlign="center">
            {translate('home.EnvVar')} : {}
          </Text>
          {isLoading && <ActivityIndicator color="#000" />}

          <Text variant="body" textAlign="center">
            {translate('home.ApiData')} : {JSON.stringify(data)}
          </Text>
        </View>
        */}
      </ScrollView>
    </Screen>
  );
};
