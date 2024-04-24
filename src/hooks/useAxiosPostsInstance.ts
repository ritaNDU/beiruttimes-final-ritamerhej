import axios from 'axios';
import {BASE_URL} from '../service/api.data';
import useManageSecureStorage from './useManageSecureStorage';
import UserData from '../data/user.type';
import {jwtDecode} from 'jwt-decode';
import {decode} from 'base-64';

const useAxiosPostsInstance = () => {
  const {getStoredUserInfo} = useManageSecureStorage();
  const postsAxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  postsAxiosInstance.interceptors.request.use(async req => {
    const tokens: UserData = await getStoredUserInfo();
    if (tokens) {
      try {
        global.atob = decode;
        const test = jwtDecode(tokens.accessToken);
        console.log(test);
        req.headers.Authorization = `Bearer ${tokens.accessToken}`;
      } catch (e) {
        console.log(e);
      }
    }
    return req;
  });

  return {postsAxiosInstance};
};

export default useAxiosPostsInstance;
