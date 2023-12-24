import { atom } from 'recoil';
import { Profile } from '@/types/UserTypes';

const profileType = atom<Profile>({
  key: 'profileType',
  default: 'AMI',
});

export default profileType;
