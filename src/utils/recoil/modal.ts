import { atom } from 'recoil';
import { ModalState } from '@/types/ModalTypes';

const modalState = atom<ModalState | null>({
  key: 'modalState',
  default: null,
});

export default modalState;
