/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React, { memo, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import DropdownComponent from '@/components/DropdownComponent';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/Core/Fundo.png');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

// import {
//   Character,
//   useGetCharactersQuery,
// } from '@/common/generated/graphql';

//  import CharacterCard from '@/common/components/CharacterCard';

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}

// ############### internationalization #######################

const ListScreen: React.FC = () => {
  // const { data, loading } = useGetCharactersQuery();

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header} />
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('@/assets/images/Senaia/Logo1.png')}
            style={{
              width: '40%',
              height: 100,
              resizeMode: 'contain',
              margin: 5,
              marginLeft: 30,
              marginTop: -20,
              marginBottom: -30,
            }}
          />
        </View>
        {/* HEADER */}
        <View style={styles.mainBody}>
          <View style={styles.SectionFrame}>
            <View>
              <Text style={styles.title}>Entrada Animal</Text>
              {/* frame */}
            </View>
          </View>

          {/* Numero Anterior */}
          <View style={styles.SectionFrame3}>
            <View style={styles.SectionStyle2}>
              <View>
                <Text style={styles.inputStyleTipoDe}>Número Anterior</Text>
                <Picker
                  style={styles.TestPicker}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }
                >
                  <Picker.Item label="Núm Anterior" value="Title" />
                  <Picker.Item label="Test 1" value="txt 1" />
                  <Picker.Item label="Test 2" value="txt 2" />
                  <Picker.Item label="Test 3" value="txt 3" />
                  <Picker.Item label="Test 4" value="txt 4" />
                  <Picker.Item label="Test 5" value="txt 5" />
                </Picker>
              </View>
            </View>
            <View style={styles.IconPlus4}>
              <TouchableOpacity>
                <Icon name="plus-circle" size={25} color="grey" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={styles.buttonTextStyle}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainBody}>
          {/* LOGIN */}
          <View>{renderLabel()}</View>
          <View>
            <DropdownComponent
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Adiciona..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item: { value: React.SetStateAction<null> }) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? 'blue' : 'black'}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default memo(ListScreen);
