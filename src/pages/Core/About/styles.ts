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
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: 150,
    borderRadius: 100,
  },
  avatarSenacsa: {
    marginBottom: 20,
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
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  iconHelp: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#666666',
    borderRadius: 100,
  },
  SectionFrame: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  versionSite: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 50,
    color: 'red',
    fontWeight: 'bold',
  },
  bottom: {
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#23336555',
    borderRadius: 100,
    alignItems: 'center',
    padding: 6,
  },
});

export default styles;
