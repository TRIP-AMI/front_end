import { Modal, View, StyleSheet } from 'react-native';
import ModalButton from '@/components/atoms/Button/ModalButton';
import Colors from '@/styles/colors';
import ModalBackdrop from '@/components/atoms/Modal/ModalBackdrop';

type BasicTwoButtonModalProps = {
  children: React.ReactNode;
  cancelText: string;
  confirmText: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function BasicTwoButtonModal({
  children,
  cancelText,
  confirmText,
  onClose,
  onConfirm,
}: BasicTwoButtonModalProps) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent>
        <ModalBackdrop>
          <View style={styles.modalView}>
            <View style={styles.contentContainer}>{children}</View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonLeft}>
                <ModalButton content={cancelText} cancel onPress={onClose} />
              </View>
              <View style={{ width: '50%' }}>
                <ModalButton content={confirmText} onPress={onConfirm} />
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
    borderTopColor: Colors.lineGray,
    padding: 15,
  },
  buttonLeft: {
    width: '50%',
    borderRightColor: Colors.lineGray,
    borderRightWidth: 1,
  },
});
