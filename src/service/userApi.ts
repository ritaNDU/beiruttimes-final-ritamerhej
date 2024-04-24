import userAxiosIntance from './userAxiosInstance';
import {
  LOGIN_ENDPOINT,
  REFRESH_TOKEN_ENDPOINT,
  SIGNUP_ENDPOINT,
  TOKEN_EXPIRATION,
} from './api.data';
import UserData, {User} from '../data/user.type';
import {Alert} from 'react-native';

export async function createNewUser(user: User) {
  try {
    await userAxiosIntance.post(SIGNUP_ENDPOINT, {
      ...user,
      token_expires_in: TOKEN_EXPIRATION,
    });
  } catch (e) {
    Alert.alert("Couldn't create user. You may already be registered.");
    console.log(e);
  }
}

export async function getUserTokens(user: User) {
  try {
    let res = await userAxiosIntance.post(LOGIN_ENDPOINT, {
      ...user,
      token_expires_in: TOKEN_EXPIRATION,
    });
    if (res) {
      let data = res.data;
      const userTokens: UserData = {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };
      return userTokens;
    }
  } catch (e) {
    Alert.alert(
      'Login failed. You either entered wrong credentials or are not registered yet.',
    );
  }
}

export async function refreshUserToken(refreshToken: string) {
  try {
    let res = await userAxiosIntance.post(REFRESH_TOKEN_ENDPOINT, {
      refreshToken: refreshToken,
      token_expires_in: TOKEN_EXPIRATION,
    });
    if (res) {
      let data = res.data;
      const newAccessToken: string = data.accessToken;
      return newAccessToken;
    }
  } catch (e) {
    Alert.alert('An error occured. You will be logged out.');
  }
}
