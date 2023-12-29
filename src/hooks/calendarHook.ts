/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { CalendarProps } from '@/types/NavigationTypes';

export interface CalendarDateItem {
  value: number;
  date: Dayjs;
  disabled: boolean;
}

// 지난달 날짜
const beforMDateList = ({
  beforDateEnd_D,
  start_d,
  designatedDate,
}: {
  beforDateEnd_D: number;
  start_d: number;
  designatedDate: Dayjs;
}) => {
  const temp = [];
  for (let i = 0; i < start_d; i++) {
    const item: CalendarDateItem = {
      value: beforDateEnd_D - i,
      disabled: true,
      date: designatedDate.add(-1, 'M').set('D', beforDateEnd_D - i),
    };

    temp.push(item);
  }
  temp.reverse();
  return temp;
};
// 이번달 날짜
const nowMDateList = ({
  end_D,
  designatedDate,
}: {
  end_D: number;
  designatedDate: Dayjs;
}) => {
  const temp = [];
  const now = dayjs();
  for (let i = 1; i <= end_D; i++) {
    const item: CalendarDateItem = {
      value: i,
      disabled: false,
      date: designatedDate.set('D', i),
    };

    if (item.date.isBefore(now)) {
      item.disabled = true;
    }

    temp.push(item);
  }
  return temp;
};
// 다음달 날짜
const afterMDateList = ({
  end_d,
  designatedDate,
}: {
  end_d: number;
  designatedDate: Dayjs;
}) => {
  const temp = [];
  for (let i = 1; i < 7 - end_d; i++) {
    temp.push({
      value: i,
      disabled: true,
      date: designatedDate.add(1, 'M').set('D', i),
    });
  }
  return temp;
};

/**
 * 입력된 년, 월 로 날짜 계산 된 리스트 반환
 */
export const calculateDateList = ({ selectDate }: { selectDate: string }) => {
  // room create
  const table = new Array(7).fill([]);
  // 입력된 날짜
  const designatedDate = dayjs(selectDate);
  const beforDate = designatedDate.add(-1, 'M');

  const start = designatedDate.startOf('M').format();
  const end = designatedDate.endOf('M').format();

  const start_d = dayjs(start).get('d'); // 요일
  const end_D = dayjs(end).get('D'); // 일
  const end_d = dayjs(end).get('d'); // 요일

  // 배열 결합
  const concatList: CalendarDateItem[] = [
    ...beforMDateList({
      beforDateEnd_D: beforDate.endOf('M').get('D'),
      start_d,
      designatedDate,
    }),
    ...nowMDateList({ end_D, designatedDate }),
    ...afterMDateList({ end_d, designatedDate }),
  ];

  // 가공된 리스트 반환
  return table.map((_item, i) => {
    return concatList.filter((__item, day) => day % 7 === i);
  });
};

export const selectableMonthsList = (): { label: string; value: string }[] => {
  const temp = [];
  const now = dayjs().startOf('M');
  const maxDate = 3;
  for (let i = 0; i < maxDate; i++) {
    const tempDate = now.add(i, 'M');
    temp.push({
      label: tempDate.format('MMMM YYYY'),
      value: tempDate.format(),
    });
  }
  return temp;
};

export default function useCalendar(params: Readonly<CalendarProps>) {
  const [selectDateList, setSelectDateList] = useState<string[]>([]);

  const deleteDate = (date: string) => {
    setSelectDateList((prev) =>
      prev.filter((selectDate) => dayjs(date).format() !== selectDate),
    );
  };

  const checkConfirm = () => selectDateList.length <= 0;

  useEffect(() => {
    if (params && params.availableDates) {
      setSelectDateList(params.availableDates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return {
    selectDateList,
    setSelectDateList,
    deleteDate,
    checkConfirm,
  };
}
