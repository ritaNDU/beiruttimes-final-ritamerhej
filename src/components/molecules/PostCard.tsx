import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  imageUrl?: string;
};
const PostCard = ({title, imageUrl}: Props) => {
  return (
    <View>
      {imageUrl !== null ? (
        <Image source={{uri: imageUrl}} style={{width: 100, height: 100}} />
      ) : (
        <Image
          source={require('../../assets/catAvatar.png')}
          style={{width: 100, height: 100}}
        />
      )}
      <Text>{title}</Text>
    </View>
  );
};

export default PostCard;
