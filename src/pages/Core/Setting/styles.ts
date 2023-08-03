import { StyleSheet } from 'react-native';

import theme from '@/theme/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
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
    marginLeft: 10,
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
  inputView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    width: '90%',
    padding: 8,
    fontSize: 17,
  },
});

export default styles;
