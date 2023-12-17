import { useState } from 'react';
import { useRecoilState } from 'recoil';
import modalState from '@/utils/recoil/modal';
import { ModalName } from '@/types/ModalTypes';

const useModalHook = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modal, setModal] = useRecoilState(modalState);

  const onOpen = () => {
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const resetModal = () => {
    setModal(null);
  };

  const setModalName = (name: ModalName) => {
    setModal({
      modalName: name,
    });
  };

  return {
    isVisible,
    onOpen,
    onClose,
    modal,
    setModal,
    resetModal,
    setModalName,
  };
};

export default useModalHook;
