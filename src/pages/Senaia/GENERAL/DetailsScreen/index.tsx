/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React, { memo } from 'react';
import { Text, View } from 'react-native';

// import {
//   Character,
//   useGetCharactersQuery,
// } from '@/common/generated/graphql';

// ############### internationalization #######################
// ############### internationalization #######################

//  import CharacterCard from '@/common/components/CharacterCard';
const DetailsScreen: React.FC = ({}: any) => {
  // const { data, loading } = useGetCharactersQuery();

  return (
    <>
      {/* Datos Server */}
      {/*
      <FlatList
        data={data?.characters?.results}
        renderItem={({ item }) => <CharacterCard data={item as Character} />}
        contentContainerStyle={styles.characterList}
      />
      */}
      {/* Datos Server */}
      {/* Page */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40 }}>Details Screen</Text>
        <Text style={{ fontSize: 20 }}>Welcome to the Details screen</Text>
      </View>
      {/* Page */}
    </>
  );
};

export default memo(DetailsScreen);
