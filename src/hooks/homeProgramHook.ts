import { useState, useEffect } from 'react';
import homeApi, { HomeSectionProgramResponse } from '@/services/module/home';
import BasicItem from '@/types/basicItem';
import { HomeProgramSectionId } from '@/types/Literal/home';

const processData = (list: HomeSectionProgramResponse): BasicItem[] => {
  return list.map((item) => {
    return BasicItem.Builder.withBasicItemId(item.id)
      .withBasicItemImg(item.imgUrl)
      .withBasicItemTitle(item.title)
      .withBasicItemSubTitle(item.subTitle)
      .withBasicItemDate(item.date)
      .build();
  });
};

function useHomeProgram() {
  const [latestRegistrationProgram, setLatestRegistrationProgram] = useState<
    BasicItem[]
  >([]);

  const [closeToClosingAMI, setCloseToClosingAMI] = useState<BasicItem[]>([]);

  const data: {
    id: HomeProgramSectionId;
    title: string;
    data: BasicItem[];
  }[] = [
    {
      id: 'LATEST_REGISTRATION_PROGRAM',
      title: 'Latest Registration Program',
      data: latestRegistrationProgram,
    },
    {
      id: 'CLOSE_TO_CLOSING_AMI',
      title: 'Close to closing AMI',
      data: closeToClosingAMI,
    },
  ];

  const dataSetLRP = async () => {
    const res = await homeApi.getHomeProgramList();
    setLatestRegistrationProgram(processData(res.slice(0, 5)));
  };
  const dataSetCTC = async () => {
    const res = await homeApi.getHomeProgramList();
    setCloseToClosingAMI(processData(res.slice(0, 5)));
  };

  useEffect(() => {
    dataSetLRP();
    dataSetCTC();
  }, []);
  return { data };
}

export default useHomeProgram;
