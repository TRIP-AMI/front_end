import { useSetRecoilState } from 'recoil';
import { Modal, View, Pressable, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import modalState from '@/utils/recoil/modal';

export default function BasicBottomModal({
  children,
  onDismiss,
  header,
}: {
  children: ReactNode;
  onDismiss: () => void;
  header: ReactNode;
}) {
  const setModal = useSetRecoilState(modalState);

  return (
    <Modal animationType='slide' onDismiss={onDismiss} transparent>
      <View style={styles.container}>
        <Pressable onPress={() => setModal(null)} style={styles.container} />
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
  },
  modalView: {
    borderRadius: 20,
    height: '50%',
    backgroundColor: 'white',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  modalContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
});
