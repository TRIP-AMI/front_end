import instance from '@/services/config/axios';

export type SearchProgramItem = {
  id: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  date: Date;
};
export type SearchProgramResponse = SearchProgramItem[];

const getSearchProgramList = (): Promise<SearchProgramResponse> => {
  const url = `/search`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getSearchProgramList };
