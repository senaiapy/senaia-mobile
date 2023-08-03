import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

export interface ProfileSocialProps extends ViewProps {
  hint: string;
  value: string;
}

export const ProfileSocial = (
  props: ProfileSocialProps
): React.ReactElement => {
  const { style, value, ...viewProps } = props;

  return (
    <View {...viewProps} style={[styles.container, style]}>
      <Text>{value}</Text>
      <Text>{props.hint}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
