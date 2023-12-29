import { atom } from 'recoil';

const selectCalendarList = atom<string[]>({
  key: 'selectCalendarList',
  default: [],
});

export default selectCalendarList;
