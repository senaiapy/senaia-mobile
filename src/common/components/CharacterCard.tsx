/* eslint-disable unicorn/filename-case */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { useUpdateChosenQuantity } from '../hooks/use-update-chosen-quantity';
import styles from './styles';

interface Props {
  data: {
    id?: string | null;
    image?: string | null;
    name?: string | null;
    unitPrice?: number;
    chosenQuantity?: number;
  };
}

const CharacterCard: React.FC<Props> = ({ data }) => {
  const { onIncreaseChosenQuantity, onDecreaseChosenQuantity } =
    useUpdateChosenQuantity();

  return (
    <View style={styles.container}>
      {data.image && (
        <Image source={{ uri: data.image }} style={styles.image} />
      )}
      <View style={styles.details}>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{`G$ ${data.unitPrice}`}</Text>
      </View>
      <View style={styles.choseQuantityContainer}>
        <RectButton
          testID="charactter-remove-btn"
          onPress={onDecreaseChosenQuantity.bind(null, data.id as string)}
        >
          <Icon name="minus" size={24} color="#3D7199" />
        </RectButton>
        <Text style={styles.choseQuantityText}>{data.chosenQuantity}</Text>
        <RectButton
          testID="charactter-add-btn"
          onPress={onIncreaseChosenQuantity.bind(null, data.id as string)}
        >
          <Icon name="plus" size={24} color="#3D7199" />
        </RectButton>
      </View>
    </View>
  );
};

export default CharacterCard;
