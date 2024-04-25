import {Text, Linking, View} from 'react-native';
import React from 'react';
import PostImage from '../atoms/PostImage';
import NavigationButton from '../atoms/Buttons/NavigationButton';

type Props = {
  title: string;
  pubDate: string;
  image_url: string;
  description: string;
  link: string;
};
const PostDetails = ({title, pubDate, image_url, description, link}: Props) => {
  const goToUrl = () => {
    Linking.openURL(link);
  };
  return (
    <View>
      <PostImage imageUrl={image_url} />
      <Text>{title}</Text>
      <Text>{pubDate}</Text>
      <Text>{description}</Text>
      <Text>Read full article at: </Text>
      <NavigationButton name={link} onPress={goToUrl} />
    </View>
  );
};

export default PostDetails;
