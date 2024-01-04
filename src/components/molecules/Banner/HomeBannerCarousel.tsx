import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import HomeBannerCard from '@components/atoms/Card/HomeBannerCard';
import bannerApi, { BannerListItem } from '@services/module/main/mainBannerApi';

export default function HomeBannerCarousel() {
  const [banners, setBanners] = useState<BannerListItem[]>([]);

  const getData = async () => {
    try {
      const data = await bannerApi.getBanner();
      setBanners(data);
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
        data={banners}
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
