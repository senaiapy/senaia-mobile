//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020

import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
var { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191a30',
  },
  bgImage: {
    backgroundColor: '#191a30',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: SCREEN_WIDTH * 1.0,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  Login: {
    fontSize: 15,
    marginBottom: -20,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },

  Senha: {
    fontSize: 15,
    marginBottom: -20,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },
  image: {
    marginLeft: 20,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionFrame: {
    borderRadius: 20,
    borderColor: 'transparent',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },

  botaoEnviar: {
    backgroundColor: '#696565',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FB5607',
    marginTop: -15,
    marginBottom: 25,
  },

  grupoDeBotoes: {},
  botaoConfig: {
    alignContent: 'center',
  },

  buttonStyle: {
    backgroundColor: '#6cc9e0',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 105,
    marginRight: 105,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  SectionStyleTextEntrarCon: {
    marginLeft: 120,
  },

  buttonStyleOlvide: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontSize: 10,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  SectionStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    margin: 5,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
  },
  inputStyleUsuario: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginLeft: -110,
  },
  inputStyleContraseña: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginLeft: -110,
  },
  inputStyleEntrarCon: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginRight: 70,
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
  forgotStyle: {
    height: 100,
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
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
  SectionStyleText: {
    marginLeft: 120,
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
});
