import {ScrollView} from 'react-native';
import React from 'react';
import Post from '../../data/post.type';
import ShortPostsList from '../organisms/ShortPostsList';

type Props = {
  posts: Post[];
};
const Top3PostsList = ({posts}: Props) => {
  return (
    <ScrollView horizontal>
      <ShortPostsList posts={posts} />
    </ScrollView>
  );
};

export default Top3PostsList;
