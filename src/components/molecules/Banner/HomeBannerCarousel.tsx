import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import HomeBannerCard from '@components/atoms/Card/HomeBannerCard';
import bannerApi from '@services/module/main/mainBannerApi';

type HomeBannerCardType = {
  id: number;
  title: string;
  imgUrl: string;
};

export default function HomeBannerCarousel() {
  const [dummyBanners, setDummyBanners] = useState<HomeBannerCardType[]>([]);

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
        renderItem={({ item }) => <HomeBannerCard item={item} />}
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
