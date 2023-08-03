/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export type Icon = {
  name: string;
  type?: string;
};

export type IconPickerProps = {
  icons?: Icon[];
  onSelect?: (icon: Icon) => void;
  selectedIcon?: Icon;
};

const defaultIcons = [
  { type: 'FontAwesome', name: 'comments' },
  { type: 'FontAwesome', name: 'font' },
  { type: 'FontAwesome', name: 'font-awesome' },
  { type: 'FontAwesome', name: 'rocket' },
  { type: 'MaterialCommunityIcons', name: 'account-circle' },
  { type: 'MaterialCommunityIcons', name: 'alarm' },
  { type: 'MaterialCommunityIcons', name: 'apps' },
  { type: 'MaterialCommunityIcons', name: 'attachment' },
  { type: 'MaterialCommunityIcons', name: 'autorenew' },
  { type: 'MaterialCommunityIcons', name: 'check' },
  { type: 'MaterialCommunityIcons', name: 'close' },
  { type: 'MaterialCommunityIcons', name: 'layers' },
  { type: 'MaterialCommunityIcons', name: 'star' },
];

export function IconPicker({
  icons = defaultIcons,
  onSelect = (icon: Icon) => {},
  selectedIcon = defaultIcons[0],
}: IconPickerProps) {
  return (
    <FlatList
      data={icons}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.circle,
            { borderColor: selectedIcon === item ? '#eee' : '#fff' },
          ]}
          onPress={() => {
            onSelect(item);
          }}
        >
          {item.type === 'AntDesign' && (
            <AntDesign name={item.name} style={styles.icon} />
          )}
          {item.type === 'Entypo' && (
            <Entypo name={item.name} style={styles.icon} />
          )}
          {item.type === 'EvilIcons' && (
            <EvilIcons name={item.name} style={styles.icon} />
          )}
          {item.type === 'Feather' && (
            <Feather name={item.name} style={styles.icon} />
          )}
          {item.type === 'FontAwesome' && (
            <FontAwesome name={item.name} style={styles.icon} />
          )}
          {item.type === 'FontAwesome5' && (
            <FontAwesome5 name={item.name} style={styles.icon} />
          )}
          {item.type === 'Fontisto' && (
            <Fontisto name={item.name} style={styles.icon} />
          )}
          {item.type === 'Foundation' && (
            <Foundation name={item.name} style={styles.icon} />
          )}
          {item.type === 'Ionicons' && (
            <Ionicons name={item.name} style={styles.icon} />
          )}
          {item.type === 'MaterialIcons' && (
            <MaterialIcons name={item.name} style={styles.icon} />
          )}
          {item.type === 'MaterialCommunityIcons' && (
            <MaterialCommunityIcons name={item.name} style={styles.icon} />
          )}
          {item.type === 'Octicons' && (
            <Octicons name={item.name} style={styles.icon} />
          )}
          {item.type === 'Zocial' && (
            <Zocial name={item.name} style={styles.icon} />
          )}
          {item.type === 'SimpleLineIcons' && (
            <SimpleLineIcons name={item.name} style={styles.icon} />
          )}
        </TouchableOpacity>
      )}
      keyExtractor={(item: Icon) => item.type + item.name}
      horizontal={true}
      keyboardShouldPersistTaps="always"
      style={{ maxHeight: 75 }}
    />
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  icon: { color: '#888', fontSize: 24 },
});
