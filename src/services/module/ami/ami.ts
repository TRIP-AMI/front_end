import instance from '@services/config/axios';
import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = '/amis';

export type AmiItem = {
  email: string;
  nickname: string;
  imgUrl: string;
  programIdList: number[];
};

export const getAmi = async (amiId: number): Promise<AmiItem> => {
  const res = await instance.get(`/amis/${amiId}`);
  return res.data;
};

export const useAmiQuery = (amiId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY, amiId],
    queryFn: () => getAmi(amiId),
  });
};
