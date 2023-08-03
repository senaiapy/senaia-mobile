/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import * as React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '@/utils/theme';

type IconType = {
  name: string;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
  color?: string;
  badgeNumber?: number;
};

export const Icon = (props: IconType) => {
  const { name, size, onPress, style, color, badgeNumber } = props;

  return (
    <View>
      <MaterialCommunityIcons
        onPress={onPress}
        style={style}
        color={color ? color : COLORS.primary}
        name={name}
        size={
          size === 'small'
            ? 20
            : size === 'medium'
            ? 30
            : size === 'large'
            ? 40
            : size === 'extra-large'
            ? 60
            : 30
        }
      />
      {badgeNumber && (
        <View
          style={{
            borderRadius: 30,
            height: 17,
            width: 17,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            backgroundColor: COLORS.backgroundOne,
            right: -5,
          }}
        >
          <Text>{badgeNumber}</Text>
        </View>
      )}
    </View>
  );
};
