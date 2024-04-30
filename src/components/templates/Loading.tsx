import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Loading.styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color="#000" />
    </View>
  );
};

export default Loading;
