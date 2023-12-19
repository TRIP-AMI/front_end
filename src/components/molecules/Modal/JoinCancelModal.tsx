import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet } from 'react-native';
import BasicTwoButtonModal from '@/components/atoms/Modal/BasicTwoButtonsModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';

export default function JoinCancelModal() {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const { resetModal } = useModalHook();

  const onCancel = () => {
    resetModal();
    navigate('Login');
  };

  const data = {
    title: 'Do you want to cancel join?',
    content:
      'The information you entered will not be saved, and you won’t be able to use the service',
  };

  return (
    <BasicTwoButtonModal
      cancelText='Cancel to join'
      confirmText='Continue to join'
      onClose={onCancel}
      onConfirm={resetModal}
    >
      <BasicModalText content={data.title} />
      <Text style={styles.text}>{data.content}</Text>
    </BasicTwoButtonModal>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 20,
    paddingTop: 14,
    color: Colors.fontGray03,
  },
});
