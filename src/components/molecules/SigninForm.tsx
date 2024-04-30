import {Formik} from 'formik';
import React, {useState} from 'react';
import {initialSigninFormValues} from '../../data/formsData';
import FormInput from '../atoms/Inputs/FormInput';

import {SigninSchema} from '../../data/ValidationSchemas/signinSchema';
import {InitialSigninFormType} from '../../data/formsData.types';
import useManageUser from '../../hooks/useManageUser';
import NavigationButton from '../atoms/Buttons/NavigationButton';
import {getUserTokens} from '../../service/userApi';
import useManageSecureStorage from '../../hooks/useManageSecureStorage';
import styles from './molecules.styles';

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

const SigninForm = () => {
  const {storeUserInfo} = useManageSecureStorage();
  const {signUserIn} = useManageUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async (values: InitialSigninFormType) => {
    setIsLoading(true);

    const tokens = await getUserTokens({
      email: values.email,
      password: values.password,
    });

    if (tokens) {
      try {
        await storeUserInfo(tokens.accessToken, tokens.refreshToken);
        signUserIn();
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={initialSigninFormValues}
      onSubmit={handleSignin}
      validationSchema={SigninSchema}>
      {({handleChange, handleBlur, submitForm, values, errors, touched}) => (
        <>
          <FormInput
            placeholder="Email Address"
            handleChangeText={handleChange('email')}
            handleBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />

          <FormInput
            placeholder={'Password'}
            handleChangeText={handleChange('password')}
            handleBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
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

export default SigninForm;
