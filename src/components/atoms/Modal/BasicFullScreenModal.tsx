import { Modal, View, Pressable, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import { ReactNode } from 'react';

function BasicFullScreenModal({
  children,
  isVisible,
  onClose,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
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
            justifyContent: 'flex-end',
            paddingVertical: 15,
            paddingHorizontal: Spacing.IOS392Margin,
          }}
        >
          <Pressable onPress={onClose}>
            <AntDesign name='close' size={24} color='black' />
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
