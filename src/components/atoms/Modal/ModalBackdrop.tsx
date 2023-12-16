import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import useModalHook from '@/hooks/modalHook';

export default function ModalBackdrop({ children }: { children: ReactNode }) {
  const { resetModal } = useModalHook();

  const onPress = () => {
    resetModal();
  };

  return (
    <Pressable style={styles.backdrop} onPress={onPress}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
