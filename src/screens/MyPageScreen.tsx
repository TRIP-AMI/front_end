import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import PostItemList from '@components/organisms/Section/PostItemList';

const dummyProfiles = [
  {
    profileId: 1,
    profileName: 'Jenny',
    profileImgUrl:
      'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
  },
];

const dummyAmiData = [
  {
    title: 'AmiScore',
    data: [
      {
        id: 1,
        score: 0,
        title: 'Experience',
      },
      {
        id: 2,
        score: 0,
        title: 'Review',
      },
      {
        id: 3,
        score: 0,
        title: 'Rating',
      },
    ],
  },
];

export default function MyPageScreen() {
  const dummyProfile = dummyProfiles[0];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AmiProfile
          style={{ marginTop: 20 }}
          imgUrl={dummyProfile.profileImgUrl}
          name={dummyProfile.profileName}
        />
        {dummyAmiData.map((score) => (
          <AmiScoreTable key={score.title} scores={score} />
        ))}
        <PostItemList />
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
