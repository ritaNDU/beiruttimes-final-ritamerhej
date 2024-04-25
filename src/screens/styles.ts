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
    color: theme.colors.textColor,
    fontWeight: '900',
    marginBottom: 15,
  },
  newsDetailsContainer: {flex: 1, backgroundColor: 'white'},
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 10,
  },
});
export default styles;
