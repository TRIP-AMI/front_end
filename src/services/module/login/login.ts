import instance, { BASE_API_URL } from '@/services/config/axios';
import { ILoginInputs } from '@/types/FormTypes';
import { User } from '@/types/UserTypes';

const getLoginUser = (req: ILoginInputs): Promise<User> => {
  const url = `${BASE_API_URL}/login`;
  const method = 'GET';
  console.log('login:', req);
  return instance({ url, method });
};

export default { getLoginUser };
