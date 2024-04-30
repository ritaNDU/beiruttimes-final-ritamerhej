import React from 'react';
import {FlashList} from '@shopify/flash-list';
import Post from '../../data/post.type';
import PostCard from '../molecules/PostCard';
import LoadMoreButton from '../atoms/Buttons/LoadMoreButton';
import {View} from 'react-native';

type Props = {
  posts: Post[];
  handleLoadMore: () => void;
  onRefresh: () => void;
  isLoading: boolean;
  endReached: boolean;
  isRefreshing: boolean;
};
const PostsList = ({
  posts,
  handleLoadMore,
  isLoading,
  endReached,
  onRefresh,
  isRefreshing,
}: Props) => {
  const keyExtractor = (item: Post) => item._id;

  const renderItem = itemData => {
    return (
      <View>
        <PostCard
          title={itemData.item.title}
          imageUrl={itemData.item.image_url}
          postId={itemData.item._id}
        />
      </View>
    );
  };
  return (
    <FlashList
      renderItem={renderItem}
      data={posts}
      keyExtractor={keyExtractor}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={8}
      estimatedItemSize={100}
      ListFooterComponent={
        <LoadMoreButton
          onPress={handleLoadMore}
          isLoading={isLoading}
          endReached={endReached}
        />
      }
    />
  );
};

export default PostsList;
