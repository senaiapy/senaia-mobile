import type { Database } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import React from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import type CoibfeProductorModel from '@/database/model/CoibfeProductor';

import ProductorPropiedadItem from '../ProductorPropiedadItem';

interface TProductors {
  productorname?: string;
  productor_id?: string;
  productortoken?: string;
  productorsitrap?: string;
  productoracreditacion?: string;
  productor_propriedad_id?: string;
  productorpassword?: string;
  productormail?: string;
  productorphone?: string;
  productorissync?: string;

  productordocnroprop?: string;
  productordocdigprop?: string;
  productordocorigabrev?: string;
  productordoctipoabrev?: string;
  productorstatus?: string;
  productormessages?: string;
  productorkeyprivate?: string;
  productorapikeysoftware?: string;
}

type Props = {
  database: Database;
  search: string;
  filters: string;
  productors: CoibfeProductorModel[];
  productorss: TProductors;
  setProductorss: (productorss: TProductors) => {
    productorss: TProductors;
  };
};

const ProductorPropiedadList = ({
  productors,
  productorss,
  setProductorss,
}: Props) => {
  return (
    <>
      <View style={styles.rows}>
        <Text style={styles.count}>Cod.={productorss.productor_id}</Text>
        <Text style={styles.count}>Prods={productors.length}</Text>
      </View>
      <View>
        <FlatList
          data={productors.slice().reverse()}
          style={styles.list}
          renderItem={({ item: productor }) => (
            // @ts-ignore
            <ProductorPropiedadItem
              key={productor.productor_id}
              productor={productor}
              onPress={() => {
                Vibration.vibrate();
                setProductorss({
                  ...productorss,
                  productorname: String(productor.productorname),
                  productor_id: String(productor.productor_id),
                  productortoken: String(productor.productortoken),
                  productorsitrap: String(productor.productorsitrap),
                  productoracreditacion: String(
                    productor.productoracreditacion
                  ),
                  productor_propriedad_id: String(
                    productor.productor_propriedad_id
                  ),
                  productorpassword: String(productor.productorpassword),
                  productormail: String(productor.productormail),
                  productorphone: String(productor.productorphone),
                  productorissync: String(productor.productorissync),

                  productordocnroprop: String(productor.productordocnroprop),
                  productordocdigprop: String(productor.productordocdigprop),
                  productordocorigabrev: String(
                    productor.productordocorigabrev
                  ),
                  productordoctipoabrev: String(
                    productor.productordoctipoabrev
                  ),
                  productorstatus: String(productor.productorstatus),
                  productormessages: String(productor.productormessages),
                  productorkeyprivate: String(productor.productorkeyprivate),
                  productorapikeysoftware: String(
                    productor.productorapikeysoftware
                  ),
                });
                //console.log('PROP', productor);
                // navigation.navigate('Productor', {
                //   productor_id: productor.productor_id,
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
  ['search', 'filters'],
  ({ database, search, filters }: Props) => {
    const query = Q.sanitizeLikeString(search);
    console.log('FILTERS', filters);
    const filtro = filters.split(',');
    console.log('FILTERS', filtro);
    return {
      productors: database
        .get<CoibfeProductorModel>('coibfeproductors')
        .query(
          //  Q.where('productor_id', Q.like(`%${filters}%`)),
          Q.or(Q.where('productor_id', Q.oneOf(filtro))),
          Q.where('productorname', Q.like(`%${query}%`))
        )
        .observe(),
    };
  }
);

export default withDatabase(withModels(ProductorPropiedadList));
