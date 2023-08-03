/* eslint-disable unused-imports/no-unused-vars */
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
    backgroundColor: '#191a30',
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

  TextoTitulo: {
    textAlign: 'center',
  },

  textInfo: {
    fontSize: 15,
    marginTop: 10,
    alignItems: 'center',
    color: 'rgba(52, 52, 52, 0.6)',
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
  titleConsulta: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
  },
  titleAgrega: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
  },
  title2: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: 20,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionFrame: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    marginTop: -10,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },

  SectionFrame2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    marginTop: -5,
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
    alignSelf: 'center',
  },

  SectionFrameAgrega: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    alignSelf: 'center',
  },
  SectionFrame4: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    marginTop: -5,
    alignSelf: 'center',
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
    marginTop: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: -5,
  },
  IconTipoDe: {
    marginTop: 7,
    marginLeft: 120,
  },
  IconSearch: {
    marginLeft: -25,
  },
  IconAgrega: {
    marginTop: 5,
    marginLeft: -25,
  },
  IconColor: {
    marginTop: 7,
    marginLeft: 130,
  },
  SectionStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
    marginTop: -5,
    marginLeft: 35,
    marginRight: 35,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  SectionStyleAgrega: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
    marginTop: -5,
    marginLeft: 35,
    marginRight: 35,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  SectionStyleConsulta: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
    marginTop: -5,
    marginLeft: 35,
    marginRight: 35,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  SectionStyle2: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
    marginTop: 5,
    alignSelf: 'center',
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  inputStyle: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginRight: 10,
    fontSize: 15,
    marginTop: -10,
  },
  inputStyle2: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginRight: -80,
    fontSize: 15,
    marginTop: -10,
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
  SectionStyleText: {
    marginLeft: 20,
  },

  SectionStyleTextAgrega: {
    marginLeft: 20,
  },
  SectionStyleText2: {
    marginLeft: 10,
  },
  SectionStyleText4: {
    marginLeft: 12,
  },
});
