/* eslint-disable react/no-unstable-nested-components */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type { FC } from 'react';
import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

// ############### internationalization #######################
import { translate } from '@/core';
import { About, Profile, Setting } from '@/pages/Core';
import { colors } from '@/theme/appTheme';
// ############### internationalization #######################

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator: FC = () => {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{ paddingTop }}
      screenOptions={({ route }) => ({
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: 'black',
        tabBarPressColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: 'white',
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({}) => {
          let iconName: any;
          switch (route.name) {
            case 'Setting':
              iconName = <Icon name="settings" color={colors.primary} />;
              break;
            case 'About':
              iconName = <Icon name="call" color={colors.primary} />;
              break;
            case 'Profile':
              iconName = <Icon name="person" color={colors.primary} />;
              break;
          }
          return <Text>{iconName}</Text>;
        },
      })}
    >
      <TopTab.Screen
        name="Setting"
        options={{ title: translate('navigation.Setting') }}
        component={Setting}
      />
      <TopTab.Screen
        name="Profile"
        options={{ title: translate('navigation.Profile') }}
        component={Profile}
      />
      <TopTab.Screen
        name="About"
        options={{ title: translate('navigation.About') }}
        component={About}
      />
    </TopTab.Navigator>
  );
};
