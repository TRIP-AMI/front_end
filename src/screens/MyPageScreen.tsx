import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import MyTab from '@components/organisms/Section/MyTab';

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
      <AmiProfile
        style={{ marginTop: 20 }}
        imgUrl={dummyProfile.profileImgUrl}
        name={dummyProfile.profileName}
      />
      {dummyAmiData.map((score) => (
        <AmiScoreTable key={score.title} scores={score} />
      ))}
      <MyTab />
      {/* TODO 전체 화면 스크롤을 위해선 Flatlist로 해야하지만
      그러면 TabView와 충돌이 일어나서 TabView 내부 Flatlist가 스크롤되지 않음(같은 방향의 스크롤에서 문제가 생긴다고 함)
      TabView와 충돌을 피하기 위해 내부 아이템만 스크롤되게 만들면(현재 상태) Footer를 넣기가 애매해짐 */}
      {/* <FlatList */}
      {/*  data={[]} */}
      {/*  renderItem={null} */}
      {/*  ListFooterComponent={<HomeFooter />} */}
      {/*  ListEmptyComponent={ */}
      {/*    <View> */}
      {/*      <AmiProfile */}
      {/*        style={{ marginTop: 20 }} */}
      {/*        imgUrl={dummyProfile.profileImgUrl} */}
      {/*        name={dummyProfile.profileName} */}
      {/*      /> */}
      {/*      {dummyAmiData.map((score) => ( */}
      {/*        <AmiScoreTable key={score.title} scores={score} /> */}
      {/*      ))} */}
      {/*      <MyTab /> */}
      {/*    </View> */}
      {/*  } */}
      {/* /> */}
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
