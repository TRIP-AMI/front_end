import { useSetRecoilState } from 'recoil';
import {
  Modal,
  View,
  Pressable,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import { ReactNode } from 'react';
import ModalTitle from '@/components/atoms/Text/ModalTitle';
import modalState from '@/utils/recoil/modal';

function BasicFullScreenModal({
  children,
  modalTitle,
}: {
  children: ReactNode;
  modalTitle?: string;
}) {
  const setModal = useSetRecoilState(modalState);

  const onClose = () => {
    setModal(null);
  };

  return (
    <Modal animationType='slide' presentationStyle='fullScreen'>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          {/* title */}
          {!modalTitle && <Text />}
          {modalTitle && <ModalTitle>{modalTitle}</ModalTitle>}

          {/* close icon */}
          <Pressable onPress={onClose}>
            <AntDesign name='close' size={22} color='black' />
          </Pressable>
        </View>
        <View style={styles.body}>{children}</View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: Spacing.IOS392Margin,
  },
  body: {},
});

export default BasicFullScreenModal;
