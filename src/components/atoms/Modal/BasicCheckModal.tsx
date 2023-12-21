import { Modal, View, StyleSheet } from 'react-native';
import ModalButton from '@/components/atoms/Button/ModalButton';
import Colors from '@/styles/colors';
import ModalBackdrop from '@/components/atoms/Modal/ModalBackdrop';

type BasicCheckModalProps = {
  children: React.ReactNode;
  buttonText?: string;
  onCheck: () => void;
};

export default function BasicCheckModal({
  children,
  buttonText,
  onCheck,
}: BasicCheckModalProps) {
  const text = buttonText === undefined ? 'Check' : buttonText;
  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent>
        <ModalBackdrop>
          <View style={styles.modalView}>
            <View style={styles.contentContainer}>{children}</View>
            <View style={styles.buttonContainer}>
              <View style={{ width: '100%' }}>
                <ModalButton content={text} onPress={onCheck} />
              </View>
            </View>
          </View>
        </ModalBackdrop>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  contentContainer: {
    marginVertical: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: Colors.lineGray04,
    padding: 15,
  },
});
