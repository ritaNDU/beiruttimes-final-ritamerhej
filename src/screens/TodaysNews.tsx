import {ScrollView, Text} from 'react-native';
import React from 'react';
import useManagePostsFetching from '../hooks/useManagePostsFetching';
import ShortPostsList from '../components/organisms/ShortPostsList';
import Top3PostsList from '../components/templates/Top3PostsList';

const TodaysNews = () => {
  const {allPosts} = useManagePostsFetching();

  //Here I didn't use useMemo because I know that the posts are only 10
  const newsToday = allPosts.filter(post => post.category.includes('top'));

  const top3Post = newsToday.slice(0, 3);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Top Posts</Text>
      <Top3PostsList posts={top3Post} />
      <Text>What's Happening Today</Text>
      <ShortPostsList posts={newsToday} />
    </ScrollView>
  );
};

export default TodaysNews;
