/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:40:23
 * @ Description:
 */

//---------------------- Query Rest ------------------------------
//---------------------- Query Rest ------------------------------
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Image, Pressable, ScrollView, Text, View } from 'react-native';

import type { GenericNavigationProps } from '@/routesOLD/types';
import { getObjs } from '@/services/crudQuery/objs/objs';
import type { Obj } from '@/services/crudQuery/objs/types';
import {
  useCreateObj,
  useDeleteObj,
  useModifyObj,
  useObj,
  useObjId,
  useObjs,
} from '@/services/crudQuery/objs/useObj';

export const Homepage = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const [users, setUsers] = useState<Obj | undefined>();

  // ---------------------QUERY CRUD-------------------------
  const endpoint: string = 'users';
  const endpoints: string = 'users';
  const [datas, setDatas] = useState<Obj | undefined>();
  const [objId, setObjId] = useState<any>(0);
  const { mutate: createObj } = useCreateObj<Obj | undefined>(endpoint, datas);
  const { mutate: modifyObj } = useModifyObj<Obj | undefined>(
    endpoint,
    objId,
    datas
  );

  const { mutate: deleteObj } = useDeleteObj<Obj | undefined>(endpoint, datas);

  const {
    isLoading: objsLoading,
    data: objsData,
    refetch: geObjs,
  } = useObjs<Obj>(endpoints);

  const { isLoading, data: getObj } = useObj<Obj | undefined>(endpoint, {
    objId: objId,
  });

  const onGotoUserDetails = useCallback(
    (userId: any) => {
      navigation.navigate('UserDetails', {
        userId,
      });
    },
    [navigation]
  );
  // ---------------------QUERY CRUD-------------------------

  const renderItem = useCallback(
    ({ item }: { item: Obj }) => (
      <Pressable onPress={() => onGotoUserDetails(item?.id)}>
        <Image source={{ uri: item?.avatar }} />
        <Text>{`${item.first_name} ${item.last_name}`}</Text>
      </Pressable>
    ),
    [onGotoUserDetails]
  );

  //---------------------- Query Rest ------------------------------
  const loadobjOBJ = async () => {
    await getObjs<Obj>(endpoints, {});
    /*
    [{"avatar": "https://reqres.in/img/faces/1-image.jpg",
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "id": 1,
    "last_name": "Bluth"},
    {"avatar": "https://reqres.in/img/faces/2-image.jpg",
    "email": "janet.weaver@reqres.in",
    "first_name":
    "Janet",
    "id": 2, "last_name": "Weaver"},
    {"avatar": "https://reqres.in/img/faces/3-image.jpg",
     "email": "emma.wong@reqres.in",
     "first_name":
     "Emma", "id": 3, "last_name": "Wong"},
     {"avatar": "https://reqres.in/img/faces/4-image.jpg", "email": "eve.holt@reqres.in", "first_name": "Eve", "id": 4, "last_name": "Holt"}, {"avatar": "https://reqres.in/img/faces/5-image.jpg", "email": "charles.morris@reqres.in", "first_name": "Charles", "id": 5, "last_name": "Morris"}]
    //let value0: any = objsData?.pages[0].data;
    // let value1: any = usersData?.pages[1].data;
    // let value2: any = usersData?.pages[2].data;
    //    console.log(value0[0].avatar);
    //    console.log(value0[0].email);
    //    console.log(value0[0].first_name);
    //    console.log(value0[0].id);
    //    console.log(value0[0].last_name);
    if (Array.isArray(value0) && value0.length) {
      // TODO: only send if not sinc CIERRE
      value0.forEach(async element => {
        console.log(element);
      });
    }
    */
  };

  async function creates(endpointss: string, dadus: any) {
    const returno = createObj<Obj>(endpoint, dadus);
    console.log('create', returno);
  }

  async function list(endpointss: string, userId: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let data = await useObjId<Obj>(endpointss, userId);
    console.log('LIST', JSON.stringify(data));
    return data;
  }

  async function lists(endpointss: string) {
    await getObjs<Obj>(endpointss, {});
    console.log('LISTS', JSON.stringify(objsData));
    return getObjs;
  }

  async function listsPage(endpointss: string) {
    await getObjs<Obj>(endpointss, {});
    console.log('LISTS', JSON.stringify(objsData));
    return getObjs;
  }

  async function updates(endpointss: string, ids: any, dadus: any) {
    const data = modifyObj<Obj>(endpointss, ids, dadus);
    console.log('UPDATE', JSON.stringify(data));
    return data;
  }

  async function deletes(endpointss: string, ids: any) {
    const data = deleteObj<Obj>(endpointss, ids);
    console.log('DELETE', JSON.stringify(data));
    return data;
  }
  // ---------------------QUERY CRUD-------------------------

  useEffect(() => {
    let dadus = list(endpoint, 1);
    console.log(dadus);
  }, [getObj]);

  return (
    <ScrollView>
      {isLoading && <Text>fullPage</Text>}

      <Text>releasedWithLove</Text>

      <Button
        title="List Obj"
        onPress={() => {
          list(endpoint, 1);
        }}
      />

      <Button
        title="List ObjS"
        onPress={() => {
          lists(endpoints);
        }}
      />

      <Button
        title="List ObjPage"
        onPress={() => {
          listsPage(endpoint);
        }}
      />

      <Button
        title="Create Obj"
        onPress={() =>
          creates(endpoint, {
            name: 'Jil',
            job: 'some-title-edited',
          })
        }
      />

      <Button
        title="Update Obj"
        onPress={() =>
          updates(endpoint, 555, { name: 'Jilo', job: 'some-title-editeds' })
        }
      />

      <Button title="Del Obj" onPress={() => deletes(endpoint, 147)} />

      <Button title="Modals" onPress={() => navigation.navigate('ModalPage')} />

      <View>
        <Image
          style={{ alignItems: 'center', width: 100, height: 100 }}
          source={{ uri: getObj?.data?.avatar }}
        />
        <Text>{`${getObj?.data?.first_name} ${getObj?.data?.last_name}`}</Text>
        <Text>{getObj?.data?.email}</Text>
      </View>
    </ScrollView>
  );
};
/*
    <FlatList
      data={flattenUsersList}
      renderItem={renderItem}
      onRefresh={getAllUsers}
      refreshing={usersLoading}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={isFetchingNextPage ? <Text>Loading</Text> : null}
    />
*/
