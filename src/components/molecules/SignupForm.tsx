import React, {useState} from 'react';
import {initialSignupFormValues} from '../../data/formsData';
import {Formik} from 'formik';
import FormInput from '../atoms/Inputs/FormInput';
import PasswordInputField from '../atoms/Inputs/PasswordInput';

import {SignupSchema} from '../../data/ValidationSchemas/signupSchema';
import {InitialSignupFormType} from '../../data/formsData.types';
import {useNavigation} from '@react-navigation/native';
import NavigationButton from '../atoms/Buttons/NavigationButton';
import {NativeStackNavigatorNavigationProps} from '../../navigtion/NativeStackNavigation/NativeStackNavigator.types';
import {User} from '../../data/user.type';
import {createNewUser} from '../../service/userApi';
import {Alert} from 'react-native';

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

const SignupForm = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (
    values: InitialSignupFormType,
    {resetForm}: {resetForm: () => void},
  ) => {
    const user: User = {
      email: values.email,
      password: values.password,
    };
    setIsLoading(true);
    createNewUser(user);
    resetForm();
    setIsLoading(false);
    Alert.alert('Account created successfully!');
    navigation.navigate('SignIn');
  };

  return (
    <Formik
      initialValues={initialSignupFormValues}
      validationSchema={SignupSchema}
      onSubmit={handleSignup}>
      {({handleChange, handleBlur, submitForm, values, errors, touched}) => (
        <>
          <FormInput
            placeholder="Email..."
            handleChangeText={handleChange('email')}
            handleBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />

          <PasswordInputField
            placeholder={'Password...'}
            handleChangeText={handleChange('password')}
            handleBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
          />

          <PasswordInputField
            placeholder={'Repeat password...'}
            handleChangeText={handleChange('repeatPassword')}
            handleBlur={handleBlur('repeatPassword')}
            value={values.repeatPassword}
            error={errors.repeatPassword}
            touched={touched.repeatPassword}
          />

          <NavigationButton
            onPress={handleSubmit(submitForm)}
            name="Submit"
            isLoading={isLoading}
          />
        </>
      )}
    </Formik>
  );
};

export default SignupForm;
