/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 23:13:37
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 13:00:10
 * @ Description:
 */
import { StyleSheet } from 'react-native';

import { Colors } from '@/utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  pagerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 30,
    fontFamily: 'RobotoSlab-Regular',
    color: Colors.foreground,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: Colors.foreground,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.background,
  },
});
