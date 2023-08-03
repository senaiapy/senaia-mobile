/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unstable-nested-components */
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 12:40:56
 * @ Description:
 */

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import * as React from 'react';
import { useCallback, useEffect, useLayoutEffect } from 'react';
import { FlatList, Image, Pressable, Text } from 'react-native';

import type { User } from '@/api/hooks/users/types';
import useUsers from '@/api/hooks/users/useUsers';
import { useNavigationBackAction } from '@/hooks/useNavigationBack';
import type { GenericNavigationProps } from '@/routesOLD/types';

const UsersList: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const goBack = useNavigationBackAction();
  const {
    isLoading: usersLoading,
    data: usersData,
    refetch: getAllUsers,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useUsers({ per_page: 5 });

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

  useFocusEffect(
    useCallback(() => {
      getAllUsers();
    }, [getAllUsers])
  );

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => <Pressable onPress={goBack} />,
      headerTitle: () => <Text>UsersList</Text>,
    });
  }, [goBack, setOptions]);

  useEffect(() => {
    console.log(usersData);
  }, [usersData]);

  return (
    <FlatList
      data={flattenUsersList}
      renderItem={renderItem}
      onRefresh={getAllUsers}
      refreshing={usersLoading}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={isFetchingNextPage ? <Text>Loading</Text> : null}
    />
  );
};

export default React.memo(UsersList);
