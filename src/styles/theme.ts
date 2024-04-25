import {Platform} from 'react-native';

const android_colors = {
  primary: '#98A8F8',
  secondary: '#CDFCF6',
  backgroundColor: '#fff',
  accentColor: '#fff',
  activeTabBackground: '#BCCEF8',
  textColor: '#1A1C1A', //#03001C
};

const ios_colors = {
  primary: '#79AC78',
  secondary: '#99F3BD',
  backgroundColor: '#fff',
  accentColor: '#fff',
  activeTabBackground: '#B0D9B1',
  textColor: '#F3CEA1',
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
