import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.styles';
import ErrorText from '../Errors/ErrorText';

export interface Props {
  placeholder: string;
  handleChangeText: (e: string | React.ChangeEvent<any>) => void;
  handleBlur?: (e: any) => void;
  value: string;
  error?: string;
  touched?: boolean;
  isPassword?: boolean;
}

const FormInput = ({
  placeholder,
  handleChangeText,
  handleBlur,
  value,
  error,
  touched,
  isPassword,
}: Props) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        value={value}
        style={styles.input}
        secureTextEntry={isPassword}
      />
      {error && touched ? <ErrorText error={error} /> : <></>}
    </View>
  );
};

export default FormInput;
