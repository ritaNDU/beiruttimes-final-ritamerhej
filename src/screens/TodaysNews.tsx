import {Text, View} from 'react-native';
import React from 'react';
import useManagePostsFetching from '../hooks/useManagePostsFetching';

const TodaysNews = () => {
  const {handleLoadMore} = useManagePostsFetching();
  return (
    <View>
      <Text>Today's News</Text>
    </View>
  );
};

export default TodaysNews;
