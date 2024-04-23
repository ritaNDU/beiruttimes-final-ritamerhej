import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';
import UserData from '../data/user.type';

export default function useManageSecureStorage() {
  async function storeUserInfo(accessToken: string, refreshToken: string) {
    const access = JSON.stringify(accessToken);
    const refresh = JSON.stringify(refreshToken);

    try {
      await RNSecureStorage.setItem('accessToken', access, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });

      await RNSecureStorage.setItem('refreshToken', refresh, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getStoredUserInfo() {
    const accessToken = await RNSecureStorage.getItem('accessToken');
    const refreshToken = await RNSecureStorage.getItem('refreshToken');

    const userInfo: UserData = {
      accessToken: accessToken ? JSON.parse(accessToken) : '',
      refreshToken: refreshToken ? JSON.parse(refreshToken) : '',
    };

    return userInfo;
  }

  async function removeUserInfo() {
    try {
      await RNSecureStorage.setItem('accessToken', '', {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
      await RNSecureStorage.setItem('refreshToken', '', {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return {storeUserInfo, getStoredUserInfo, removeUserInfo};
}
