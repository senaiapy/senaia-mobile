/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020

import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface ITxt {
  size: number;
}
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
`;

export const FormView = styled.View`
  padding: 24px;
`;

export const FormTitle = styled.Text`
  font-size: 24px;
  color: #131016;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const FormError = styled.Text`
  font-size: 15px;
  color: #dc1538;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const LogoView = styled.View`
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const ViewSpace = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const ViewRowS = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  width: 50%;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
`;
export const MainTitle = styled.Text<ITxt>`
  color: #fff;
  width: 100%;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Title = styled.Text<ITxt>`
  color: #fff;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Rate = styled.Text`
  padding-left: 4px;
  color: #fff;
  font-size: 12px;
`;

export const ActionContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ActionContainer2 = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ActionContainer3 = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const InputUser = styled.TextInput`
  color: #000;
  font-size: 12px;
`;

export const InputUser2 = styled.TextInput`
  color: #000;
  font-size: 15px;
  padding: 10px;
`;

export const DetailButton = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  background-color: #00ff80;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 60px;
  margin-top: 20px;
  margin-left: 40px;
`;

export const EnviarButton = styled.TouchableOpacity`
  width: 70%;
  height: 45px;
  background-color: #00ff80;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: 40px;
`;

export const Loadings = styled.View`
  flex: 1;
`;

export default StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'black',
    fontWeight: 'bold',
  },
  titleConsulta: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
  titleAgrega: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
  title2: {
    textAlign: 'center',
    fontSize: 15,
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
  },

  SectionFrame2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
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
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonStyle: {
    backgroundColor: '#6cc9e0',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 55,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 110,
    marginRight: 110,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  IconTipoDe: {
    marginLeft: 100,
  },
  IconSearch: {
    marginLeft: 5,
  },
  IconAgrega: {
    marginTop: 5,
    marginLeft: 25,
  },
  IconColor: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 130,
  },
  SectionStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 50,
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
    height: 50,
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
    height: 50,
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
    height: 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#474887',
  },
  inputStyle: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginRight: 10,
    fontSize: 10,
  },
  inputStyle2: {
    flex: 1,
    color: 'rgba(52, 52, 52, 0.6)',
    marginRight: -80,
    fontSize: 10,
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
  keyboardContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flex: 1,
  },
  search: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 50,
  },
});
