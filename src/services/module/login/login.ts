import { AxiosResponse } from 'axios';
import instance from '@/services/config/axios';
import { ILoginInputs as LoginRequest } from '@/types/FormTypes';

export type LoginResponse = {
  email: string;
  nickname: string;
  imgUrl: string;
};

const getLoginUser = (
  req: LoginRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<LoginResponse, any>> => {
  const url = `auth/login`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

export default { getLoginUser };
