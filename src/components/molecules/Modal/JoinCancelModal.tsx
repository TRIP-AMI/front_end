import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet } from 'react-native';
import BasicTwoButtonModal from '@/components/atoms/Modal/BasicTwoButtonsModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';
import { AuthStackNavigationProp } from '@/navigations/AuthStack/AuthStack';

export default function JoinCancelModal() {
  const { navigate } = useNavigation<AuthStackNavigationProp>();
  const { resetModal } = useModalHook();

  const onCancel = () => {
    resetModal();
    navigate('Login');
  };

  const data = {
    title: 'Do you want to cancel join?',
    content:
      'The information you enter is not saved. If you do not sign up, you will be restricted from using TRIPAMI.',
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
