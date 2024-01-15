import { atom } from 'recoil';

export type UserType = {
  memberId: number;
  nickname: string;
  email: string;
  imgUrl: string;
};

const userState = atom<UserType>({
  key: 'userState',
  default: {
    memberId: 1,
    nickname: 'Jenny',
    email: 'tripami@tripami.co.kr',
    imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
  },
});

export default userState;
