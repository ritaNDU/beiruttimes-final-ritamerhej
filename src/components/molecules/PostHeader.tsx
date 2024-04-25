import {View, Text} from 'react-native';
import React from 'react';
import NavigationButton from '../atoms/Buttons/NavigationButton';

type Props = {
  handleGoBack: () => void;
  isPostAvailable: boolean;
};
const PostHeader = ({handleGoBack, isPostAvailable}: Props) => {
  return (
    <View>
      <NavigationButton name="Go back" onPress={handleGoBack} />
      <Text>{isPostAvailable ? 'Details' : 'Post not available'}</Text>
    </View>
  );
};

export default PostHeader;
