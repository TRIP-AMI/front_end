import { StyleSheet, View } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import Colors from '@styles/colors';
import { useRecoilValue } from 'recoil';
import userState from '@utils/recoil/user';
import EmptyText from '@components/atoms/Text/EmptyText';
import Spacing from '@styles/spacing';

export default function MyTouristScreen() {
  const userData = useRecoilValue(userState);

  // TODO api 연결하기
  const scores = [
    {
      id: 1,
      key: 'ApplicationDetails',
      title: 'Application details',
      score: 0,
    },
    { id: 2, key: 'ReviewDetails', title: 'Review details', score: 0 },
  ];

  return (
    <View>
      <View style={styles.headerMargin} />
      <View style={{ paddingBottom: 12 }}>
        <AmiProfile imgUrl={userData.imgUrl} name={userData.nickname} />
      </View>
      <View style={styles.subContainer}>
        <AmiScoreTable scores={scores} />
      </View>
      <EmptyText text='Have a great trip to Korea with AMI' />
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    marginHorizontal: Spacing.IOS392Margin,
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
