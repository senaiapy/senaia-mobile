import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';

type Props = {
  coibfeid: string;
  totalComments: number;
  coibfe: CoibfeCoibfeModel;
  onPress: () => void;
};

const CoibfeItem = ({ coibfe, totalComments, onPress }: Props) => (
  <TouchableOpacity style={styles.coibfe} onPress={onPress}>
    <Text style={styles.title}>{coibfe.coibfeid}</Text>
    <Text style={styles.count}>{totalComments}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  coibfe: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '500',
    color: 'blue',
  },
  count: {
    color: '#888',
  },
});

const withModels = withObservables(['coibfe'], ({ coibfe }: Props) => {
  const coibfe$ = coibfe.observe();

  return {
    coibfe: coibfe$,
    //  totalComments: coibfe$.pipe(
    //    switchMap(coibfe => coibfe.comments.observeCount()),
    //  ),
  };
});

export default withModels(CoibfeItem);
