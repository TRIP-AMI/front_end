import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentMain from '@components/organisms/Section/ContentMain';
import ContentAmi from '@components/organisms/Section/ContentAmi';
import ContentProgram from '@components/organisms/Section/ContentProgram';
import ContentBannerCarousel from '@components/molecules/Banner/ContentBannerCarousel';
import ContentPayment from '@components/molecules/Section/ContentPayment';
import BasicButton from '@/components/atoms/Button/BasicButton';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import CancelButton from '@/components/atoms/Button/CancelButton';

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
      </ScrollView>
      {/* 테스트용 코드 */}
      <View style={{ height: 50, marginVertical: 5 }}>
        <BasicButton content='Apply' onPress={() => {}} />
      </View>
      <View
        style={{
          width: '88%',
          alignSelf: 'center',
          height: 50,
          marginVertical: 5,
        }}
      >
        <BasicButton content='Apply' round disabled onPress={() => {}} />
      </View>
      <View
        style={{
          width: '88%',
          height: 42,
          alignSelf: 'center',
          marginVertical: 5,
        }}
      >
        <OutlinedButton content='Apply' onPress={() => {}} />
      </View>
      <View
        style={{
          width: '50%',
          height: 50,
          alignSelf: 'center',
          marginVertical: 5,
        }}
      >
        <CancelButton content='Apply' onPress={() => {}} />
      </View>
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
