import React from 'react';
import useManagePostsFetching from '../../hooks/useManagePostsFetching';
import PostsList from '../../components/organisms/PostsList';
import styles from '../styles';
import {View} from 'react-native';

const AllNews = () => {
  const {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManagePostsFetching();

  return (
    <View style={styles.todaysNewsContainer}>
      <PostsList
        posts={allPosts}
        handleLoadMore={handleLoadMore}
        onRefresh={handleRefresh}
        isLoading={isLoading}
        endReached={endReached}
        isRefreshing={refresh}
      />
    </View>
  );
};

export default AllNews;
