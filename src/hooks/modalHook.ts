import { useState } from 'react';

const useModalHook = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onOpen = () => {
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
  };
  return { isVisible, onOpen, onClose };
};

export default useModalHook;
