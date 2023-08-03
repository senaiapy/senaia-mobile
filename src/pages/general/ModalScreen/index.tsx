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
 * @ Modified time: 2022-02-10 18:57:38
 * @ Description:
 */

import type { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import GenericModal from '@/components/GenericModal';

import styles from './styles';

const ModalScreen: FC = () => {
  const [t] = useTranslation();

  return (
    <GenericModal pageTitle={t('ModalScreen:PageName')}>
      <View>
        <Text style={styles.mainText}>{t('ModalPage:thisIsAModal')}</Text>
      </View>
    </GenericModal>
  );
};

export default ModalScreen;
