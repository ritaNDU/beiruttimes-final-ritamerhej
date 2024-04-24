import {View} from 'react-native';
import React from 'react';
import styles from './molecules.styles';
import NavigationButton from '../atoms/Buttons/NavigationButton';

type Props = {
  navigateToSignin: () => void;
  navigateToSignup: () => void;
};

const AuthenticationButtonGroup = ({
  navigateToSignin,
  navigateToSignup,
}: Props) => {
  return (
    <View style={styles.buttonGroup}>
      <NavigationButton name="Sign In" onPress={navigateToSignin} />
      <NavigationButton name="Sign Up" onPress={navigateToSignup} />
    </View>
  );
};

export default AuthenticationButtonGroup;
