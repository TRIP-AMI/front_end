import useModalHook from '@hooks/modalHook';
import BasicTwoButtonModal from '@components/atoms/Modal/BasicTwoButtonsModal';
import BasicModalText from '@components/atoms/Text/BasicModalText';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

function ReviewDetailsModal() {
  const { resetModal } = useModalHook();
  const navigation = useNavigation<RootStackNavigationProp>();

  const onConfirm = () => {
    resetModal();
    navigation.navigate('ReviewDetails');
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
