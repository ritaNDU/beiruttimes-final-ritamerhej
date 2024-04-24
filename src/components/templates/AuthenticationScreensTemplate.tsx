import {
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
      {/* <ImageBackground
      source={require('../../assets/illustrations/catPawsBackground.jpg')}
      resizeMode="cover"
      style={styles.image}>
        </ImageBackground> */}
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
    </View>
  );
};

export default AuthenticationScreensTemplate;
