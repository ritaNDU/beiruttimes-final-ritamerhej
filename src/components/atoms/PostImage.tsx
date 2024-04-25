import {Image} from 'react-native';
import React from 'react';

type Props = {
  imageUrl?: string;
};
const PostImage = ({imageUrl}: Props) => {
  return (
    <>
      {imageUrl !== null ? (
        <Image source={{uri: imageUrl}} style={{width: 100, height: 100}} />
      ) : (
        <Image
          source={require('../../assets/catAvatar.png')}
          style={{width: 100, height: 100}}
        />
      )}
    </>
  );
};

export default PostImage;
