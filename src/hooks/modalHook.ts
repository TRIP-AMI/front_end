import { useRecoilState } from 'recoil';
import modalState from '@/utils/recoil/modal';
import { ModalName } from '@/types/ModalTypes';

const useModalHook = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const resetModal = () => {
    setModal(null);
  };

  const setModalName = (name: ModalName) => {
    setModal({
      modalName: name,
    });
  };

  return { modal, setModal, resetModal, setModalName };
};

export default useModalHook;
