import instance from '../../config/axios';

const getBanner = () => {
  const url = `http://10.19.201.109:9999/banner`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getBanner };
