import {Platform} from 'react-native';

const android_colors = {
  primary: '#000',
  secondary: '#121212',
  backgroundColor: '#fff',
  accentColor: '#fff',
  activeTabBackground: '#ababab',
  textColor: '#1A1C1A',
  shadowColor: '#000',
};

const ios_colors = {
  primary: '#fff',
  secondary: '#fff',
  backgroundColor: '#000',
  accentColor: '#000',
  activeTabBackground: '#ababab',
  textColor: '#fff',
  shadowColor: '#fff',
};

const colors = Platform.OS === 'ios' ? ios_colors : android_colors;

const theme = {
  fontSize: {
    small: 10,
    normal: 15,
    large: 22,
    extraLarge: 30,
  },
  colors: {
    ...colors,
  },
};

export default theme;
