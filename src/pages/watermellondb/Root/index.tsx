// @ts-nocheck

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Button from '@/components/Buttons';
import PostList from '@/components/PostList';

//import {sync} from '@/database/data/sync';
// import dump from'@/services/watermellondbSync/dump';
// import sync, {triggerSync} from'@/services/watermellondbSync/sync';
// // triggerSync();
// dump();
// sync();

const Root = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  return (
    <>
      <View style={styles.head}>
        <Button
          title="Add Post"
          onPress={() => {
            navigation.navigate('NewPost');
          }}
        />

        <TextInput
          placeholder="Search Posts"
          value={search}
          style={styles.search}
          onChangeText={(text) => {
            setSearch(text);
          }}
        />
      </View>
      <PostList search={search} posts={[]} />
    </>
  );
};

const styles = StyleSheet.create({
  head: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  search: {
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default Root;
