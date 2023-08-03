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
  padding: 5px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ActionContainer2 = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const ActionContainer3 = styled.View`
  padding: 2px;
  background-color: #0080ff;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 30px;
  margin-left: 5px;
  align-items: center;
`;

export const ActionContainer4 = styled.View`
  padding: 2px;
  background-color: #0080ff;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
  align-items: center;
`;

export const InputUser = styled.TextInput`
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

export const MenuButton = styled.TouchableOpacity`
  width: 70%;
  height: 45px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: 40px;
`;

export const ImageMenu = styled.Image`
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 55px;
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
export const TextMenu = styled.Text`
  padding-left: 4px;
  color: #fff;
  font-size: 13px;
`;
