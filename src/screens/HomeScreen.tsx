import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import HomeIconGrid from '@components/organisms/Section/HomeIconGrid';
import HomeBannerCarousel from '@components/molecules/Banner/HomeBannerCarousel';
import HomeSectionList from '@components/organisms/Section/HomeSectionList';
import HomeFooter from '@components/organisms/Section/HomeFooter';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeBannerCarousel />
        <HomeIconGrid />
        <HomeSectionList />
        <HomeFooter />
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
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 200,
    margin: 6,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
