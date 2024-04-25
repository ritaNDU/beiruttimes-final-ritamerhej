import React, {useEffect} from 'react';
import useManagePostsFetching from '../../hooks/useManagePostsFetching';
import PostsList from '../../components/organisms/PostsList';

const LebanonCategory = () => {
  const {
    allPosts,
    endReached,
    isLoading,
    refresh,
    handleLoadMore,
    handleRefresh,
  } = useManagePostsFetching();

  const lebanonPosts = allPosts.filter(post =>
    post.country.includes('lebanon'),
  );
  useEffect(() => {});
  return (
    <PostsList
      posts={lebanonPosts}
      handleLoadMore={handleLoadMore}
      onRefresh={handleRefresh}
      isLoading={isLoading}
      endReached={endReached}
      isRefreshing={refresh}
    />
  );
};

export default LebanonCategory;
