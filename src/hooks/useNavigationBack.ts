/* eslint-disable unicorn/filename-case */

/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 13:06:14
 * @ Description:
 */
import { StackActions, useNavigation } from '@react-navigation/core';
import { useCallback } from 'react';

export const useNavigationBackAction = (count = 1): (() => void) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    const popAciton = StackActions.pop(count);
    navigation.dispatch(popAciton);
  }, [count, navigation]);

  return goBack;
};
