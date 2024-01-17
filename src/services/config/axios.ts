// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// 로컬 서버 URL
export const BASE_API_URL = 'https://tripami.xyz/api/v1';

// TODO: 개발서버 url
// export const BASE_API_URL = 'http://43.202.134.168:8080';

// create an axios instance
const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10 * 1000,
  headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json' },
});

// const getNewAccessToken = async () => {
//   try {
//     const { headers } = await instance.patch('/auth/token/reissue', {
//       headers: {
//         Refresh: await AsyncStorage.getItem('refresh'),
//         Authroization: await AsyncStorage.getItem('token'),
//       },
//     });
//     const accessToken = headers['authorization'];
//     instance.defaults.headers.common['Authorization'] = accessToken;
//     await AsyncStorage.setItem('token', accessToken);
//     // eslint-disable-next-line
//   } catch (e: any) {
//     console.log(`token reissue error: ${e}`);
//     if (e.response.status === 401) {
//       // TODO: 로그아웃 처리
//       await AsyncStorage.multiRemove(['token', 'refresh', 'profile']);
//     }
//   }
// };

// response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log(
      `[axios] url: ${response.config.url} status: ${response.status}`,
    );
    return response;
  },
  (error) => {
    console.log(
      `[axios] url: ${error.config.url} status: ${error.response.status}`,
    );
    if (
      error.response.status === 401 &&
      error.config.url !== '/auth/token/reissue'
    ) {
      console.log(`토큰 만료 에러: ${error}`);
      // getNewAccessToken();
    }
    return Promise.reject(error);
  },
);

export default instance;
