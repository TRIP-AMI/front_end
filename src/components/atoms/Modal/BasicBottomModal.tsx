import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { ReactNode } from 'react';
import useModalHook from '@/hooks/modalHook';

export default function BasicBottomModal({
  children,
  onDismiss,
  header,
  modalViewStyle,
}: {
  children: ReactNode;
  onDismiss: () => void;
  header: ReactNode;
  modalViewStyle?: StyleProp<ViewStyle>;
}) {
  const { resetModal } = useModalHook();

  return (
    <Modal animationType='slide' onDismiss={onDismiss} transparent>
      <View style={styles.container}>
        <Pressable onPress={resetModal} style={styles.container} />
        <View style={[styles.modalView, modalViewStyle]}>
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
