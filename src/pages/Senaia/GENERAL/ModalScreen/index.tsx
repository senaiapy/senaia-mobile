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

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}
import type { FC } from 'react';
import React from 'react';
import { Text, View } from 'react-native';

import GenericModal from '@/components/GenericModal';
import { translate } from '@/core';

import styles from './styles';

// ############### internationalization #######################

const ModalScreen: FC = () => {
  return (
    <GenericModal pageTitle={translate('ModalScreen.PageName')}>
      <View>
        <Text style={styles.mainText}>
          {translate('ModalPage.thisIsAModal')}
        </Text>
      </View>
    </GenericModal>
  );
};

export default ModalScreen;
