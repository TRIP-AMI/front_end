import axios from 'axios';

// local mock 서버
/**
 * 1. http://<내부ip>:9999
 *  package.json stdb script 변경
 * "stdb": "json-server --host <내부ip> --watch db.json -p 9999"
 * 2. http://localhost:9999
 * xcode 시뮬레이터 사용시 그냥 npm run stdb 실행
 */

// 로컬 서버 URL
export const BASE_API_URL = 'http://localhost:8080/api/v1';

// json-server URL
export const BASE_MOCK_API_URL = 'http://localhost:9999';

// TODO: 개발서버 url
// export const BASE_API_URL = 'http://43.202.134.168:8080';

// create an axios instance
const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10 * 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const mockInstance = axios.create({
  baseURL: BASE_MOCK_API_URL,
  timeout: 10 * 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log(`[axios] ${response.config.url} ${response.status}`);
    return response;
  },
  // (error) => {
  //   console.error('네트워크 에러 입니다.', error);
  // },
);

export default instance;
