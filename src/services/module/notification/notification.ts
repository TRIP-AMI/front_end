import instance, { BASE_API_URL } from '@/services/config/axios';
import { NotificationList } from './response';

const getNotificationCount = (): Promise<number> => {
  const url = `${BASE_API_URL}/notification`;
  const method = 'GET';
  return instance({ url, method });
};

const getNotificationList = (): Promise<NotificationList> => {
  const url = `${BASE_API_URL}/notification`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getNotificationCount, getNotificationList };
