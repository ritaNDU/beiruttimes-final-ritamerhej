import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import theme from '../../../styles/theme';

const commonButtonStyles: ViewStyle = {
  padding: 5,
  backgroundColor: theme.colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
};

const commonTextStyle: TextStyle = {
  color: theme.colors.accentColor,
  fontWeight: '900',
};

const styles = StyleSheet.create({
  navigationButtonText: {
    ...commonTextStyle,
    fontSize: theme.fontSize.normal,
  },

  navigationButtonContainer: {
    ...commonButtonStyles,
    flexDirection: 'row',
    gap: 4,
  },
});
export default styles;
