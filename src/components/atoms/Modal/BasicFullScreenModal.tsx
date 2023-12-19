import {
  Modal,
  View,
  Pressable,
  SafeAreaView,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import { ReactNode } from 'react';
import ModalTitle from '@/components/atoms/Text/ModalTitle';
import useModalHook from '@/hooks/modalHook';

function BasicFullScreenModal({
  children,
  modalTitle,
  noClose,
  headerStyle,
  bodyStyle,
}: {
  children: ReactNode;
  modalTitle?: string;
  noClose?: boolean;
  headerStyle?: StyleProp<ViewStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
}) {
  const { resetModal } = useModalHook();

  return (
    <Modal animationType='slide' presentationStyle='fullScreen'>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.header, headerStyle]}>
          {/* title */}
          {!modalTitle && <Text />}
          {modalTitle && <ModalTitle>{modalTitle}</ModalTitle>}

          {/* close icon */}
          {!noClose && (
            <Pressable onPress={resetModal}>
              <AntDesign name='close' size={22} color='black' />
            </Pressable>
          )}
        </View>
        <View style={[styles.body, bodyStyle]}>{children}</View>
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
