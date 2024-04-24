import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Image, ImageSourcePropType, Text} from 'react-native';
// import styles from './TabsNavigation.style';
import TodaysNews from '../../screens/TodaysNews';
import Search from '../../screens/Search';

const Tabs = createBottomTabNavigator();
// const addLogo = (image: ImageSourcePropType) => () => {
//   return <Image style={styles.icons} source={image} />;
// };
const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarActiveBackgroundColor: 'red',
        tabBarInactiveTintColor: '#bcbcbc',
        tabBarLabelStyle: {fontWeight: '900'},
      }}>
      <Tabs.Screen
        name="TodaysNews"
        component={TodaysNews}
        options={{
          // tabBarIcon: addLogo(require('../../assets/icons/feed.png')),
          title: 'Daily News',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          // tabBarIcon: addLogo(require('../../assets/icons/friends.png')),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
