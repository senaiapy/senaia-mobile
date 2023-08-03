import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';

type Props = {
  coibfe: CoibfeCoibfeModel;
};

const Coibfe = ({ coibfe }: Props) => (
  <View style={styles.coibfe}>
    <Text>{coibfe.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  coibfe: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

const withModels = withObservables(['coibfe'], ({ coibfe }: Props) => ({
  coibfe: coibfe.observe(),
}));

export default withModels(Coibfe);
