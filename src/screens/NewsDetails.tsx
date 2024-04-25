import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import useManageAllPosts from '../hooks/useManageAllPosts';
import {getPostById} from '../utils/postsUtils';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  DrawerNavigatorNavigationProps,
  DrawerNavigatorPropsList,
} from '../navigation/DrawerNavigation/DrawerNavigation.types';
import Post from '../data/post.type';
import PostHeader from '../components/molecules/PostHeader';
import PostDetails from '../components/molecules/PostDetails';

const NewsDetails = () => {
  const {allPosts} = useManageAllPosts();
  const {params} =
    useRoute<
      RouteProp<
        DrawerNavigatorPropsList,
        'LebanonNews' | 'AllNews' | 'NewsToday'
      >
    >();
  const navigation = useNavigation<DrawerNavigatorNavigationProps>();

  const {id} = params ?? {id: ''};
  const post: Post | undefined = getPostById(allPosts, id);
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <PostHeader handleGoBack={goBack} isPostAvailable={post ? true : false} />
      <View>
        {post ? (
          <PostDetails
            title={post.title}
            pubDate={post.pubDate}
            image_url={post.image_url}
            description={post.description}
            link={post.link}
          />
        ) : (
          <Text>Check your internet connection and try again.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default NewsDetails;
