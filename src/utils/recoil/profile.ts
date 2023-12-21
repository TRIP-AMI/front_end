import { atom } from 'recoil';

const profileType = atom<'AMI' | 'TOURIST'>({
  key: 'profileType',
  default: 'AMI',
});

export default profileType;
