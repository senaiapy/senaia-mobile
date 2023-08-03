/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
import type { Database } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import type CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';

import CoibfeItem from '../CoibfeItem';

interface TCoibfes {
  coibfeid: string;
  coibfekey: string;
  coibfetoken: string;
  coibfecodigov: string;
  coibfedestino: string;
  coibfefinalidad: string;
  coibfetransporte: string;
  coibfeaninovillos: string;
  coibfeanitoros: string;
  coibfeanivacas: string;
  coibfeanivaquillas: string;
  coibfeaniotros: string;
  coibfeanitotal: string;
  coibfeanihilton: string;
  coibfetecnico_vpa_id: string;
  coibfetecniconame: string;
  coibfefrigorificoname: string;
  coibfefrigorifico_id: string;
  coibfeproductorname: string;
  coibfeproductor_id: string;
  coibfeproductorsitrap: string;
  coibfepropriedadname: string;
  coibfepropriedad_id: string;
  coibfepropriedadsigor: string;
  coibfepropriedadsitrap: string;
  coibfepropriedaddepartamento: string;
  coibfepropriedaddistrito: string;
  coibfepropriedad_productor_id: string;
  coibfeprecinto1: string;
  coibfeprecinto2: string;
  coibfeprecinto3: string;
  coibfepos_id: string;
  coibfeposlatitud: string;
  coibfeposlongitud: string;
  coibfeposdate: string;
  coibfeposapikeymobile: string;
  coibfeobs: string;
  coibfedocnroprop: string;
  coibfedocdigprop: string;
  coibfedocorigabrev: string;
  coibfedoctipoabrev: string;
  coibfeerrocode: string;
  coibfeerromessage: string;
  coibfeanimales: string;
  coibfe_issinc: string;
}

type Props = {
  database: Database;
  search: string;
  coibfes: CoibfeCoibfeModel[];
  coibfess: TCoibfes;
  setCoibfess: (coibfess: TCoibfes) => { coibfess?: TCoibfes };
};

const CoibfeList = ({ coibfes, coibfess, setCoibfess }: Props) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.rows}>
        <Text style={styles.count}>Cod.={coibfess.coibfeid}</Text>
        <Text style={styles.count}>Coibfess={coibfes.length}</Text>
      </View>
      <View>
        <FlatList
          data={coibfes.slice().reverse()}
          style={styles.list}
          renderItem={({ item: coibfe }) => (
            // @ts-ignore
            <CoibfeItem
              key={coibfe.coibfeid}
              coibfe={coibfe}
              onPress={() => {
                Vibration.vibrate();
                setCoibfess({
                  ...coibfess,
                  coibfeid: String(coibfe.coibfeid),
                  coibfekey: String(coibfe.coibfekey),
                  coibfetoken: String(coibfe.coibfetoken),
                  coibfecodigov: String(coibfe.coibfecodigov),
                  coibfedestino: String(coibfe.coibfedestino),
                  coibfefinalidad: String(coibfe.coibfefinalidad),
                  coibfetransporte: String(coibfe.coibfetransporte),
                  coibfeaninovillos: String(coibfe.coibfeaninovillos),
                  coibfeanitoros: String(coibfe.coibfeanitoros),
                  coibfeanivacas: String(coibfe.coibfeanivacas),
                  coibfeanivaquillas: String(coibfe.coibfeanivaquillas),
                  coibfeaniotros: String(coibfe.coibfeaniotros),
                  coibfeanitotal: String(coibfe.coibfeanitotal),
                  coibfeanihilton: String(coibfe.coibfeanihilton),
                  coibfetecnico_vpa_id: String(coibfe.coibfetecnico_vpa_id),
                  coibfetecniconame: String(coibfe.coibfetecniconame),
                  coibfefrigorificoname: String(coibfe.coibfefrigorificoname),
                  coibfefrigorifico_id: String(coibfe.coibfefrigorifico_id),
                  coibfeproductorname: String(coibfe.coibfeproductorname),
                  coibfeproductor_id: String(coibfe.coibfeproductor_id),
                  coibfeproductorsitrap: String(coibfe.coibfeproductorsitrap),
                  coibfepropriedadname: String(coibfe.coibfepropriedadname),
                  coibfepropriedad_id: String(coibfe.coibfepropriedad_id),
                  coibfepropriedadsigor: String(coibfe.coibfepropriedadsigor),
                  coibfepropriedadsitrap: String(coibfe.coibfepropriedadsitrap),
                  coibfepropriedaddepartamento: String(
                    coibfe.coibfepropriedaddepartamento
                  ),
                  coibfepropriedaddistrito: String(
                    coibfe.coibfepropriedaddistrito
                  ),
                  coibfepropriedad_productor_id: String(
                    coibfe.coibfepropriedad_productor_id
                  ),
                  coibfeprecinto1: String(coibfe.coibfeprecinto1),
                  coibfeprecinto2: String(coibfe.coibfeprecinto2),
                  coibfeprecinto3: String(coibfe.coibfeprecinto3),
                  coibfepos_id: String(coibfe.coibfepos_id),
                  coibfeposlatitud: String(coibfe.coibfeposlatitud),
                  coibfeposlongitud: String(coibfe.coibfeposlongitud),
                  coibfeposdate: String(coibfe.coibfeposdate),
                  coibfeposapikeymobile: String(coibfe.coibfeposapikeymobile),
                  coibfeobs: String(coibfe.coibfeobs),
                  coibfedocnroprop: String(coibfe.coibfedocnroprop),
                  coibfedocdigprop: String(coibfe.coibfedocdigprop),
                  coibfedocorigabrev: String(coibfe.coibfedocorigabrev),
                  coibfedoctipoabrev: String(coibfe.coibfedoctipoabrev),
                  coibfeerrocode: String(coibfe.coibfeerrocode),
                  coibfeerromessage: String(coibfe.coibfeerromessage),
                  coibfeanimales: String(coibfe.coibfeanimales),
                  coibfe_issinc: String(coibfe.coibfe_issinc),
                });
                // -------------------------------
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
      coibfes: database
        .get<CoibfeCoibfeModel>('coibfecoibfes')
        .query(Q.where('coibfeid', Q.like(`%${query}%`)))
        .observe(),
    };
  }
);

export default withDatabase(withModels(CoibfeList));
