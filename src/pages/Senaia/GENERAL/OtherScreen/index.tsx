/* eslint-disable unused-imports/no-unused-vars */
/**
 * @ Author: Your name
 * @ Create Time: 2022-02-10 13:01:51
 * @ Create Time: 2022-02-08 14:51:04
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:57:29
 * @ Description:
 */

import { StackActions, useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import * as React from 'react';
import { useCallback } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

import NHCSafeAreaView from '@/components/NHCSafeAreaView';

import styles from './styles';

// ############### internationalization #######################

const OtherScreen: FC = () => {
  const navigation = useNavigation();
  const popAction = useCallback(() => StackActions.pop(), []);

  const goBack = useCallback(() => {
    navigation.dispatch(popAction);
  }, [navigation, popAction]);

  const allMovies: readonly any[] | null | undefined = [];

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <View key={item.key}>
        <Text style={styles.mainText}>{item.title}</Text>
      </View>
    ),
    []
  );

  return (
    <NHCSafeAreaView>
      <ScrollView
        contentContainerStyle={styles.content}
        style={styles.container}
      >
        <View style={styles.container}>
          <FlatList
            data={allMovies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </NHCSafeAreaView>
  );
};

export default React.memo(OtherScreen);
