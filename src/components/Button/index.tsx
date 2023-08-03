// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################

import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { ContainersS, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ContainersS {...rest}>
      <Title>{title}</Title>
    </ContainersS>
  );
}
