import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import NewsDetails from '../../screens/NewsDetails';
import useManageUser from '../../hooks/useManageUser';
import useManageSecureStorage from '../../hooks/useManageSecureStorage';
import {Alert} from 'react-native';
import NavigationButton from '../../components/atoms/Buttons/NavigationButton';
import TodaysNews from '../../screens/TodaysNews';
import AllNews from '../../screens/Categories/AllNewsCategory';
import theme from '../../styles/theme';
import styles from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const {signUserOut} = useManageUser();
  const {removeUserInfo} = useManageSecureStorage();

  const handleSignout = async () => {
    await signUserOut();
    await removeUserInfo();
    Alert.alert('Signed out');
  };

  const setButtonToHeader = () => (
    <NavigationButton
      name="Sign Out"
      onPress={handleSignout}
      styleProp={styles.signoutButtonStyle}
    />
  );
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: {backgroundColor: '#fff'},
        drawerActiveBackgroundColor: theme.colors.activeTabBackground,
        drawerActiveTintColor: theme.colors.textColor,
        headerStyle: {
          backgroundColor: theme.colors.backgroundColor,
        },
        headerTintColor: theme.colors.textColor,
        headerRight: setButtonToHeader,
        headerShadowVisible: false,
      }}
      backBehavior="history">
      <Drawer.Screen
        name="NewsToday"
        component={TodaysNews}
        options={{
          title: 'News',
          headerTitleStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen
        name="AllNews"
        component={AllNews}
        options={{title: 'All News', lazy: true}}
      />
      <Drawer.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
