import instance, { BASE_API_URL } from '@/services/config/axios';

const getAccessToken = () => {
  const url = `${BASE_API_URL}/login`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getAccessToken };
