//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020

import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface ITxt {
  size: number;
}

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

export const styles = StyleSheet.create({
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
  pickerSelectStyles: {
    height: 42,
    fontSize: 16,
    fontFamily: 'Karla-Regular',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  pickerWrapper: {
    marginHorizontal: 24,
  },
  pickerTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 2,
    borderColor: '#FFFF',
    color: '#4a4545',
  },
  pickerView: {
    borderColor: '#ffff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    width: 350,
    borderRadius: 10,
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
