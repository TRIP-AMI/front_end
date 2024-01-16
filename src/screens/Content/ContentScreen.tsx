import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentMain from '@components/organisms/Section/ContentMain';
import ContentAmi from '@components/organisms/Section/ContentAmi';
import ContentProgram from '@components/organisms/Section/ContentProgram';
import ContentBannerCarousel from '@components/molecules/Banner/ContentBannerCarousel';
import { StackScreenProps } from '@react-navigation/stack';
import ContentButtons from '@/components/organisms/Section/ContentButtons';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import HomeFooter from '@/components/organisms/Section/HomeFooter';
import ContentReportButton from '@/components/organisms/Section/ContentReportButton';
import { ContentStackParamList } from '@/navigations/Common/ContentStack';
import FAQSection from '@/components/molecules/Section/FAQSection';
import ContentReview from '@/components/molecules/Section/ContentReview';
import useProgramDetail from '@/hooks/programDetailHook';
import OnePersonLeftFooter from '@/components/atoms/etc/OnePersonLeftFooter';
import Dim from '@/components/atoms/Dim/Dim';

export type ContentScreenProps = StackScreenProps<
  ContentStackParamList,
  'Content'
>;

export default function ContentScreen({ route }: ContentScreenProps) {
  const { id } = route.params;
  const {
    title,
    subTitle,
    location,
    startTime,
    keywords,
    images,
    content,
    amiId,
    spots,
    isPending,
  } = useProgramDetail(id);

  // TODO: 로딩, 에러 처리
  if (isPending) return <Dim />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentBannerCarousel images={images} />
        <ContentMain
          title={title}
          subtitle={subTitle}
          time={startTime}
          keywords={keywords}
          location={location}
        />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentAmi amiId={amiId} content={content} />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentProgram spots={spots} />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentReview />
        <SectionDividerBar style={{ height: 8 }} />
        <View style={{ paddingVertical: 30 }}>
          <FAQSection scrollEnabled={false} />
        </View>
        <SectionDividerBar style={{ height: 8 }} />
        <ContentReportButton programId={id} />
        <HomeFooter />
      </ScrollView>
      {/* TODO : 조건 추가 */}
      <OnePersonLeftFooter />
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
