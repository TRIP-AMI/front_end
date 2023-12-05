import { Modal, View, Pressable, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import Colors from '@/styles/colors';
import { IconButton } from '../IconButton/IconButton';

export default function BasicBottomModal({
  children,
  isVisible,
  onClose,
  onDismiss,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  onDismiss: () => void;
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
          <View style={styles.modalHeader}>
            {/* TODO: 아이콘 확인 */}
            <IconButton
              icon='chevron-down'
              size={24}
              color={Colors.fontGray01}
              onPress={onClose}
            />
          </View>
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
