/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { AddButton, ViewPicker } from './styles';
interface Props {
  data: string;
}
const Pickers: React.FC<Props> = ({ data }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ViewPicker>
      <Picker
        style={{
          backgroundColor: 'white',
          paddingLeft: 200,
          textAlign: 'center',
        }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label={data} value="Title" />
        <Picker.Item label="caravana 1" value="0000000000" />
        <Picker.Item label="caravana 2" value="0000000000" />
        <Picker.Item label="caravana 3" value="0000000000" />
        <Picker.Item label="caravana 4" value="0000000000" />
        <Picker.Item label="caravana 5" value="0000000000" />
      </Picker>
      <AddButton>
        <Icon name="ios-add-circle" size={30} color="grey" />
      </AddButton>
    </ViewPicker>
  );
};

export default Pickers;
