import instance from '../../config/axios';

const getBanner = () => {
  const url = `http://localhost:9999/banner`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getBanner };
