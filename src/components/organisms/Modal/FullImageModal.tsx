import { SafeAreaView, View, Image, Modal, StyleSheet } from 'react-native';
import CloseButton from '@/components/atoms/Button/CloseButton';
import useModalHook from '@/hooks/modalHook';
import Spacing from '@/styles/spacing';

export default function FullImageModal({ imgUrl }: { imgUrl: string }) {
  const { resetModal } = useModalHook();

  return (
    <Modal animationType='fade' transparent>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <CloseButton onPress={resetModal} color='white' />
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: imgUrl }}
            resizeMode='center'
            style={styles.img}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.IOS392Margin,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
