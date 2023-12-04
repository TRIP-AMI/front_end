import { Modal, View, Pressable, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ReactNode } from 'react';
import Colors from '@/styles/colors';

export default function BasicBottomModal({
  children,
  isVisible,
  onClose,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal animationType='fade' visible={isVisible} transparent>
      <View style={styles.container}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Pressable onPress={onClose}>
              {/* TODO: 아이콘 확인 */}
              <Entypo
                name='chevron-thin-down'
                size={24}
                color={Colors.fontGray01}
              />
            </Pressable>
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
    paddingVertical: 30,
  },
});
