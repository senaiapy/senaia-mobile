/* eslint-disable unicorn/filename-case */

/* eslint-disable max-lines-per-function */

/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

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
import type { FC } from 'react';
import React, { memo, useCallback, useState } from 'react';
import { Button, Image, Pressable, ScrollView, Text, View } from 'react-native';

import type { User } from '@/api/hooks/users/types';
import {
  useCreateUser,
  useDeleteUser,
  useModifyUser,
  useUser,
  useUserId,
} from '@/api/hooks/users/useUser';
import useUsers from '@/api/hooks/users/useUsers';
import type { GenericNavigationProps } from '@/routesOLD/types';

interface UserDetailsProps {
  userId: number;
}

export type Objs = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const Homepage: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  //---------------------- Query Rest ------------------------------
  const { mutate: createUser } = useCreateUser();
  const { mutate: modifyUser } = useModifyUser();
  const { mutate: deleteUser } = useDeleteUser();
  const {
    isLoading: usersLoading,
    data: usersData,
    refetch: getUsers,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useUsers({ per_page: 5 });
  const [objId, setObjId] = useState<number>(2);

  const { isLoading, data: getUser } = useUser({ userId: objId });
  //---------------------- Query Rest ------------------------------

  //---------------------- Query Rest ------------------------------
  const flattenUsersList = usersData?.pages
    ? usersData.pages.flatMap((page) => [...(page?.data ?? [])])
    : [];

  const onGotoUserDetails = useCallback(
    (userId: number) => {
      navigation.navigate('UserDetails', {
        userId,
      });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }: { item: User }) => (
      <Pressable onPress={() => onGotoUserDetails(item?.id)}>
        <Image source={{ uri: item?.avatar }} />
        <Text>{`${item.first_name} ${item.last_name}`}</Text>
      </Pressable>
    ),
    [onGotoUserDetails]
  );

  const loadMore = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  const loadUsersPage = async () => {
    await getUsers();
    console.log(JSON.stringify(usersData));
    /*
    [{"avatar": "https://reqres.in/img/faces/1-image.jpg", "email": "george.bluth@reqres.in", "first_name": "George", "id": 1, "last_name": "Bluth"}, {"avatar": "https://reqres.in/img/faces/2-image.jpg", "email": "janet.weaver@reqres.in", "first_name": "Janet", "id": 2, "last_name": "Weaver"}, {"avatar": "https://reqres.in/img/faces/3-image.jpg", "email": "emma.wong@reqres.in", "first_name": "Emma", "id": 3, "last_name": "Wong"}, {"avatar": "https://reqres.in/img/faces/4-image.jpg", "email": "eve.holt@reqres.in", "first_name": "Eve", "id": 4, "last_name": "Holt"}, {"avatar": "https://reqres.in/img/faces/5-image.jpg", "email": "charles.morris@reqres.in", "first_name": "Charles", "id": 5, "last_name": "Morris"}]
    let value0: any = usersData?.pages[0].data;
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

  const loadUser = async (userIds: number) => {
    //const {data: UserDetail} = await useUser(userIds);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let data = await useUserId({ userId: userIds });
    console.log(JSON.stringify(data));
  };

  const loadUsers = async () => {
    await getUsers();
    /*
    [{"avatar": "https://reqres.in/img/faces/1-image.jpg", "email": "george.bluth@reqres.in", "first_name": "George", "id": 1, "last_name": "Bluth"}, {"avatar": "https://reqres.in/img/faces/2-image.jpg", "email": "janet.weaver@reqres.in", "first_name": "Janet", "id": 2, "last_name": "Weaver"}, {"avatar": "https://reqres.in/img/faces/3-image.jpg", "email": "emma.wong@reqres.in", "first_name": "Emma", "id": 3, "last_name": "Wong"}, {"avatar": "https://reqres.in/img/faces/4-image.jpg", "email": "eve.holt@reqres.in", "first_name": "Eve", "id": 4, "last_name": "Holt"}, {"avatar": "https://reqres.in/img/faces/5-image.jpg", "email": "charles.morris@reqres.in", "first_name": "Charles", "id": 5, "last_name": "Morris"}]
    */
    let value0: any = usersData?.pages[0].data;
    // let value1: any = usersData?.pages[1].data;
    // let value2: any = usersData?.pages[2].data;
    //    console.log(value0[0].avatar);
    //    console.log(value0[0].email);
    //    console.log(value0[0].first_name);
    //    console.log(value0[0].id);
    //    console.log(value0[0].last_name);
    if (Array.isArray(value0) && value0.length) {
      // TODO: only send if not sinc CIERRE
      value0.forEach(async (element) => {
        console.log(element);
      });
    }
  };
  //---------------------- Query Rest ------------------------------

  //  useEffect(() => {
  //    console.log(getUser);
  //  }, [getUser]);

  return (
    <ScrollView>
      {isLoading && <Text>fullPage</Text>}

      <Text>releasedWithLove</Text>

      <Button
        title="List User"
        onPress={() => {
          loadUser(1);
        }}
      />

      <Button
        title="List UserS"
        onPress={() => {
          loadUsers();
        }}
      />

      <Button
        title="List UserPage"
        onPress={() => {
          loadUsersPage();
        }}
      />

      <Button
        title="Create User"
        onPress={() => createUser({ name: 'John', job: 'some-title' })}
      />

      <Button
        title="Update User"
        onPress={() =>
          modifyUser({
            userId: '503',
            name: 'Jil',
            job: 'some-title-edited',
          })
        }
      />

      <Button title="Del User" onPress={() => deleteUser({ userId: '503' })} />

      <Button title="Modals" onPress={() => navigation.navigate('ModalPage')} />

      <View>
        <Image
          style={{ alignItems: 'center', width: 100, height: 100 }}
          source={{ uri: getUser?.data?.avatar }}
        />
        <Text>{`${getUser?.data?.first_name} ${getUser?.data?.last_name}`}</Text>
        <Text>{getUser?.data?.email}</Text>
      </View>
    </ScrollView>
  );
};

export default memo(Homepage);

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
