import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type CoibfePropriedadModel from '@/database/model/CoibfePropriedad';

type Props = {
  propriedad: CoibfePropriedadModel;
};

const Propriedad = ({ propriedad }: Props) => (
  <View style={styles.propriedad}>
    <Text>{propriedad.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  propriedad: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#676262',
  },
});

const withModels = withObservables(['propriedad'], ({ propriedad }: Props) => ({
  propriedad: propriedad.observe(),
}));

export default withModels(Propriedad);
