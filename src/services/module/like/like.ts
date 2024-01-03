import instance, { BASE_API_URL } from '@/services/config/axios';
import { LikeListResponse } from './response';

const getLikeList = (): Promise<LikeListResponse> => {
  const url = `${BASE_API_URL}/like`;
  const method = 'GET';
  return instance({ url, method });
};

const postUnlikedList = (id: string) => {
  const url = `${BASE_API_URL}/like/${id}`;
  const method = 'DELETE';
  return instance({ url, method });
};

export default { getLikeList, postUnlikedList };
