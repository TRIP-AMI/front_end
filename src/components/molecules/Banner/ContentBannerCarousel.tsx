import { FlatList, StyleSheet, View } from 'react-native';
import ContentBannerCard from '@components/atoms/Card/ContentBannerCard';

export default function ContentBannerCarousel({
  images,
}: {
  images: string[];
}) {
  return (
    // TODO: key 중복 문제 확인하기
    <View style={styles.bannerListContainer}>
      <FlatList
        data={images}
        renderItem={({ item }) => <ContentBannerCard imgUrl={item} />}
        keyExtractor={(item) => item}
        horizontal
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
