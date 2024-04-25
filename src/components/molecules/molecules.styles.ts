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

  postDetailsContainer: {gap: 20},
  titleContainer: {
    paddingHorizontal: 7,
    gap: 3,
  },
  postDetailsTitle: {
    fontSize: theme.fontSize.large,
    color: theme.colors.textColor,
  },
  publicationDate: {
    fontSize: theme.fontSize.small,
    fontWeight: '300',
  },
  decription: {
    fontSize: theme.fontSize.normal,
    paddingHorizontal: 7,
    fontWeight: '500',
  },
  readArticleContainer: {
    gap: 5,
    paddingHorizontal: 7,
  },
});

export default styles;
