//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

interface Header {
  titles?: string;
}

export type Props = {
  titles: string;
  baseEnthusiasmLevel?: number;
};

const Header: React.FC<Props> = ({ titles, baseEnthusiasmLevel = 0 }) => {
  // const navigation = useNavigation();
  const [enthusiasmLevel, setEnthusiasmLevel] =
    React.useState(baseEnthusiasmLevel);
  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onIncrement} style={styles.menubutton}>
        <Ionicons name="menu" size={36} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.title}>
        {titles} {getExclamationMarks(enthusiasmLevel)}{' '}
      </Text>
    </View>
  );
};

export default Header;
