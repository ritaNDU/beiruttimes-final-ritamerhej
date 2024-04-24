/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {User} from './src/data/user.type';
import {getUserTokens} from './src/service/userApi';
import useManageSecureStorage from './src/hooks/useManageSecureStorage';
import useAxiosPostsInstance from './src/hooks/useAxiosPostsInstance';
import {POSTS_ENDPOINT} from './src/service/api.data';

function App(): React.JSX.Element {
  const {storeUserInfo} = useManageSecureStorage();
  const {postsAxiosInstance} = useAxiosPostsInstance();

  useEffect(() => {
    const login = async () => {
      const user: User = {
        email: 'rita@test.com',
        password: '1234567890',
      };
      const tokens = await getUserTokens(user);
      console.log(tokens?.accessToken);
      if (tokens) {
        storeUserInfo(tokens.accessToken, tokens.refreshToken);
        const url = new URL(POSTS_ENDPOINT);
        url.searchParams.append('page', '1');
        url.searchParams.append('pageSize', '1');

        const res = await postsAxiosInstance.get(
          `${POSTS_ENDPOINT}?page=1&pageSize=1`,
        );

        try {
          const res2 = await postsAxiosInstance.get(
            `${POSTS_ENDPOINT}?page=1&pageSize=1`,
          );
        } catch (e) {
          console.log(e);
        }
      }
    };
    login();
  }, []);

  return <Text>Hello</Text>;
}

export default App;
