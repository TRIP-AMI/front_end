import { Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import useModalHook from '@/hooks/modalHook';

type ContentBannerCardProps = {
  id: number;
  title: string;
  imgUrl: string;
};

export default function ContentBannerCard({
  item,
}: {
  item: ContentBannerCardProps;
}) {
  const { setModalName } = useModalHook();

  const onPress = () => {
    setModalName('FULL_IMAGE', { imgUrl: item.imgUrl });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.imgContainer,
        pressed && { opacity: 0.8 },
      ]}
      onPress={onPress}
    >
      <Image
        source={{ uri: item.imgUrl }}
        resizeMode='cover'
        style={styles.img}
      />
    </Pressable>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imgContainer: {
    width: windowWidth,
    height: 300,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
