/* eslint-disable unused-imports/no-unused-vars */
// @ts-nocheck

import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

import type { Item } from '@/type/Item';

// import { useGetShoppingCartQuery } from '@/common/generated/graphql';
import styles from './styles';

export type Props = {
  datas: Item;
  navigatePage: any;
};

const CartScreen: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  // const { data } = useGetShoppingCartQuery();

  const handleNavigation = useCallback(
    () => navigation.navigate('Home'),
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      {data?.shoppingCart?.numActionFigures ? (
        <>
          <View style={styles.content} testID="fulfilled-cart">
            <Text style={styles.emoji}>🤗</Text>
            <Text
              style={styles.subtitle}
            >{`Total number of items: ${data?.shoppingCart.numActionFigures}`}</Text>
            <Text
              style={styles.subtitle}
            >{`Total price: G$ ${data?.shoppingCart.totalPrice}`}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.content} testID="empty-cart">
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.title}>Empty cart!</Text>
            <View style={styles.footer}>
              <Button title="Go back to shop" onPress={handleNavigation} />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
