import {
  Text,
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  onPress: () => void;
  isLoading?: boolean;
  styleProp?: StyleProp<ViewStyle>;
};
const NavigationButton = ({name, onPress, isLoading, styleProp}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styleProp]}>
      <Text>{name}</Text>
      {isLoading && <ActivityIndicator size={'small'} />}
    </Pressable>
  );
};

export default NavigationButton;
