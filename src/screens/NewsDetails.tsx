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
import PostDetails from '../components/molecules/PostDetails';
import NavigationButton from '../components/atoms/Buttons/NavigationButton';
import styles from './styles';

const NewsDetails = () => {
  const {allPosts} = useManageAllPosts();
  const {params} =
    useRoute<RouteProp<DrawerNavigatorPropsList, 'AllNews' | 'NewsToday'>>();
  const navigation = useNavigation<DrawerNavigatorNavigationProps>();

  const {id} = params ?? {id: ''};
  const post: Post | undefined = getPostById(allPosts, id);
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.newsDetailsContainer}>
      <View>
        {post ? (
          <PostDetails
            title={post.title}
            pubDate={post.pubDate}
            image_url={post.image_url}
            description={post.description}
            link={post.link}
            source={post.source_url}
          />
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.title}>
              Couldn't get post. Check your internet connection and try again.
            </Text>
          </View>
        )}
      </View>
      <NavigationButton
        name="Go back"
        onPress={goBack}
        styleProp={styles.goBackButton}
      />
    </ScrollView>
  );
};

export default NewsDetails;
