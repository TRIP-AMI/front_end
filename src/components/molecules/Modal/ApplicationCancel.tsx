import useModalHook from '@hooks/modalHook';
import BasicTwoButtonModal from '@components/atoms/Modal/BasicTwoButtonsModal';
// import { Text, StyleSheet } from 'react-native';
// import Colors from '@styles/colors';
import BasicModalText from '@components/atoms/Text/BasicModalText';

function ApplicationCancel() {
  const { resetModal } = useModalHook();

  // TODO Application Cancel 동작 구현
  const onConfirm = () => {
    resetModal();
    console.log('Application Cancel');
  };

  return (
    <BasicTwoButtonModal
      cancelText='No'
      confirmText='Yes'
      onClose={resetModal}
      onConfirm={onConfirm}
    >
      {/* TODO 스타일에 맞추면 줄바꿈이 되어버림 */}
      <BasicModalText content='Do you want to cancel the application?' />
      {/* <Text style={styles.text}>Do you want to cancel the application?</Text> */}
    </BasicTwoButtonModal>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     color: Colors.fontGray02,
//     fontSize: 14,
//     fontFamily: 'Montserrat-Medium',
//     lineHeight: 20,
//   },
// });

export default ApplicationCancel;
