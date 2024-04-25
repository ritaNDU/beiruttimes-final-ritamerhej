import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './AuthenticationSreensTemplate.style';

type Props = {
  children: React.JSX.Element;
  name: string;
};
const AuthenticationScreensTemplate = ({children, name}: Props) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/authenticationbackground.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.title}>{name}</Text>
          {children}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default AuthenticationScreensTemplate;
