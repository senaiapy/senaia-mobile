/* eslint-disable react-native/no-inline-styles */
/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import { Dimensions, Text, View } from 'react-native';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/wallpaper_6.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

import { Env } from '@env';

import { useGetCharactersQuery } from '@/common/generated/graphql';
import Loader from '@/components/loader';
import type { Item } from '@/type/Item';
let APPL = false;
let APPT = false;

if (Env.APPINIT === 'Lazos') {
  APPL = true;
}

if (Env.APPINIT === 'TVbox') {
  APPT = true;
}

export type Props = {
  datas: Item;
  navigatePage: any;
};

const ProfileScreen: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const { data, loading } = useGetCharactersQuery();

  return (
    <View
      style={{
        ...styles,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Loader visible={loading} />
      <Text style={{ fontSize: 40 }}>Profile Screen</Text>
      <Text style={{ fontSize: 20 }}>Welcome to the Profile screen</Text>
    </View>
  );
};

export default ProfileScreen;
