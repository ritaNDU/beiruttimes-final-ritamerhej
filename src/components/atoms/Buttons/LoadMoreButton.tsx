import {Text, ActivityIndicator, Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import theme from '../../../styles/theme';

type Props = {
  onPress: () => void;
  isLoading: boolean;
  endReached: boolean;
  name?: string;
};

const LoadMoreButton = ({name, onPress, isLoading, endReached}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.loadMoreButtonContainer}>
      <Text style={styles.navigationButtonText}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={theme.colors.accentColor} />
        ) : name ? (
          name
        ) : endReached ? (
          'You have reached the end. Meow!'
        ) : (
          'Load More'
        )}
      </Text>
    </Pressable>
  );
};

export default LoadMoreButton;
