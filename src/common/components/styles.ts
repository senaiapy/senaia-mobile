/* eslint-disable unused-imports/no-unused-vars */
//###########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//###########################################

import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
  },
  image: { width: 70, height: 70 },
  details: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  choseQuantityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  choseQuantityText: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
