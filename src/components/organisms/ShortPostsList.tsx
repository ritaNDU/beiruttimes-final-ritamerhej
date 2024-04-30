import React from 'react';
import Post from '../../data/post.type';
import PostCard from '../molecules/PostCard';
import {StyleProp, ViewStyle} from 'react-native';

// I am using this component to display very short lists.
// Like the topPostsToday list that is only at most 10 posts.
// For bigger lists, I am using the PostList component.

type Props = {
  posts: Post[];
  styleProp?: StyleProp<ViewStyle>;
};
const ShortPostsList = ({posts}: Props) => {
  return (
    <>
      {posts.map(post => {
        return (
          <PostCard
            key={post._id}
            title={post.title}
            imageUrl={post.image_url}
            postId={post._id}
          />
        );
      })}
    </>
  );
};

export default ShortPostsList;
