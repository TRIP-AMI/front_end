import instance, { BASE_API_URL } from '@/services/config/axios';

const getBanner = () => {
  const url = `${BASE_API_URL}/banner`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getBanner };
