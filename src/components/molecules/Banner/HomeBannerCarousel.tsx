import { View, FlatList, StyleSheet } from 'react-native';

import HomeBannerCard from '@components/atoms/Card/HomeBannerCard';
import { useBannerQuery } from '@/services/module/home/banner';

export default function HomeBannerCarousel() {
  const { data, isLoading } = useBannerQuery();

  if (isLoading)
    return (
      <View style={{ width: '100%', height: 300, backgroundColor: '#eee' }} />
    );

  return (
    <View style={styles.bannerListContainer}>
      <FlatList
        data={data}
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
