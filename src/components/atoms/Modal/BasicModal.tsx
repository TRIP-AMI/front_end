import { Modal, View, StyleSheet, Pressable } from 'react-native';
import Colors from '@/styles/colors';
import ModalBackdrop from '@/components/atoms/Modal/ModalBackdrop';
import BasicButton from '@/components/atoms/Button/BasicButton';
import CloseButton from '@/components/atoms/Button/CloseButton';
import useModalHook from '@/hooks/modalHook';

type BasicModalProps = {
  children: React.ReactNode;
  buttonText: string;
  onCheck: () => void;
};

export default function BasicModal({
  children,
  buttonText,
  onCheck,
}: BasicModalProps) {
  const { resetModal } = useModalHook();

  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent>
        <ModalBackdrop>
          <View style={styles.modalView}>
            <Pressable style={{ width: '100%' }}>
              <View style={styles.header}>
                <CloseButton onPress={resetModal} size={24} />
              </View>
              <View style={styles.contentContainer}>{children}</View>
              <View style={{ width: '100%' }}>
                <BasicButton content={buttonText} onPress={onCheck} round />
              </View>
            </Pressable>
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
    width: '89%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'flex-end',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 8,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 30,
  },
});
