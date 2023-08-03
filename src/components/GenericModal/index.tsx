/* eslint-disable unused-imports/no-unused-vars */
import { StackActions, useNavigation } from '@react-navigation/native';
import type { FC, ReactNode } from 'react';
import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';

interface IModalPage {
  children: ReactNode;
  pageTitle: string;
}

const ModalPage: FC<IModalPage> = ({ children, pageTitle }) => {
  const navigation = useNavigation();
  const popAction = useCallback(() => StackActions.pop(), []);

  const closeModal = useCallback(() => {
    navigation.dispatch(popAction);
  }, [navigation, popAction]);

  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      {children}
    </ScrollView>
  );
};

export default ModalPage;
