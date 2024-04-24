import React from 'react';
import SigninForm from '../../components/molecules/SigninForm';
import {useNavigation} from '@react-navigation/native';
import AuthenticationScreensTemplate from '../../components/templates/AuthenticationScreensTemplate';
import {NativeStackNavigatorNavigationProps} from '../../navigtion/NativeStackNavigation/NativeStackNavigator.types';
import NavigationButton from '../../components/atoms/Buttons/NavigationButton';

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();

  const goToSignup = () => {
    navigation.navigate('SignUp');
  };
  return (
    <AuthenticationScreensTemplate name="Sign In">
      <>
        <SigninForm />
        <NavigationButton name="Create account" onPress={goToSignup} />
      </>
    </AuthenticationScreensTemplate>
  );
};

export default SignInScreen;
