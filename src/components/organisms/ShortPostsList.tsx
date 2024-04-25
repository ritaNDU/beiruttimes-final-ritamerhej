import React from 'react';
import Post from '../../data/post.type';
import PostCard from '../molecules/PostCard';

type Props = {
  posts: Post[];
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
