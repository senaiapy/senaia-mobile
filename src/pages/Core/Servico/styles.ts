import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import theme from '@/theme/index';

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
    padding: 10,
  },
  buttons: {
    width: '100%',
    marginTop: 10,
  },
});

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
  align-items: center;
  justify-content: center;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin: 24px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  border: 1px solid #131016;
  border-radius: 5px;
  padding: 16px;
  background: #fff;
`;

export const Form = styled.View`
  padding: 24px;
`;

export const FormTitle = styled.Text`
  font-size: 24px;
  color: #131016;
  font-weight: bold;
  margin-bottom: 12px;
`;
