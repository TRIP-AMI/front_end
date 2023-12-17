import BasicCheckModal from '@/components/atoms/Modal/BasicCheckModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';
import useModalHook from '@/hooks/modalHook';

export default function LoginInvalidModal() {
  const { resetModal } = useModalHook();

  return (
    <BasicCheckModal onCheck={resetModal}>
      <BasicModalText content='Please check your ID or password.' />
    </BasicCheckModal>
  );
}
