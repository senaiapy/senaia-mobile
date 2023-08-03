import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

export interface RateBarProps extends ViewProps {
  hint: string;
  value: number;
  onValueChange: (value: number) => void;
}

export const RateBar = (props: RateBarProps): React.ReactElement<ViewProps> => {
  const { hint, ...restProps } = props;

  return (
    <View {...restProps} style={[styles.container, restProps.style]}>
      <Text style={styles.hint}>{hint}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hint: {
    marginRight: 8,
    fontSize: 10,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
