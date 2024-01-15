import { View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { BannerListItem } from '@/services/module/home/banner';

export default function HomeBannerCard({ item }: { item: BannerListItem }) {
  const goContent = () => {
    // TODO: 배너 클릭시 이동하는곳을 어떻게 정해야 할지 고민해야 함
    console.log('눌림');
  };

  return (
    <Pressable onPress={goContent}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: item.imgUrl }}
          resizeMode='cover'
          style={styles.img}
        />
      </View>
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
