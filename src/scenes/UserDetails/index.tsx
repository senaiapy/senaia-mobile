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
 * @ Modified time: 2022-04-17 12:40:47
 * @ Description:
 */
import type { Route } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { FC } from 'react';
import { useLayoutEffect } from 'react';
import * as React from 'react';
import { Image, Pressable, ScrollView, Text } from 'react-native';

import { useUser } from '@/api/hooks/users/useUser';
import { useNavigationBackAction } from '@/hooks/useNavigationBack';
import type { GenericNavigationProps } from '@/routesOLD/types';

interface UserDetailsProps {
  userId: number;
}

const UserDetails: FC = () => {
  const route = useRoute<Route<'UserDetails', UserDetailsProps>>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const goBack = useNavigationBackAction();
  const userId = route?.params?.userId;
  const { isLoading, data: singleUserDetails } = useUser({ userId });

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => <Pressable onPress={goBack} />,
      headerTitle: () => <Text>UserDetails</Text>,
    });
  }, [goBack, setOptions]);

  return (
    <>
      {isLoading && <Text>fullPage</Text>}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: singleUserDetails?.data?.avatar }} />
        <Text>{`${singleUserDetails?.data?.first_name} ${singleUserDetails?.data?.last_name}`}</Text>
        <Text>{singleUserDetails?.data?.email}</Text>
      </ScrollView>
    </>
  );
};

export default UserDetails;
