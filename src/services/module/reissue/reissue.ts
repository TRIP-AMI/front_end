import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '@/services/config/axios';

const getNewAccessToken = async () => {
  try {
    const { headers } = await instance.patch('/auth/token/reissue', {
      headers: {
        Refresh: await AsyncStorage.getItem('refresh'),
        Authroization: await AsyncStorage.getItem('token'),
      },
    });
    const accessToken = headers['authorization'];
    instance.defaults.headers.common['Authorization'] = accessToken;
    await AsyncStorage.setItem('token', accessToken);
    // eslint-disable-next-line
  } catch (e: any) {
    console.log(`token reissue error: ${e}`);
    if (e.response.status === 401) {
      // TODO: 로그아웃 처리
      await AsyncStorage.multiRemove(['token', 'refresh', 'profile']);
    }
  }
};

export default getNewAccessToken;
