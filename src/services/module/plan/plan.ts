import instance, { BASE_API_URL } from '@/services/config/axios';

const getPlanList = () => {
  const url = `${BASE_API_URL}/plan`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getPlanList };
