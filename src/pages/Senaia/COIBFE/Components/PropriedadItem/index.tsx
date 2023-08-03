import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type CoibfePropriedadModel from '@/database/model/CoibfePropriedad';

type Props = {
  propriedadname: string;
  totalComments: number;
  propriedad: CoibfePropriedadModel;
  onPress: () => void;
};

const PropriedadItem = ({ propriedad, totalComments, onPress }: Props) => (
  <TouchableOpacity style={styles.propriedad} onPress={onPress}>
    <Text style={styles.title}>{propriedad.propriedadname}</Text>
    <Text style={styles.count}>{totalComments}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  propriedad: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#564f4f',
  },
  title: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '500',
    color: 'blue',
  },
  count: {
    color: '#9c1111',
  },
});

const withModels = withObservables(['propriedad'], ({ propriedad }: Props) => {
  const propriedad$ = propriedad.observe();

  return {
    propriedad: propriedad$,
    // totalComments: propriedad$.pipe(switchMap(propriedad => propriedad.comments.observeCount())),
  };
});

export default withModels(PropriedadItem);
