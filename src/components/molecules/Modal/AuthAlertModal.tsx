import BasicCheckModal from '@/components/atoms/Modal/BasicCheckModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';
import useModalHook from '@/hooks/modalHook';

export default function AuthAlertModal() {
  const { resetModal } = useModalHook();

  return (
    <BasicCheckModal onCheck={resetModal}>
      <BasicModalText
        content={`You do not have any\nsubscribed email information.`}
        style={{ textAlign: 'center' }}
      />
    </BasicCheckModal>
  );
}
