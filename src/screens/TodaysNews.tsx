import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React from 'react';
import useManagePostsFetching from '../hooks/useManagePostsFetching';
import ShortPostsList from '../components/organisms/ShortPostsList';
import Top3PostsList from '../components/templates/Top3PostsList';
import styles from './styles';
import theme from '../styles/theme';

const TodaysNews = () => {
  const {allPosts} = useManagePostsFetching();

  // Here I didn't use useMemo because I know that the posts are only 10 posts at most here.
  // So useMemo would have caused an unnecessary overhead.
  // Those are the top news today.
  const topNewsToday = allPosts
    .slice(0, 10)
    .filter(post => post.category.includes('top'));
  const top3Post = topNewsToday.slice(0, 3);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.todaysNewsContainer}
      contentContainerStyle={styles.todaysNewsContentStyle}>
      <View>
        <Text style={styles.title}>Hot Today</Text>
        {top3Post.length === 0 ? (
          <ActivityIndicator color={theme.colors.textColor} />
        ) : (
          <>
            <Top3PostsList posts={top3Post} />
          </>
        )}
      </View>
      <View>
        <Text style={styles.title}>What's Happening Today</Text>
        {topNewsToday.length === 0 ? (
          <ActivityIndicator color={theme.colors.textColor} />
        ) : (
          <ShortPostsList posts={topNewsToday} />
        )}
      </View>
    </ScrollView>
  );
};

export default TodaysNews;
