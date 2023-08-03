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

export function ButtonNext({ title, ...rest }: Props) {
  return (
    <Containers {...rest}>
      <ViewRow>
        <Title>{title}</Title>
        <Icon
          style={{ marginRight: 10, marginLeft: 10 }}
          name="md-arrow-forward"
          color="#000000"
          size={40}
        />
      </ViewRow>
    </Containers>
  );
}
