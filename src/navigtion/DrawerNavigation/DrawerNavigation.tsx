import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import NewsDescription from '../../screens/NewsDescription';
import NewsDetails from '../../screens/NewsDetails';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import useManageUser from '../../hooks/useManageUser';
import useManageSecureStorage from '../../hooks/useManageSecureStorage';
import {Alert} from 'react-native';
import NavigationButton from '../../components/atoms/Buttons/NavigationButton';

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
    <NavigationButton name="Sign Out" onPress={handleSignout} />
  );
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: {backgroundColor: '#fff'},
        // drawerActiveBackgroundColor: theme.colors.activeTabBackground,
        // drawerActiveTintColor: theme.colors.textColor,
        headerStyle: {
          // backgroundColor: theme.colors.backgroundColor,
        },
        headerRight: setButtonToHeader,
        headerShadowVisible: false,
      }}>
      <Drawer.Screen
        name="Tabs"
        component={TabsNavigation}
        options={{title: 'News'}}
      />
      <Drawer.Screen
        name="NewsDescription"
        component={NewsDescription}
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
        }}
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
