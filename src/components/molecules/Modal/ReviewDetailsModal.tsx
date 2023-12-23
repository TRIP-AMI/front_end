import useModalHook from '@hooks/modalHook';
import BasicTwoButtonModal from '@components/atoms/Modal/BasicTwoButtonsModal';
import BasicModalText from '@components/atoms/Text/BasicModalText';

function ReviewDetailsModal() {
  const { resetModal } = useModalHook();

  const onConfirm = () => {
    resetModal();
    console.log('Review Details');
  };

  return (
    <BasicTwoButtonModal
      cancelText='Check'
      confirmText='Review details'
      onClose={resetModal}
      onConfirm={onConfirm}
    >
      <BasicModalText content='Your Review has been completed.' />
    </BasicTwoButtonModal>
  );
}

export default ReviewDetailsModal;
