/* eslint-disable react/no-unstable-nested-components */
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:40:37
 * @ Description:
 */
import { useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import React, { useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import { useNavigationBackAction } from '@/hooks/useNavigationBack';
import type { GenericNavigationProps } from '@/routesOLD/types';

const ModalPage: FC = () => {
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const goBack = useNavigationBackAction();

  useLayoutEffect(() => {
    setOptions({
      headerTitle: () => <Text>PageName</Text>,
    });
  }, [goBack, setOptions]);

  return (
    <ScrollView>
      <Text>thisIsAModal</Text>
    </ScrollView>
  );
};

export default ModalPage;
