import React, {useState} from 'react';
import {initialSignupFormValues} from '../../data/formsData';
import {Formik} from 'formik';
import FormInput from '../atoms/Inputs/FormInput';

import {SignupSchema} from '../../data/ValidationSchemas/signupSchema';
import {InitialSignupFormType} from '../../data/formsData.types';
import {useNavigation} from '@react-navigation/native';
import NavigationButton from '../atoms/Buttons/NavigationButton';
import {NativeStackNavigatorNavigationProps} from '../../navigation/NativeStackNavigation/NativeStackNavigator.types';
import {User} from '../../data/user.type';
import {createNewUser} from '../../service/userApi';
import styles from './molecules.styles';

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

const SignupForm = () => {
  const navigation = useNavigation<NativeStackNavigatorNavigationProps>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (
    values: InitialSignupFormType,
    {resetForm}: {resetForm: () => void},
  ) => {
    const user: User = {
      email: values.email,
      password: values.password,
    };
    setIsLoading(true);
    try {
      await createNewUser(user);
      navigation.navigate('SignIn');
    } finally {
      resetForm();
      setIsLoading(false);
    }
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

          <FormInput
            placeholder={'Password...'}
            handleChangeText={handleChange('password')}
            handleBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            isPassword
          />

          <FormInput
            placeholder={'Repeat password...'}
            handleChangeText={handleChange('repeatPassword')}
            handleBlur={handleBlur('repeatPassword')}
            value={values.repeatPassword}
            error={errors.repeatPassword}
            touched={touched.repeatPassword}
            isPassword
          />

          <NavigationButton
            onPress={handleSubmit(submitForm)}
            name="Submit"
            isLoading={isLoading}
            styleProp={styles.submitButton}
          />
        </>
      )}
    </Formik>
  );
};

export default SignupForm;
