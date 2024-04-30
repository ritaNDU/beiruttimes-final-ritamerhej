import {Dimensions, StyleSheet} from 'react-native';
import theme from '../styles/theme';

const {height} = Dimensions.get('screen');
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
  errorContainer: {
    padding: 10,
    width: '100%',
    height: height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});
export default styles;
