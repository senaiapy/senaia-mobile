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
  },
  keyboardContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flex: 1,
  },
  bgImage: {
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
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: 20,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  SectionFrame: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    marginBottom: 100,
    marginLeft: 5,
    marginRight: 5,
  },
  SectionFrame2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    marginLeft: 5,
    marginRight: 5,
  },
  SectionFrame4: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
  },
  buttonStyle: {
    backgroundColor: '#6cc9e0',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 55,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    justifyContent: 'center',
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  IconTipoDe: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconPlus: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconPlus2: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconPlus3: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconPlus4: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconSigla: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconColor: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconNumero: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  IconTipoDe2: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  SectionStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  SectionStyle2: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  SectionStyle3: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
  },
  SectionCedula: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },

  SectionCorreo: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },

  SectionTelefono: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
    marginBottom: 30,
  },

  SectionContraseña: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.85,
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
  },
  inputStyle: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleColo1: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyle2: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleTipoDe: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleActual: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleSigla: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleColor: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStylePeso: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleGuia: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleCaravana: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleCorral: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleCategoria: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleFecha: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleFecha2: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleModalidad: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleLote: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleGuia2: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleConsumo: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleValorCompra: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleCosto: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleCosto2: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleOrigen: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleProtocolo: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleOrigen2: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleAngus: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStylePesoSalida2: {
    color: 'rgba(52, 52, 52, 0.6)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyleNGuia: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleAngus1: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStylePesoSalida: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleDiasDe: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleCMS: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleValorCMS3: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleGMD: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleDestino: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleControlador: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleTipoSalida: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleFechaEntrada: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleModalidadEntrada: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  inputStyleCantidad: {
    color: 'rgba(52, 52, 52, 0.6)',
  },
  registerTextStyle: {
    color: 'rgba(52, 52, 52, 0.6)',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    height: 35,
    borderWidth: 1,
    borderRadius: 8,
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
  },
  titleMsg: {
    fontSize: 20,
    marginBottom: 2,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  MessageBtn: {
    marginRight: 1,
  },
  SectionStyleText: {
    marginLeft: 1,
  },
  SectionStyleText6: {
    marginLeft: 1,
  },
  SectionStyleText5: {
    marginLeft: 1,
  },
  SectionStyleText4: {
    marginLeft: 1,
  },
  returnButton: {
    backgroundColor: '#007F5F',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 5,
  },
  returnButtonText: {
    color: '#e02041',
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  messages: {
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#33c37d',
    marginBottom: 10,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 20,
  },
  messageReturnButton: {},
});
