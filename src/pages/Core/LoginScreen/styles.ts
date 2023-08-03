/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020

import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import theme from '@/theme/index';

type Props = {
  type: string;
};
interface ITxt {
  size: number;
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginVertical: 5,
  },
  buttonNavigator: {
    width: 100,
    height: 100,
    borderRadius: 20,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: 150,
    borderRadius: 100,
  },
  avatarSenacsa: {
    marginBottom: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 110,
  },
  menuContainer: {
    flex: 1,
    //backgroundColor: 'blue',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  menuItem: {
    marginLeft: 2,
    fontSize: 18,
  },
  menuButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'red',
    marginVertical: 10,
  },
  text: {
    marginTop: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  iconHelp: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#c00',
  },
  maskedInput: {
    flexGrow: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'flex-start',
  },
  containerMask: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#f00',
    fontSize: 12,
  },
  specificContainer: {
    backgroundColor: '#fff',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
  },
});

export const Container = styled.SafeAreaView`
  background-color: #141a29;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoView = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Logo = styled.Image`
  width: 90%;
  height: 120px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Title = styled.Text<ITxt>`
  color: #fff;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 30px;
`;

export const Rate = styled.Text`
  padding-left: 4px;
  color: #fff;
  font-size: 12px;
`;

export const ActionContainer = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const InputUser = styled.TextInput`
  color: #000;
  font-size: 15px;
  padding: 3px;
`;

export const Text01 = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const DetailButton = styled.TouchableOpacity`
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

export const EnviarButton = styled.TouchableOpacity`
  width: 60%;
  height: 45px;
  background-color: #00ff80;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 70px;
  margin-top: 10px;
  margin-left: 60px;
`;

export const OlvideButton = styled.TouchableOpacity`
  width: 100%;
  height: 20px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 20px;
`;

export const OlvideText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
