import {Image} from 'react-native';
import React from 'react';
import styles from './styles';

type Props = {
  imageUrl?: string;
};
const PostImage = ({imageUrl}: Props) => {
  return (
    <>
      {imageUrl !== null ? (
        <Image
          source={{uri: imageUrl}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require('../../assets/authenticationbackground.jpg')}
          style={styles.imageStyle}
        />
      )}
    </>
  );
};

export default PostImage;
