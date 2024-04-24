import {View} from 'react-native';
import React from 'react';
import AuthenticationButtonGroup from '../../components/molecules/AuthenticationButtonGroup';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigatorNavigationProps} from '../../navigtion/NativeStackNavigation/NativeStackNavigator.types';

const InitialScreen = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();

  const navigateToSignin = () => {
    navigation.navigate('SignIn');
  };
  const navigateToSignup = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <AuthenticationButtonGroup
        navigateToSignin={navigateToSignin}
        navigateToSignup={navigateToSignup}
      />
    </View>
  );
};

export default InitialScreen;
