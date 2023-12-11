import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useSetRecoilState } from 'recoil';
import modalState from '@/utils/recoil/modal';

export default function ModalBackdrop({ children }: { children: ReactNode }) {
  const setModal = useSetRecoilState(modalState);

  const onPress = () => {
    setModal(null);
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
