import { View, Image, StyleSheet, Dimensions } from 'react-native';

type HomeBannerCardProps = {
  id: number;
  title: string;
  imgUrl: string;
};

export default function HomeBannerCard({
  item,
}: {
  item: HomeBannerCardProps;
}) {
  return (
    <View style={styles.imgContainer}>
      <Image
        source={{ uri: item.imgUrl }}
        resizeMode='cover'
        style={styles.img}
      />
    </View>
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
