/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import dayjs from 'dayjs';

// 지난달 날짜
const beforMDateList = (beforDateEnd_D: number, start_d: number) => {
  const temp = [];
  for (let i = 0; i < start_d; i++) {
    temp.push(beforDateEnd_D - i);
  }
  temp.reverse();
  return temp;
};
// 이번달 날짜
const nowMDateList = (end_D: number) => {
  const temp = [];
  for (let i = 1; i <= end_D; i++) {
    temp.push(i);
  }
  return temp;
};
// 다음달 날짜
const afterMDateList = (end_d: number) => {
  const temp = [];
  for (let i = 1; i < 7 - end_d; i++) {
    temp.push(i);
  }
  return temp;
};

function useCalendar() {
  const calculateDateList = ({ Y, M }: { Y: number; M: number }) => {
    // room create
    const table = new Array(7).fill([]);
    // 입력된 날짜
    const designatedDate = dayjs(`${Y}-${M}`);
    const beforDate = designatedDate.add(-1, 'M');

    const start = designatedDate.startOf('M').format();
    const end = designatedDate.endOf('M').format();

    const start_d = dayjs(start).get('d'); // 요일
    const end_D = dayjs(end).get('D'); // 일
    const end_d = dayjs(end).get('d'); // 요일

    // 배열 결합
    const concatList = [
      ...beforMDateList(beforDate.endOf('M').get('D'), start_d),
      ...nowMDateList(end_D),
      ...afterMDateList(end_d),
    ];

    // 가공된 리스트 반환
    return table.map((_item, i) => {
      return concatList.filter((__item, day) => day % 7 === i);
    });
  };

  return { calculateDateList };
}

export default useCalendar;
