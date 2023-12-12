import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import React from 'react';
import HomeFooter from '@components/organisms/Section/HomeFooter';
import PostItemList from '@components/organisms/Section/PostItemList';
import ReviewItemList from '@components/organisms/Section/ReviewItemList';
import BasicTab from '@components/organisms/Section/BasicTab';
import Colors from '@styles/colors';

const dummyProfiles = [
  {
    profileId: 1,
    profileType: 'ami',
    // profileType: 'tourist',
    profileName: 'Jenny',
    profileImgUrl:
      'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
  },
];

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

export default function MyPageScreen() {
  const dummyProfile = dummyProfiles[0];
  const dummyAmiData = dummyAmiDatas[0];
  const dummyTouristData = dummyTouristDatas[0];

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
        <AmiProfile
          imgUrl={dummyProfile.profileImgUrl}
          name={dummyProfile.profileName}
        />
        {dummyProfile.profileType === 'ami' && (
          <>
            <AmiScoreTable scores={dummyAmiData} />
            <BasicTab data={tabData} />
          </>
        )}
        {dummyProfile.profileType === 'tourist' && (
          <>
            <AmiScoreTable scores={dummyTouristData} />
            <Text style={styles.text}>Have a great trip to Korea with AMI</Text>
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
    backgroundColor: '#ffffff',
  },
  headerMargin: {
    marginTop: 20,
  },
  text: {
    color: Colors.fontGray02,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.32,
    lineHeight: 22,
    marginTop: 40,
    marginBottom: 140,
    alignSelf: 'center',
  },
});
