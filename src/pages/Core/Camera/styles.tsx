/* eslint-disable unused-imports/no-unused-vars */
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import { Colors } from '@/utils/colors';

type Props = {
  type: string;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flexGrow: 1,
    marginHorizontal: 15,
    paddingTop: 20,
  },
  paragraph: {
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 40,
    fontSize: 14,
    color: Colors.lighter,
  },
  unconfirmed: {
    marginBottom: 20,
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 5,
    color: Colors.lighter,
  },
  badge: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: 'red',
    zIndex: 10,
    borderRadius: 10,
    top: 20,
    left: 15,
  },
  textItem: { marginLeft: 10, color: Colors.foreground, flex: 3 },
  title: {
    fontSize: 35,
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.foreground,
    marginTop: 0,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.lighter,
    marginVertical: 10,
  },
  item: {
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 5,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDelete: {
    backgroundColor: '#c7122a',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  textDelete: { marginLeft: 10, color: 'white', flex: 3, fontWeight: 'bold' },
  mnemonicsContainer: {
    marginTop: 40,
    // backgroundColor: '#121212',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.foreground,
    borderStyle: 'dashed',
    minHeight: 130,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  mnemonics: {
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 17,
    letterSpacing: 1,
    color: Colors.foreground,
    fontFamily: 'RobotoSlab-Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomColor: Colors.brick,
    borderBottomWidth: 1,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: Colors.brick,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'space-around',
  },
  searchContainer2: {
    flexDirection: 'row',
    height: 150,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomColor: Colors.brick,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.brick,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  searchContainer3: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomColor: Colors.brick,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.brick,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    flex: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.brick,
    backgroundColor: Colors.card,
    paddingHorizontal: 10,
    height: 45,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: Colors.foreground,
  },
  close: {
    width: 100,
    backgroundColor: Colors.brick,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  itemCreate: {
    backgroundColor: '#27c712',
    padding: 15,
    borderRadius: 5,
    margin: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundb: {
    textAlign: 'center',
    marginTop: 5,
    color: Colors.foreground,
  },
  btnCointainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    alignSelf: 'center',
    width: '75%',
  },
  progressContainer: {
    backgroundColor: '#27c712',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundBtn: {},
  buttons: {
    width: '100%',
    marginTop: 10,
  },
  rowStyles: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  texts: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#f00',
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },

  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
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
