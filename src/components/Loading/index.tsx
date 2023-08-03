import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

interface LoaderProps {
  loading: boolean;
  text?: string;
}

const Loading: React.FC<LoaderProps> = ({ loading, text }: LoaderProps) => {
  const noop = () => {};
  return (
    <Modal
      visible={loading}
      animationType="none"
      onRequestClose={noop}
      transparent
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} size="large" color="#00ff00" />
          <Text>{text || 'Loading'}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
