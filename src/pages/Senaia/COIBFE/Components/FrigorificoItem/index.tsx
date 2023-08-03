import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type CoibfeFrigorificoModel from '@/database/model/CoibfeFrigorifico';

type Props = {
  frigorificoname: string;
  totalComments: number;
  frigorifico: CoibfeFrigorificoModel;
  onPress: () => void;
};

const FrigorificoItem = ({ frigorifico, totalComments, onPress }: Props) => (
  <TouchableOpacity style={styles.frigorifico} onPress={onPress}>
    <Text style={styles.title}>{frigorifico.frigorificoname}</Text>
    <Text style={styles.count}>{totalComments}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  frigorifico: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#544a4a',
  },
  title: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '500',
    color: 'blue',
  },
  count: {
    color: '#b61818',
  },
});

const withModels = withObservables(
  ['frigorifico'],
  ({ frigorifico }: Props) => {
    const frigorifico$ = frigorifico.observe();

    return {
      frigorifico: frigorifico$,
      //  totalComments: frigorifico$.pipe(switchMap(frigorifico => frigorifico.comments.observeCount())),
    };
  }
);

export default withModels(FrigorificoItem);
