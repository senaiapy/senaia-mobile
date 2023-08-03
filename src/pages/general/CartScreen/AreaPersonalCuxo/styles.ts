//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020

import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  characterList: {
    padding: 16,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: SCREEN_WIDTH * 0.95,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  returnButton: {
    backgroundColor: '#007F5F',
    width: width - 230,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 5,
    marginLeft: 40,
  },
  title1: {
    marginRight: 140,
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
  },
  title2: {
    marginRight: 170,
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
  },
  title: {
    marginRight: 80,
    marginLeft: 80,
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
  },

  registerTextStyle: {
    color: 'rgba(52, 52, 52, 0.6)',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: 120,
    height: 35,
    borderWidth: 1,
    borderRadius: 8,

    marginLeft: 15,
    marginRight: 15,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  MessageContainer: {
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  titleMsg: {
    fontSize: 20,
    marginBottom: 2,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  MessageBtn: {
    marginRight: 10,
  },
  returnButtonText: {
    color: '#e02041',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  messages: {
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#33c37d',
    marginBottom: 20,
  },
  messageReturnButton: {},
  groupButton: {
    flexDirection: 'row',
  },
  atencionButton: {},
  administracionButton: {},
  emergencyButton: {
    alignItems: 'center',
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
