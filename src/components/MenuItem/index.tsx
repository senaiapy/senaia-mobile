// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################

import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Containers, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
};

export function MenuItem({ title, isActive = false, ...rest }: Props) {
  return (
    <Containers isActive={isActive} {...rest}>
      <Ionicons
        name={title === 'Normal' ? 'ios-gift' : 'ios-hammer'}
        color="#FFF"
        size={24}
      />

      <Title>{title}</Title>
    </Containers>
  );
}
