import { useProgramQuery } from '@/services/module/program/program';

const useProgramDetail = (id: number) => {
  const { data, isPending, isError } = useProgramQuery(id);

  const {
    title,
    subTitle,
    location,
    images,
    startTime,
    content,
    price,
    amiId,
    theme,
    keywords,
    spots,
    imgUrl,
  } = data || {
    title: '',
    subTitle: '',
    location: '',
    images: [],
    startTime: new Date(),
    content: '',
    price: 0,
    amiId: -1,
    theme: '',
    keywords: [],
    spots: [],
    imgUrl: '',
  };

  return {
    title,
    subTitle,
    location,
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
