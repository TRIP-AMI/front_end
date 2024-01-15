import { useProgramQuery } from '@/services/module/program/program';

const useProgramDetail = (id: number) => {
  const { data, isPending, isError } = useProgramQuery(id);
  const {
    title,
    subTitle,
    images,
    startTime,
    content,
    price,
    amiId,
    theme,
    keywords,
    spots,
    imgUrl,
  } = data || {};

  return {
    title,
    subTitle,
    images,
    startTime,
    content,
    price,
    amiId,
    theme,
    keywords,
    spots,
    imgUrl,
    isPending,
    isError,
  };
};

export default useProgramDetail;
