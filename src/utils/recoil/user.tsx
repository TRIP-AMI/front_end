import { atom } from 'recoil';

export type UserType = {
  id: number;
  nickname: string;
  email: string;
  imgUrl: string;
};

const userState = atom<UserType>({
  key: 'userState',
  default: {
    id: 1,
    nickname: 'Jenny',
    email: 'tripami@tripami.co.kr',
    imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
  },
});

export default userState;
