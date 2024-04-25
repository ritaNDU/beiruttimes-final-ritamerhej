import {StyleSheet} from 'react-native';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  todaysNewsContainer: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  todaysNewsContentStyle: {
    gap: 30,
    padding: 10,
  },
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: '900',
    marginBottom: 15,
  },
});
export default styles;
