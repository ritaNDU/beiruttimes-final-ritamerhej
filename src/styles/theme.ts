import {Platform} from 'react-native';

// The point is to have dark mode on ios and light mode on android

const android_colors = {
  primary: '#000',
  backgroundColor: '#fff',
  accentColor: '#fff',
  activeTabBackground: '#ababab',
  textColor: '#1A1C1A',
  shadowColor: '#000',
};

const ios_colors = {
  primary: '#fff',
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
  },
  colors: {
    ...colors,
  },
};

export default theme;
