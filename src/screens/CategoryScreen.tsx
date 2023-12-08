import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import HomeBannerCarousel from '@components/molecules/Banner/HomeBannerCarousel';

export default function CategoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* banner */}
        <HomeBannerCarousel />
        {/* tag */}
        {/* list */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
