//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 10:42:22
 * @ Description:
 */

import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
const { width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface ITxt {
  size: number;
}

export const Container = styled.SafeAreaView`
  background-color: 'rgba(52, 52, 52, 0.3)';
  flex: 1;
  padding-top: ${getStatusBarHeight() + 10}px;
`;

export const LogoView = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Logo = styled.Image`
  width: 70%;
  height: 90px;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const Title = styled.Text<ITxt>`
  color: #000;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const TitleBlue = styled.Text<ITxt>`
  color: #191a90;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const TitleRed = styled.Text<ITxt>`
  color: #f20226;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 2px;
  margin-left: 10px;
`;

export const TitleWhite = styled.Text<ITxt>`
  color: #ffffff;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 2px;
`;

export const TitleBlack = styled.Text<ITxt>`
  color: #000000;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 2px;
  margin-top: 10px;
`;

export const TitleGray = styled.Text<ITxt>`
  color: 'rgba(52, 52, 52, 0.6)';
  font-size: ${(props: { size: any }) => props.size}px;
  padding: 2px;
  margin-right: 60;
`;

export const Rate = styled.Text`
  padding-left: 4px;
  color: #fff;
  font-size: 12px;
`;

export const ActionContainer = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const ActionContainer2 = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const InputUser = styled.TextInput`
  color: #000;
  font-size: 12px;
`;

export const InputAnimal = styled.TextInput`
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px #131016;
  justify-content: space-between;
`;

export const InputUser2 = styled.TextInput`
  color: #000;
  font-size: 15px;
  padding: 3px;
`;

export const DetailButton = styled.TouchableOpacity`
  width: 70%;
  height: 45px;
  background-color: #00ff80;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 60px;
`;

export const TouchButton = styled.TouchableOpacity``;

export const PrintButton = styled.TouchableOpacity`
  width: 35%;
  height: 50px;
  background-color: #191a90;
  border-radius: 20px;
  margin-bottom: 60px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const SendButton = styled.TouchableOpacity`
  width: 35%;
  height: 50px;
  background-color: #12b80f;
  border-radius: 20px;
  margin-bottom: 60px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const PrintCancelButton = styled.TouchableOpacity`
  width: 35%;
  height: 50px;
  background-color: #fa0f0f;
  border-radius: 20px;
  margin-bottom: 60px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const EnviarButton = styled.TouchableOpacity`
  width: 70%;
  height: 45px;
  background-color: 'rgba(52, 52, 52, 0.6)';
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 30px;
`;

export const Loadings = styled.View`
  flex: 1;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewRow2 = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border: 1px #131016;
  justify-content: center;
`;

export const ViewRowS = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const ViewRowSS = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ViewContainer = styled.View`
  flex-direction: row;
  border-radius: 5px;
  border: 1px #131016;
  justify-content: space-around;
`;

export const ViewCenter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ViewSpace = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const ViewPanel = styled.View`
  align-items: center;
  border-radius: 30px;
  border: 1px #131016;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 50px;
`;

export const ViewPanel2 = styled.View`
  align-items: center;
  border-radius: 30px;
  border: 1px #131016;
  justify-content: center;
`;

export const Pads = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 50px;
  border: 3px #131016;
  margin-right: 10px;
`;

export const Board = styled.View`
  width: 90%;
  background-color: 'rgba(52, 52, 52, 0.2)';
  border-radius: 30px;
  margin: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  border: 1px solid #131016;
  border-radius: 5px;
  padding: 16px;
  background: #FFFFFFF;
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

export const styles = StyleSheet.create({
  keyboardContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    width: width / 1.5,
    alignSelf: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  head: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  search: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#131016',
    borderRadius: 5,
    justifyContent: 'space-around',
  },
  searchs: {
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  close: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131016',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarView: {
    marginBottom: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarSenacsas: {
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: 150,
    borderRadius: 100,
  },
  avatarSenacsa: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 110,
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  iconHelp: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: '700',
  },
  preview: {
    height: 114,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    flex: 1,
  },
  previewImage: {
    width: 335,
    height: 114,
    resizeMode: 'contain',
  },
});
