import axios from 'axios';

// create an axios instance
const instance = axios.create({
  baseURL: 'exp://192.168.10.140:8081',
  timeout: 10 * 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// response interceptor
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('네트워크 에러 입니다.', error);
  },
);

export default instance;
