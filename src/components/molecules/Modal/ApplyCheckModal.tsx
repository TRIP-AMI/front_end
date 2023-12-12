import { useSetRecoilState } from 'recoil';
import modalState from '@/utils/recoil/modal';
import BasicTwoButtonModal from '@/components/atoms/Modal/BasicTwoButtonsModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';
import BasicModalDetail from '@/components/atoms/Modal/BasicModalDetail';
import { ApplyCheckProps } from '@/types/ModalTypes';

export default function ApplyCheckModal({ date, user }: ApplyCheckProps) {
  const setModal = useSetRecoilState(modalState);

  const onClose = () => {
    setModal(null);
  };

  const onConfirm = () => {
    setModal({ modalName: 'APPLY_COMPLETE' });
  };

  const data = [
    { key: `Application Date: ${date}` },
    { key: `Email: ${user?.email}` },
  ];

  return (
    <BasicTwoButtonModal
      cancelText='Cancel'
      confirmText='Check'
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <BasicModalText content='If the information here is correct, please click Check.' />
      <BasicModalDetail data={data} />
    </BasicTwoButtonModal>
  );
}
