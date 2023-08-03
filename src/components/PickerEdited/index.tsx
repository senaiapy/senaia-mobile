//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import { StyleSheet } from 'react-native';
import type { Item } from 'react-native-picker-select';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '@/utils/theme';

import { AddButton, ViewPicker } from './styles';

type PickerType = {
  placeholderLabel?: string;
  items: Item[];
  onValueChange: (value: any, index?: number) => void;
};

export const PickerEdited = (props: PickerType) => {
  const { items, onValueChange, placeholderLabel } = props;

  return (
    <ViewPicker>
      <RNPickerSelect
        placeholder={{
          label: placeholderLabel ? placeholderLabel : 'Select',
          value: null,
          color: '#9EA0A4',
        }}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        onValueChange={onValueChange}
        items={items}
      />
      <AddButton>
        <Icon name="ios-add-circle" size={30} color="grey" />
      </AddButton>
    </ViewPicker>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    height: 60,
    color: COLORS.placeHolder,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 60,
    borderRadius: 8,
    color: COLORS.placeHolder,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
