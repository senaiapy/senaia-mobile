/* eslint-disable unused-imports/no-unused-vars */
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import theme from '@/theme/index';

type Props = {
  type: string;
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
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
    marginBottom: 50,
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
    borderRadius: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  margin: {
    justifyContent: 'space-around',
  },
});

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  border: 1px solid #131016;
  border-radius: 5px;
  padding: 16px;
  background: #fff;
`;
