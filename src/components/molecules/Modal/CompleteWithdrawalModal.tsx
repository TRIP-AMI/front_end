import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { AntDesign } from '@expo/vector-icons';
import Colors from '@styles/colors';
import { StyleSheet, Text } from 'react-native';
import useLoginHook from '@hooks/loginHook';
import useModalHook from '@hooks/modalHook';

function CompleteWithdrawalModal() {
  const { onLogout } = useLoginHook();
  const { resetModal } = useModalHook();

  // TODO 로딩 처리
  const onPress = () => {
    onLogout().then(() => resetModal());
  };

  return (
    <BasicFullScreenModal bodyStyle={styles.bodyStyle} onPress={onPress}>
      <AntDesign name='checkcircle' size={51} color={Colors.primary} />
      <Text style={styles.text}>Your account has been withdrawn.</Text>
    </BasicFullScreenModal>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.32,
    lineHeight: 22,
    marginTop: 30,
  },
});

export default CompleteWithdrawalModal;
