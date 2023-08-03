//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020

import styled from 'styled-components/native';

interface ITxt {
  size: number;
}

export const Container = styled.SafeAreaView`
  background-color: #141a29;
  flex: 1;
`;

export const LogoView = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Logo = styled.Image`
  align-items: center;
  justify-content: center;
  padding: 10px;
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

export const InputUser = styled.TextInput`
  color: #000;
  font-size: 12px;
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
