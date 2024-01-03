import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentMain from '@components/organisms/Section/ContentMain';
import ContentAmi from '@components/organisms/Section/ContentAmi';
import ContentProgram from '@components/organisms/Section/ContentProgram';
import ContentBannerCarousel from '@components/molecules/Banner/ContentBannerCarousel';
import ContentPayment from '@components/molecules/Section/ContentPayment';
import { StackScreenProps } from '@react-navigation/stack';
import ContentButtons from '@/components/organisms/Section/ContentButtons';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import HomeFooter from '@/components/organisms/Section/HomeFooter';
import ContentReportButton from '@/components/organisms/Section/ContentReportButton';
import { ContentStackParamList } from '@/navigations/Common/ContentStack';
import FAQSection from '@/components/molecules/Section/FAQSection';

export type ContentScreenProps = StackScreenProps<
  ContentStackParamList,
  'Content'
>;

// TODO: 구조, 스타일 수정
export default function ContentScreen({ route }: ContentScreenProps) {
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentBannerCarousel />
        <ContentMain />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentAmi />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentProgram />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentPayment />
        <SectionDividerBar style={{ height: 8 }} />
        {/* TODO: review */}
        <View style={{ paddingVertical: 20 }} />
        <SectionDividerBar style={{ height: 8 }} />
        {/* TODO: FAQ */}
        <View style={{ paddingVertical: 30 }}>
          <FAQSection scrollEnabled={false} />
        </View>
        <SectionDividerBar style={{ height: 8 }} />
        <ContentReportButton programId={id} />
        <HomeFooter />
      </ScrollView>
      <ContentButtons />
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
