/* eslint-disable max-lines-per-function */
/* eslint-disable react-native/no-inline-styles */
import { useKeyboard } from '@react-native-community/hooks';
import React from 'react';
import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
// @ts-ignore
import SearchableDropdown from 'react-native-searchable-dropdown';

import { COLORS } from '@/utils/theme';

import { Icon } from '../Icon';

type SearchableDropDownType = {
  multi: boolean;
  selectedItems: object[] | string[] | number[] | { name: string; id: string };
  onItemSelect: (item: any) => void;
  onRemoveItem?: (item: any) => void;
  items: any[];
  onTextChange?: () => void;
  placeHolder?: string;
  defaultIndex?: string | number;
  itemStyle?: {
    padding?: string | number;
    marginTop?: string | number;
    backgroundColor?: string | number;
    borderColor?: string | number;
    borderWidth?: string | number;
    borderRadius?: string | number;
  };
  itemContainerStyle?: {
    maxHeight?: string | number;
  };
  textInputPropsStyles?: {
    padding?: string | number;
    borderWidth?: string | number;
    borderColor?: string | number;
    borderRadius?: string | number;
  };
  textInputProps?: {
    autoFocus?: boolean;
    underlineColorAndroid?: string;
  };
  nestedScrollEnabled?: boolean;
  onPress: () => void;
};
const SearchableDropDown = (props: SearchableDropDownType) => {
  const {
    multi,
    selectedItems,
    onItemSelect,
    onRemoveItem,
    nestedScrollEnabled,
    placeHolder,
    items,
    defaultIndex,
    itemStyle,
    textInputPropsStyles,
    textInputProps,
    onPress,
  } = props;

  const { keyboardHeight } = useKeyboard();
  const { height } = useWindowDimensions();
  const exceptKeyboardHeight = height - keyboardHeight - 110;

  return (
    <>
      <View style={styles.iconStyle}>
        <Icon
          style={{
            color: Platform.OS === 'ios' ? COLORS.iosBlue : COLORS.black,
          }}
          onPress={onPress}
          size={'large'}
          name="close-circle-outline"
        />
      </View>
      <SearchableDropdown
        multi={multi}
        selectedItems={selectedItems ? selectedItems : []}
        onItemSelect={onItemSelect}
        containerStyle={{ padding: 5 }}
        onRemoveItem={onRemoveItem}
        itemStyle={{
          padding: itemStyle?.padding ? itemStyle.padding : 10,
          marginTop: itemStyle?.marginTop ? itemStyle.marginTop : 2,
          backgroundColor: itemStyle?.backgroundColor
            ? itemStyle.backgroundColor
            : '#ddd',
          borderColor: itemStyle?.borderColor ? itemStyle.borderColor : '#bbb',
          borderWidth: itemStyle?.borderWidth ? itemStyle.borderWidth : 1,
          borderRadius: itemStyle?.borderRadius ? itemStyle.borderRadius : 5,
        }}
        itemTextStyle={{ color: COLORS.black }}
        itemsContainerStyle={{ height: exceptKeyboardHeight }}
        items={items}
        defaultIndex={defaultIndex ? defaultIndex : null}
        chip={true}
        resetValue={false}
        textInputProps={{
          placeholder: placeHolder ? placeHolder : 'select',
          underlineColorAndroid: textInputProps?.underlineColorAndroid
            ? textInputProps.underlineColorAndroid
            : 'transparent',
          autoFocus: textInputProps?.autoFocus
            ? textInputProps.autoFocus
            : false,
          style: {
            height: 50,
            padding: textInputPropsStyles?.padding
              ? textInputPropsStyles.padding
              : 12,
            borderWidth: textInputPropsStyles?.borderWidth
              ? textInputPropsStyles.borderWidth
              : 1,
            borderColor: textInputPropsStyles?.borderColor
              ? textInputPropsStyles.borderColor
              : '#ccc',
            borderRadius: textInputPropsStyles?.borderRadius
              ? textInputPropsStyles.borderRadius
              : 5,
          },
          // onTextChange: text => alert(text)
        }}
        listProps={{
          nestedScrollEnabled: nestedScrollEnabled ? nestedScrollEnabled : true,
        }}
      />
    </>
  );
};

export default SearchableDropDown;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    right: 0,
    padding: 5,
    top: 5,
    zIndex: 9,
    marginRight: 5,
    height: 50,
  },
});
