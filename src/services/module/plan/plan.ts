import instance from '@/services/config/axios';

const getPlanList = () => {
  const url = `http://10.19.201.109:9999/plan`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getPlanList };
