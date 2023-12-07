import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentMain from '@components/organisms/Section/ContentMain';
import ContentAmi from '@components/organisms/Section/ContentAmi';
import ContentProgram from '@components/organisms/Section/ContentProgram';
import ContentBannerCarousel from '@components/molecules/Banner/ContentBannerCarousel';
import ContentPayment from '@components/molecules/Section/ContentPayment';
import MediumButton from '@/components/atoms/Button/MediumButton';
import FullSizeButton from '@/components/atoms/Button/FullSizeButton';
import LargeButton from '@/components/atoms/Button/LargeButton';
import SmallButton from '@/components/atoms/Button/SmallButton';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';

export default function ContentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentBannerCarousel />
        <ContentMain />
        <ContentAmi />
        <ContentProgram />
        <ContentPayment />
        {/* TODO: 테스트 용 코드, 머지 전 지우기 */}
        <MediumButton
          content='Apply'
          active
          onPress={() => console.log('medium')}
        />
        <SmallButton
          content='Cancel'
          active
          onPress={() => console.log('small')}
        />
        <OutlinedButton
          content='Cancel'
          onPress={() => console.log('outline')}
        />
        <FullSizeButton
          content='Cancel'
          active={false}
          onPress={() => console.log('full size')}
        />
        <LargeButton
          content='Cancel'
          active
          onPress={() => console.log('large')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});
