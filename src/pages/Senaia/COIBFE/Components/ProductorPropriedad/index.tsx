import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type CoibfeProductorModel from '@/database/model/CoibfeProductor';

type Props = {
  productor: CoibfeProductorModel;
};

const ProductorPropiedad = ({ productor }: Props) => (
  <View style={styles.productor}>
    <Text>{productor.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  productor: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#7f7777',
  },
});

const withModels = withObservables(['productor'], ({ productor }: Props) => ({
  productor: productor.observe(),
}));

export default withModels(ProductorPropiedad);
