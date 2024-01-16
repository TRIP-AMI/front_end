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

export type ContentScreenProps = StackScreenProps<
  ContentStackParamList,
  'Content'
>;

// TODO: 구조, 스타일 수정
export default function ContentScreen({ route }: ContentScreenProps) {
  const { id } = route.params;
  const {
    title,
    subTitle,
    startTime,
    keywords,
    images,
    content,
    amiId,
    isPending,
  } = useProgramDetail(id);

  // TODO: 로딩, 에러 처리
  if (isPending) return <View />;

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
          location='3-11, Jamsil-dong, Songpa-gu, Seoul'
        />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentAmi amiId={amiId} content={content} />
        <SectionDividerBar style={{ height: 8 }} />
        <ContentProgram />
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
