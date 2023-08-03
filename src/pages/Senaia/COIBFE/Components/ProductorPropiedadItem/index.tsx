import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type CoibfeProductorModel from '@/database/model/CoibfeProductor';

type Props = {
  productorname?: string;
  totalComments: number;
  productor: CoibfeProductorModel;
  onPress: () => void;
};

const ProductorPropiedadItem = ({
  productor,
  totalComments,
  onPress,
}: Props) => (
  <TouchableOpacity style={styles.productor} onPress={onPress}>
    <Text style={styles.title}>{productor?.productorname}</Text>
    <Text style={styles.count}>{totalComments}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  productor: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#8b8383',
  },
  title: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '500',
    color: 'blue',
  },
  count: {
    color: '#ed0f0f',
  },
});

const withModels = withObservables(['productor'], ({ productor }: Props) => {
  const productor$ = productor.observe();

  return {
    productor: productor$,
    //totalComments: productor$.pipe(switchMap(productor => productor.comments.observeCount())),
  };
});

export default withModels(ProductorPropiedadItem);
