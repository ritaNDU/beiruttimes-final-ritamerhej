import {Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigatorNavigationProps} from '../../navigation/DrawerNavigation/DrawerNavigation.types';
import PostImage from '../atoms/PostImage';

type Props = {
  title: string;
  imageUrl?: string;
  postId: string;
};
const PostCard = ({title, imageUrl, postId}: Props) => {
  const navigation = useNavigation<DrawerNavigatorNavigationProps>();
  const navigateToDetails = () => {
    navigation.navigate('NewsDetails', {id: postId});
  };
  return (
    <Pressable onPress={navigateToDetails}>
      <PostImage imageUrl={imageUrl} />
      <Text>{title}</Text>
    </Pressable>
  );
};

export default PostCard;
