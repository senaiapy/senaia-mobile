import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type CoibfeProductorModel from '@/database/model/CoibfeProductor';

type Props = {
  productor: CoibfeProductorModel;
};

const Productor = ({ productor }: Props) => (
  <View style={styles.productor}>
    <Text>{productor.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  productor: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

const withModels = withObservables(['productor'], ({ productor }: Props) => ({
  productor: productor.observe(),
}));

export default withModels(Productor);
