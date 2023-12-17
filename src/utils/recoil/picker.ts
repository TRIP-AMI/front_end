import { atom } from 'recoil';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pickerSelectValue = atom<any | null>({
  key: 'pickerSelectValue',
  default: null,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pickerList = atom<{ label: string; value: any }[]>({
  key: 'pickerList',
  default: [],
});

export default pickerSelectValue;
