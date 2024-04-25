import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  buttonGroup: {
    gap: 10,
  },
  postCardContainer: {
    gap: 20,
    marginBottom: 10,
    padding: 20,
    backgroundColor: theme.colors.backgroundColor,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  title: {
    fontSize: theme.fontSize.normal,
    color: theme.colors.textColor,
  },

  postDetailsContainer: {
    padding: 10,
  },
});

export default styles;
