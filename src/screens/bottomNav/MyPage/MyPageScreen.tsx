import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import HomeFooter from '@components/organisms/Section/HomeFooter';
import { useRecoilValue } from 'recoil';
import profileType from '@utils/recoil/profile';
import MyAmiScreen from '@screens/bottomNav/MyPage/MyAmiScreen/MyAmiScreen';
import MyTouristScreen from '@screens/bottomNav/MyPage/MyTouristScreen/MyTouristScreen';

export default function MyPageScreen() {
  const profile = useRecoilValue(profileType);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        {profile === 'AMI' ? <MyAmiScreen /> : <MyTouristScreen />}
        <HomeFooter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
