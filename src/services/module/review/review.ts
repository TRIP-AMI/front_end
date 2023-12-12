import instance, { BASE_API_URL } from '@/services/config/axios';

const getReviewList = () => {
  const url = `${BASE_API_URL}/review`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getReviewList };
