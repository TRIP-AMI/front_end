import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: {
    id: '1',
    name: 'Jenny',
    isAmi: true,
    email: 'tripami@tripami.co.kr',
    profileImgUrl:
      'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
  },
});

export default userState;
