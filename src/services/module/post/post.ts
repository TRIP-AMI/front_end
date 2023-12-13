import instance, { BASE_API_URL } from '@/services/config/axios';

const getPostList = () => {
  const url = `${BASE_API_URL}/post`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getPostList };
