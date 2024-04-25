import React from 'react';
import useManagePostsFetching from '../../hooks/useManagePostsFetching';
import PostsList from '../../components/organisms/PostsList';

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
    <PostsList
      posts={allPosts}
      handleLoadMore={handleLoadMore}
      onRefresh={handleRefresh}
      isLoading={isLoading}
      endReached={endReached}
      isRefreshing={refresh}
    />
  );
};

export default AllNews;
