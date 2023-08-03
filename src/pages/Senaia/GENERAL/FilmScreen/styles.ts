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

export const ListMovies = styled.FlatList``;

export const Title = styled.Text<ITxt>`
  color: #fff;
  font-size: ${(props: { size: any }) => props.size}px;
  font-weight: bold;
  padding: 10px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Rate = styled.Text`
  padding-left: 4px;
  color: #fff;
  font-size: 12px;
`;

export const ActionContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const DetailButton = styled.TouchableOpacity`
  width: 80%;
  height: 45px;
  background-color: #01062c;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 15%;
  height: 30px;
  align-items: center;
  justify-content: center;
`;
