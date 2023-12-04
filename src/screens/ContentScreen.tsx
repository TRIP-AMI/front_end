import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentBannerCarousel from '@components/molecules/Banner/ContentBannerCarousel';
import DdayBadge from '@components/atoms/Tag/DdayBadge';
import ContentTitles from '@components/molecules/Text/ContentTitles';
import HashTagList from '@components/molecules/etc/HashTagList';
import ContentTime from '@components/molecules/Text/ContentTime';
import Separator from '@components/atoms/etc/Separator';
import ContentPrice from '@components/molecules/Text/ContentPrice';

export default function ContentScreen() {
  const dummyData = ['Itaewon', 'Seoul', 'Korea'];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentBannerCarousel />
        <DdayBadge />
        <ContentTitles
          title="Jenny's Seoul Tour"
          subtitle="Let's Play Together at Itaewon Street!"
        />
        <HashTagList data={dummyData} />
        <ContentTime
          time='12/16(Sat) 19:30'
          location='3-11, Jamsil-dong, Songpa-gu, Seoul'
        />
        <Separator hei={1} marginVer={20} />
        <ContentPrice
          price='150,000 won'
          option='(It covers all expenses incurred in the program.)'
        />
        <Separator hei={7} marginVer={20} />
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
