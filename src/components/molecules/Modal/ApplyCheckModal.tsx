import BasicTwoButtonModal from '@/components/atoms/Modal/BasicTwoButtonsModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';
import BasicModalDetail from '@/components/atoms/Modal/BasicModalDetail';
import { ApplyCheckProps } from '@/types/ModalTypes';
import useModalHook from '@/hooks/modalHook';

export default function ApplyCheckModal({ date, user }: ApplyCheckProps) {
  const { setModalName, resetModal } = useModalHook();

  const data = [
    { key: `Application Date: ${date}` },
    { key: `Email: ${user?.email}` },
  ];

  // TODO: 요청 보내기 및 에러 처리
  const onConfirm = () => {
    setModalName('APPLY_COMPLETE');
  };

  return (
    <BasicTwoButtonModal
      cancelText='Cancel'
      confirmText='Check'
      onClose={resetModal}
      onConfirm={onConfirm}
    >
      <BasicModalText content='If the information here is correct, please click Check.' />
      <BasicModalDetail data={data} />
    </BasicTwoButtonModal>
  );
}
