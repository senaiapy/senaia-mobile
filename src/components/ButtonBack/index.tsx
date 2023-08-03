/* eslint-disable react-native/no-inline-styles */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################

import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Containers, Title, ViewRow } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonBack({ title, ...rest }: Props) {
  return (
    <Containers {...rest}>
      <ViewRow>
        <Icon
          style={{ marginRight: 5, marginLeft: 5 }}
          name="md-arrow-back"
          color="#000000"
          size={40}
        />
        <Title>{title}</Title>
      </ViewRow>
    </Containers>
  );
}
