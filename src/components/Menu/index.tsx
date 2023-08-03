// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################

import React from 'react';

import { MenuItem } from '../MenuItem';
import { Containers } from './styles';

export type MenuTypeProps = 'soft' | 'hard';

type Props = {
  type: string;
  setType: (value: MenuTypeProps) => void;
};

export function Menu({ type, setType }: Props) {
  return (
    <Containers>
      <MenuItem
        title="Normal"
        isActive={type === 'soft'}
        onPress={() => setType('soft')}
      />

      <MenuItem
        title="Urgente"
        isActive={type === 'hard'}
        onPress={() => setType('hard')}
      />
    </Containers>
  );
}
