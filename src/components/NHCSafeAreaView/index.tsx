import type { FC } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyle } from '@/theme';
type Edge = {
  Edge: any;
};

interface ISAW {
  children: any;
  readonly edges?: Edge[];
  areaStyle?: StyleProp<ViewStyle>;
}

const NHCSafeAreaView: FC<ISAW> = ({
  children,
  edges = ['top', 'right', 'left'],
  areaStyle = {},
}) => {
  return (
    <SafeAreaView
      style={[globalStyle.SafeAreaViewStyle, areaStyle]}
      edges={edges}
    >
      {children}
    </SafeAreaView>
  );
};

export default NHCSafeAreaView;
