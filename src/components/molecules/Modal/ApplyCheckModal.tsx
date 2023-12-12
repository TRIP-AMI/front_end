import { useSetRecoilState } from 'recoil';
import modalState from '@/utils/recoil/modal';
import BasicTwoButtonModal from '@/components/atoms/Modal/BasicTwoButtonsModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';

export default function ApplyCheckModal() {
  const setModal = useSetRecoilState(modalState);

  const onClose = () => {
    setModal(null);
  };

  const onConfirm = () => {
    console.log('apply check modal');
    // setModal(null);
    setModal({ modalName: 'APPLY_COMPLETE' });
  };

  return (
    <BasicTwoButtonModal
      cancelText='Cancel'
      confirmText='Check'
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <BasicModalText content='If the information here is correct, please click Check.' />
    </BasicTwoButtonModal>
  );
}
