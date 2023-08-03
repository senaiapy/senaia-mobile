/* eslint-disable unused-imports/no-unused-vars */
import type { Database } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import type CoibfePropriedadModel from '@/database/model/CoibfePropriedad';

import PropriedadItem from '../PropriedadItem';

interface TPropriedads {
  propriedad_id?: string;
  propriedadname?: string;
  propriedadpropietario?: string;
  propriedadstatus?: string;
  propriedadsigor?: string;
  propriedadsitrap?: string;
  propriedaddepartamento?: string;
  propriedaddistrito?: string;
  propriedadproductors?: string;
}
type Props = {
  database: Database;
  search: string;
  propriedads: CoibfePropriedadModel[];
  propriedadss: TPropriedads;
  setPropriedadss: (propriedadss: TPropriedads) => {
    propriedadss: TPropriedads;
  };
};

const PropriedadList = ({
  propriedads,
  propriedadss,
  setPropriedadss,
}: Props) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.rows}>
        <Text style={styles.count}>Cod.={propriedadss.propriedadsigor}</Text>
        <Text style={styles.count}>Props={propriedads.length}</Text>
      </View>
      <FlatList
        data={propriedads.slice().reverse()}
        style={styles.list}
        renderItem={({ item: propriedad }) => (
          // @ts-ignore
          <PropriedadItem
            key={propriedad.propriedadsigor}
            propriedad={propriedad}
            onPress={() => {
              /*
               "propriedaddepartamento": "BOQUERON ",
        "propriedaddistrito": "TENIENTE ACOSTA",
        "propriedadname": "SAN RAMON",
        "propriedadproductors": "",
        "propriedadpropietario": "undefined",
        "propriedadsigor": "1717000001",
        "propriedadsitrap": "GASR",
        "propriedadstatus": "active",
              */
              Vibration.vibrate();
              setPropriedadss({
                ...propriedadss,
                propriedadname: String(propriedad.propriedadname),
                propriedadpropietario: String(propriedad.propriedadpropietario),
                propriedadstatus: String(propriedad.propriedadstatus),
                propriedadsigor: String(propriedad.propriedadsigor),
                propriedadsitrap: String(propriedad.propriedadsitrap),
                propriedaddepartamento: String(
                  propriedad.propriedaddepartamento
                ),
                propriedaddistrito: String(propriedad.propriedaddistrito),
                propriedadproductors: String(propriedad.propriedadproductors),
                // propriedadproductors: Object.assign(
                //   {},
                //   propriedad.propriedadproductors,
                // ),
              });
              // console.log('PROP', propriedad);
              //navigation.navigate('Propriedad', {
              //  propriedadsigor: propriedad.propriedadsigor,
              //});
            }}
          />
        )}
      />
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
      propriedads: database
        .get<CoibfePropriedadModel>('coibfepropriedads')
        .query(Q.where('propriedadname', Q.like(`%${query}%`)))
        .observe(),
    };
  }
);

export default withDatabase(withModels(PropriedadList));
