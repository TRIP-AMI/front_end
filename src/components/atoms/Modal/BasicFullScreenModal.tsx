import { Modal, View, Pressable, SafeAreaView, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import { ReactNode } from 'react';
import ModalTitle from '@/components/atoms/Text/ModalTitle';

function BasicFullScreenModal({
  children,
  isVisible,
  onClose,
  modalTitle,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  modalTitle?: string;
}) {
  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={isVisible}
      presentationStyle='fullScreen'
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            paddingHorizontal: Spacing.IOS392Margin,
          }}
        >
          {/* title */}
          {!modalTitle && <Text />}
          {modalTitle && <ModalTitle>{modalTitle}</ModalTitle>}

          {/* close icon */}
          <Pressable onPress={onClose}>
            <AntDesign name='close' size={22} color='black' />
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default BasicFullScreenModal;
