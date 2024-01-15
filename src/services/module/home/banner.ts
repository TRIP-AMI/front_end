import { useQuery } from '@tanstack/react-query';
import instance from '@/services/config/axios';

export const QUERY_KEY = '/banner';

export type BannerListItem = {
  id: number;
  title: string;
  imgUrl: string;
};

export type BannerListResponse = {
  banners: BannerListItem[];
};

export const getBanner = async (): Promise<BannerListResponse> => {
  const res = await instance.get(`/banners`);
  return res.data.data;
};

export const useBannerQuery = () => {
  return useQuery({ queryKey: [QUERY_KEY], queryFn: getBanner });
};
