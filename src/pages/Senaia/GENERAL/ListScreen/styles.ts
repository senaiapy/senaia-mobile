//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020

import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  header: {
    width: SCREEN_WIDTH * 0.8,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  headerBackIcon: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 20,
    marginRight: 10,
    color: '#ffffff',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: 20,
  },
  mainBody: {},
  SectionFrame: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },

  SectionFrame3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },

  SectionStyle2: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  SectionCedula: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  inputStyleTipoDe: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginRight: 75,
  },
  TestPicker: {
    paddingLeft: 20,
    textAlign: 'center',
    marginTop: -10,
  },
  registerTextStyle: {
    color: 'rgba(52, 52, 52, 0.6)',
    fontWeight: 'bold',
    fontSize: 18,
    width: 120,
    height: 35,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyle: {
    backgroundColor: '#6cc9e0',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 110,
    marginRight: 110,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  IconPlus4: {
    marginTop: 20,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: -20,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
