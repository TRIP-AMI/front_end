import { useQuery } from '@tanstack/react-query';
import instance from '@/services/config/axios';

export const QUERY_KEY = '/banner';

export type BannerListItem = {
  id: number;
  link: string;
  imgUrl: string;
};

export type BannerListResponse = BannerListItem[];

const getBanner = (): Promise<BannerListResponse> => {
  return instance.get(`/banners`);
};

export const useBannerQuery = () => {
  return useQuery({ queryKey: [QUERY_KEY], queryFn: getBanner });
};
