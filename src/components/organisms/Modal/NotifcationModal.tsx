import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { Text } from 'react-native';

function NotifcationModal({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  return (
    <BasicFullScreenModal
      modalTitle='Notifcation'
      isVisible={isVisible}
      onClose={onClose}
    >
      <Text>asdasd</Text>
    </BasicFullScreenModal>
  );
}

export default NotifcationModal;
