//########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  2022-02-10
//########################################
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '@/core';

const DashboardScreen: React.FC = () => {
  //const { signOut } = useContext(AuthContext);
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>user</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default DashboardScreen;
