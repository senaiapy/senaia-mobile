import React from 'react';
import { FlatList, View } from 'react-native';

import CharacterCard from '@/common/components/CharacterCard';
import type { Character } from '@/common/generated/graphql';
import { useGetCharactersQuery } from '@/common/generated/graphql';
import Loader from '@/components/loader';
import type { Item } from '@/type/Item';

import styles from './styles';

export type Props = {
  datas: Item;
  navigatePage: any;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const ListScreen: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const { data, loading } = useGetCharactersQuery();

  return (
    <View style={styles.container} testID="container">
      <FlatList
        data={data?.characters?.results}
        renderItem={({ item }) => <CharacterCard data={item as Character} />}
        contentContainerStyle={styles.characterList}
      />
      <Loader visible={loading} />
    </View>
  );
};
export default ListScreen;
