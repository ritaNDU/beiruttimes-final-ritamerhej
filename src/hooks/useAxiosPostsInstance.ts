import axios from 'axios';
import {BASE_URL, POST_LIMIT, POSTS_ENDPOINT} from '../service/api.data';
import useManageSecureStorage from './useManageSecureStorage';
import UserData from '../data/user.type';
import {jwtDecode} from 'jwt-decode';
import {decode} from 'base-64';
import {refreshUserToken} from '../service/userApi';
import {Alert} from 'react-native';

const useAxiosPostsInstance = () => {
  const {getStoredUserInfo, storeUserInfo} = useManageSecureStorage();

  const postsAxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  postsAxiosInstance.interceptors.request.use(async req => {
    const tokens: UserData | undefined = await getStoredUserInfo();
    if (tokens) {
      try {
        global.atob = decode;
        const decodedToken = jwtDecode(tokens.accessToken);
        if (decodedToken.exp) {
          const isExpired = Math.floor(Date.now() / 1000) >= decodedToken.exp;
          if (!isExpired) {
            req.headers.Authorization = `Bearer ${tokens.accessToken}`;
            return req;
          }
          const newToken = await refreshUserToken(tokens.refreshToken);
          if (newToken) {
            await storeUserInfo(newToken, tokens.refreshToken);
            req.headers.Authorization = `Bearer ${newToken}`;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    return req;
  });

  async function getPostsFromApi(page: string) {
    const response = await postsAxiosInstance
      .get(`${POSTS_ENDPOINT}?page=${page}&pageSize=${POST_LIMIT}`)
      .catch(() =>
        Alert.alert(
          "Couldn't get data. Make sure you are connected to the internet and try again.",
        ),
      );
    if (response) {
      const data = response.data;
      return data;
    }
  }

  return {getPostsFromApi};
};

export default useAxiosPostsInstance;
