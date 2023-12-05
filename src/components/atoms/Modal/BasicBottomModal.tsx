import { Modal, View, Pressable, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

export default function BasicBottomModal({
  children,
  isVisible,
  onClose,
  onDismiss,
  header,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  onDismiss: () => void;
  header: ReactNode;
}) {
  return (
    <Modal
      animationType='fade'
      visible={isVisible}
      onDismiss={onDismiss}
      transparent
    >
      <View style={styles.container}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>{header}</View>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    borderRadius: 20,
    height: '50%',
    backgroundColor: 'white',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  modalContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
});
