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

  return (
    <FlashList
      renderItem={itemData => {
        return (
          <View>
            <PostCard
              title={itemData.item.title}
              imageUrl={itemData.item.image_url}
            />
          </View>
        );
      }}
      data={posts}
      keyExtractor={keyExtractor}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
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
