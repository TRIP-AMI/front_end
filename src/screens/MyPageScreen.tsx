import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import HomeFooter from '@components/organisms/Section/HomeFooter';
import PostItemList from '@components/organisms/Section/PostItemList';
import ReviewItemList from '@components/organisms/Section/ReviewItemList';
import BasicTab from '@components/organisms/Section/BasicTab';
import Colors from '@styles/colors';
import { useRecoilValue } from 'recoil';
import userState from '@utils/recoil/user';
import profileType from '@utils/recoil/profile';
import ApplicantButton from '@components/atoms/Button/ApplicantButton';
import EmptyText from '@components/atoms/Text/EmptyText';

const dummyTouristDatas = [
  {
    title: 'TouristScore',
    data: [
      {
        id: 1,
        score: 0,
        title: 'Application details',
      },
      {
        id: 2,
        score: 0,
        title: 'Review details',
      },
    ],
  },
];

const dummyAmiDatas = [
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

// TODO post의 개수를 받아아서 렌더링
export default function MyPageScreen() {
  const dummyAmiData = dummyAmiDatas[0];
  const dummyTouristData = dummyTouristDatas[0];
  const userData = useRecoilValue(userState);
  const profile = useRecoilValue(profileType);

  const tabData = [
    {
      id: 1,
      tabName: 'Post',
      tabComponent: <PostItemList />,
    },
    {
      id: 2,
      tabName: 'Review',
      tabComponent: <ReviewItemList />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerMargin} />
        <AmiProfile imgUrl={userData.profileImgUrl} name={userData.name} />
        {profile === 'AMI' ? (
          <>
            <AmiScoreTable scores={dummyAmiData} style={{ marginBottom: 8 }} />
            <ApplicantButton />
            <BasicTab data={tabData} />
          </>
        ) : (
          <>
            <AmiScoreTable scores={dummyTouristData} />
            <EmptyText text='Have a great trip to Korea with AMI' />
          </>
        )}
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
  headerMargin: {
    marginTop: 20,
  },
  text: {
    color: Colors.fontGray03,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.32,
    lineHeight: 22,
    marginTop: 40,
    marginBottom: 140,
    alignSelf: 'center',
  },
});
