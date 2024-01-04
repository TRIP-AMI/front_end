import instance, { BASE_API_URL } from '@/services/config/axios';

export type BannerListItem = {
  id: number;
  link: string;
  imgUrl: string;
};

export type BannerListResponse = BannerListItem[];

const getBanner = (): Promise<BannerListResponse> => {
  const url = `${BASE_API_URL}/banner`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getBanner };
