import React from 'react';
import SigninForm from '../../components/organisms/SigninForm';
import {useNavigation} from '@react-navigation/native';
import AuthenticationScreensTemplate from '../../components/templates/AuthenticationScreensTemplate';
import {NativeStackNavigatorNavigationProps} from '../../navigation/NativeStackNavigation/NativeStackNavigator.types';
import NavigationButton from '../../components/atoms/Buttons/NavigationButton';
import styles from '../../components/molecules/molecules.styles';

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();

  const goToSignup = () => {
    navigation.navigate('SignUp');
  };
  return (
    <AuthenticationScreensTemplate name="Sign In">
      <>
        <SigninForm />
        <NavigationButton
          name="Create account"
          onPress={goToSignup}
          styleProp={styles.submitButton}
        />
      </>
    </AuthenticationScreensTemplate>
  );
};

export default SignInScreen;
