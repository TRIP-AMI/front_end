import { useEffect, useState } from 'react';
import bannerApi, {
  ContentBannerCardType,
} from '@services/module/main/mainBannerApi';
import { FlatList, StyleSheet, View } from 'react-native';
import ContentBannerCard from '@components/atoms/Card/ContentBannerCard';

export default function ContentBannerCarousel() {
  const [dummyBanners, setDummyBanners] = useState<ContentBannerCardType[]>([]);

  const getData = async () => {
    try {
      const data = await bannerApi.getBanner();
      setDummyBanners(data);
    } catch (error) {
      console.error('배너 목록 호출에 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.bannerListContainer}>
      <FlatList
        data={dummyBanners}
        renderItem={({ item }) => <ContentBannerCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
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
