import { StyleSheet } from 'react-native';

import theme from '@/theme';
import { palette } from '@/theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  content: {
    flex: 1,
    flexGrow: 1,
    padding: 15,
  },
  mainText: {
    color: palette.CLOUDS,
    paddingVertical: 10,
  },
  languangeContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 8,
  },
  buttonText: {},
});

export default styles;
