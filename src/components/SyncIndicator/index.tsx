/**
 * @ Author: Your name
 * @ Create Time: 2022-02-08 21:08:37
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:52:08
 * @ Description:
 */

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { server } from '@/database/data/server';
import { sync } from '@/database/data/sync';

import { syncStyles } from './styles';

const SyncIndicator = () => {
  const [syncState, setSyncState] = useState<string>('Syncing data...');
  const [syncState2, setSyncState2] = useState<string>('...');

  useEffect(() => {
    sync()
      .then(() => setSyncState(''))
      .catch(() => setSyncState('nSync!.'));
    server()
      .then(() => setSyncState2('...On...'))
      .catch(() => setSyncState2('..!..'));
  });

  if (!syncState) {
    return null;
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flexDirection: 'row' }}>
      <Text style={syncStyles.text}>{syncState}</Text>
      <Text style={syncStyles.text}>{syncState2}</Text>
    </View>
  );
};

export default SyncIndicator;
