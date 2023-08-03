// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Containers, Icon, Name, Option, Options } from './styles';

export type SkillProps = {
  id: string;
  name: string;
  type: string;
};

type Props = {
  data: SkillProps;
  onRemove: () => void;
  onEdit: () => void;
};

export function Skill({ data, onRemove, onEdit }: Props) {
  return (
    <Containers>
      <Icon type={data.type}>
        <Ionicons
          name={data.type === 'soft' ? 'ios-gift' : 'ios-hammer'}
          color="#FFF"
          size={20}
        />
      </Icon>

      <Name>{data.name}</Name>

      <Options>
        <Option onPress={onEdit}>
          <Ionicons name="ios-brush" color="#FEDC43" size={20} />
        </Option>

        <Option onPress={onRemove}>
          <Ionicons name="ios-trash" color="#EE3B45" size={20} />
        </Option>
      </Options>
    </Containers>
  );
}
