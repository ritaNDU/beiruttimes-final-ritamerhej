import {Text, Linking, View} from 'react-native';
import React from 'react';
import PostImage from '../atoms/PostImage';
import NavigationButton from '../atoms/Buttons/NavigationButton';
import styles from './molecules.styles';

type Props = {
  title: string;
  pubDate: string;
  image_url: string;
  description: string;
  link: string;
  source: string;
};
const PostDetails = ({
  title,
  pubDate,
  image_url,
  description,
  link,
  source,
}: Props) => {
  const goToUrl = () => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.postDetailsContainer}>
      <PostImage imageUrl={image_url} />
      <View style={styles.articleContentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.postDetailsTitle}>{title}</Text>
          <Text style={styles.publicationDate}>Published on: {pubDate}</Text>
        </View>
        <Text style={styles.decription}>{description}</Text>
        <View style={styles.readArticleContainer}>
          <Text style={styles.title}>Read full article at: </Text>
          <NavigationButton name={source} onPress={goToUrl} />
        </View>
      </View>
    </View>
  );
};

export default PostDetails;
