import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Buttons = ({ title, style, onPress }: Props) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.label}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#0af',
  },
  label: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Buttons;
