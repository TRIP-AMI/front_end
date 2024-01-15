import { useQuery } from '@tanstack/react-query';
import instance from '@/services/config/axios';
import { Category } from '@/constants/category';

export const QUERY_KEY = '/programs';

export type TravelTime = {
  WALK: Date;
  BUS: Date;
  TRAIN: Date;
  CAR: Date;
};

export type Spot = {
  id: number;
  title: string;
  imgUrl: string;
  contnet: string;
  requiredTime: string;
  transportWithTimes: TravelTime;
};

export type ProgramDetailsResponse = {
  title: string;
  subTitle: string;
  images: string[];
  startTime: Date;
  content: string;
  price: number;
  amiId: number;
  theme: Category;
  keywords: string[];
  spots: [];
  imgUrl: string;
};

export type ProgramDetailsRequest = {
  id: number;
};

export const getProgramDetail = async (
  id: number,
): Promise<ProgramDetailsResponse> => {
  const res = await instance.get(`/programs/${id}`);
  return res.data.data;
};

export const useProgramQuery = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEY, id],
    queryFn: () => getProgramDetail(id),
  });
};
