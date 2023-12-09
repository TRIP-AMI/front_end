import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentMain from '@components/organisms/Section/ContentMain';
import ContentAmi from '@components/organisms/Section/ContentAmi';
import ContentProgram from '@components/organisms/Section/ContentProgram';
import ContentBannerCarousel from '@components/molecules/Banner/ContentBannerCarousel';
import ContentPayment from '@components/molecules/Section/ContentPayment';
import BasicButton from '@components/atoms/Button/BasicButton';
import { useSetRecoilState } from 'recoil';
import modalState from '@/utils/recoil/modal';

export default function ContentScreen() {
  const setModal = useSetRecoilState(modalState);

  // TODO: SelectOptions modal로 수정할 예정
  const onApply = () => {
    setModal({ modalName: 'LOGIN_CHECK' });
  };

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
        <BasicButton content='Apply' onPress={onApply} />
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
