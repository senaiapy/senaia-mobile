import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type CoibfeFrigorifico from '@/database/model/CoibfeFrigorifico';

type Props = {
  frigorifico: CoibfeFrigorifico;
};

const Frigorifico = ({ frigorifico }: Props) => (
  <View style={styles.frigorifico}>
    <Text>{frigorifico.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  frigorifico: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#665656',
  },
});

const withModels = withObservables(
  ['frigorifico'],
  ({ frigorifico }: Props) => ({
    frigorifico: frigorifico.observe(),
  })
);

export default withModels(Frigorifico);
