import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { createApolloClient } from '@/common/config/apollo-client';

const apolloClient = createApolloClient();

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer children={undefined} />
    </ApolloProvider>
  );
};

export default App;
