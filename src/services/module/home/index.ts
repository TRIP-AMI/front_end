import instance, { BASE_API_URL } from '@/services/config/axios';

export type HomeSectionProgramItem = {
  id: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  date: Date;
};
export type HomeSectionProgramResponse = HomeSectionProgramItem[];

const getHomeProgramList = (): Promise<HomeSectionProgramResponse> => {
  const url = `${BASE_API_URL}/homeprogram`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getHomeProgramList };
