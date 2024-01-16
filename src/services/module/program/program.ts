import { useQuery } from '@tanstack/react-query';
import instance from '@/services/config/axios';
import { Category } from '@/constants/category';
import { Spot } from '@/types/program/ProgramCourse';

export const QUERY_KEY = '/programs';

export type ProgramDetailsResponse = {
  title: string;
  subTitle: string;
  location: string;
  images: string[];
  startTime: Date;
  content: string;
  price: number;
  amiId: number;
  theme: Category;
  keywords: string[];
  spots: Spot[];
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
