import axios from 'axios';
import {BASE_URL} from '../service/api.data';
import useManageSecureStorage from './useManageSecureStorage';
import UserData from '../data/user.type';
import {jwtDecode} from 'jwt-decode';
import {decode} from 'base-64';
import {refreshUserToken} from '../service/userApi';

const useAxiosPostsInstance = () => {
  const {getStoredUserInfo, storeUserInfo} = useManageSecureStorage();
  const postsAxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  postsAxiosInstance.interceptors.request.use(async req => {
    const tokens: UserData = await getStoredUserInfo();
    if (tokens) {
      try {
        global.atob = decode;
        const decodedToken = jwtDecode(tokens.accessToken);
        if (decodedToken.exp) {
          const isExpired = Math.floor(Date.now() / 1000) > decodedToken.exp;
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
      } catch (e) {
        console.log(e);
      }
    }
    return req;
  });

  return {postsAxiosInstance};
};

export default useAxiosPostsInstance;
