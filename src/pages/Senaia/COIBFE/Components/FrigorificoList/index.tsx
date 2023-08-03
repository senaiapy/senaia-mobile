import type { Database } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import type CoibfeFrigorificoModel from '@/database/model/CoibfeFrigorifico';

import FrigorificoItem from '../FrigorificoItem';

interface TFrigorificos {
  frigorificoname?: string;
  frigorifico_id?: string;
  frigorificodepartamento?: string;
  frigorificokeyprivate?: string;
  frigorificostatus?: string;
}
type Props = {
  database: Database;
  search: string;
  frigorificos: CoibfeFrigorificoModel[];
  frigorificoss: TFrigorificos;
  setFrigorificoss: (frigorificoss: TFrigorificos) => {
    frigorificoss: TFrigorificos;
  };
};

const FrigorificoList = ({
  frigorificos,
  frigorificoss,
  setFrigorificoss,
}: Props) => {
  return (
    <>
      <View style={styles.rows}>
        <Text style={styles.count}>Cod.={frigorificoss.frigorifico_id}</Text>
        <Text style={styles.count}>Frigs={frigorificos.length}</Text>
      </View>
      <View>
        <FlatList
          data={frigorificos.slice().reverse()}
          style={styles.list}
          renderItem={({ item: frigorifico }) => (
            // @ts-ignore
            <FrigorificoItem
              key={frigorifico.frigorifico_id}
              frigorifico={frigorifico}
              onPress={() => {
                Vibration.vibrate();
                setFrigorificoss({
                  ...frigorificoss,
                  frigorifico_id: String(frigorifico.frigorifico_id),
                  frigorificoname: String(frigorifico.frigorificoname),
                  frigorificodepartamento: String(
                    frigorifico.frigorificodepartamento
                  ),
                  frigorificokeyprivate: String(
                    frigorifico.frigorificokeyprivate
                  ),
                  frigorificostatus: String(frigorifico.frigorificostatus),
                });
                //console.log('PROP', frigorifico);
                // navigation.navigate('Frigorifico', {
                //   frigorifico_id: frigorifico.frigorifico_id,
                // });
              }}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  count: {
    fontSize: 10,
    paddingVertical: 5,
    color: '#9c1111',
    textAlign: 'center',
  },
});

const withModels = withObservables(
  ['search'],
  ({ database, search }: Props) => {
    const query = Q.sanitizeLikeString(search);

    return {
      frigorificos: database
        .get<CoibfeFrigorificoModel>('coibfefrigorificos')
        .query(Q.where('frigorificoname', Q.like(`%${query}%`)))
        .observe(),
    };
  }
);

export default withDatabase(withModels(FrigorificoList));
