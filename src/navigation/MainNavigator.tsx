import React, {useEffect, useState} from 'react';
import useManageSecureStorage from '../hooks/useManageSecureStorage';
import NativeStackNavigator from './NativeStackNavigation/NativeStackNavigator';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';
import Loading from '../components/templates/Loading';
import useManageUser from '../hooks/useManageUser';
import BootSplash from 'react-native-bootsplash';

const MainNavigator = () => {
  const {getStoredUserInfo} = useManageSecureStorage();
  const {isUserSignedIn, signUserIn} = useManageUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      try {
        const userInfo = await getStoredUserInfo();
        if (
          userInfo &&
          userInfo.accessToken !== '' &&
          userInfo.refreshToken !== ''
        ) {
          signUserIn();
        }
      } catch (err) {
        console.log(err);
      } finally {
        await BootSplash.hide({fade: true});
        setIsLoading(false);
      }
    }

    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserSignedIn]);

  if (isLoading) {
    return <Loading />;
  }
  if (!isUserSignedIn) {
    return <NativeStackNavigator />;
  } else {
    return <DrawerNavigation />;
  }
};

export default MainNavigator;
