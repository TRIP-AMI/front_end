import instance, { BASE_API_URL } from '@/services/config/axios';

const checkAuthCode = (authCode: string) => {
  const url = `${BASE_API_URL}/joinAuth`;
  const method = 'GET';
  const params = { authCode };
  return instance({ url, method, params });
};

export default { checkAuthCode };
