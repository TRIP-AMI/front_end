import instance from '../../config/axios';

const getSampleApi = () => {
  const url = `http://localhost:9999/posts`;
  const method = 'GET';
  return instance({ url, method });
};

export default getSampleApi;
