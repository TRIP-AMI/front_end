import { StyleSheet, View } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import ApplicantButton from '@components/atoms/Button/ApplicantButton';
import BasicTab from '@components/organisms/Section/BasicTab';
import Spacing from '@styles/spacing';
import { useRecoilValue } from 'recoil';
import userState from '@utils/recoil/user';
import PostItemList from '@components/organisms/Section/PostItemList';
import ReviewItemList from '@components/organisms/Section/ReviewItemList';
import useReview from '@hooks/reviewHook';
import { useAmiQuery } from '@services/module/ami/ami';

function formatNumber(value: number | undefined): string {
  if (!value) return '0';
  const roundedValue = Math.round(value * 100) / 100; // 반올림하여 소수점 이하 2자리로 제한
  if (roundedValue % 1 === 0) {
    return roundedValue.toFixed(0);
  }
  if (roundedValue % 0.1 === 0) {
    return roundedValue.toFixed(1);
  }
  return roundedValue.toFixed(2);
}

export default function MyAmiScreen() {
  const userData = useRecoilValue(userState);
  const { reviews } = useReview();

  const { data, isPending } = useAmiQuery(userData.memberId);
  // TODO loading 페이지 확인
  if (isPending)
    return (
      <View style={{ width: '100%', height: 300, backgroundColor: '#eee' }} />
    );

  const scores = [
    {
      id: 1,
      key: 'Experience',
      title: 'Experience',
      score: data?.programIdList.length,
    },
    { id: 2, key: 'Review', title: 'Review', score: 0 },
    {
      id: 3,
      key: 'Rating',
      title: 'Rating',
      score: formatNumber(data?.rating),
    },
  ];

  const tabData = [
    {
      id: 1,
      tabName: 'Post',
      tabComponent: (
        <View style={{ paddingVertical: 25 }}>
          <PostItemList />
        </View>
      ),
    },
    {
      id: 2,
      tabName: 'Review',
      tabComponent: (
        <View
          style={{
            paddingVertical: 25,
            paddingHorizontal: Spacing.IOS392Margin,
          }}
        >
          <ReviewItemList
            data={reviews}
            scrollEnabled={false}
            emptyText='There are no reviews.'
          />
        </View>
      ),
    },
  ];

  return (
    <View>
      <View style={styles.headerMargin} />
      <View style={{ paddingBottom: 12 }}>
        <AmiProfile imgUrl={userData.imgUrl} name={userData.nickname} />
      </View>
      <View style={styles.subContainer}>
        <AmiScoreTable scores={scores} style={{ marginBottom: 8 }} />
      </View>
      <ApplicantButton />
      <BasicTab data={tabData} />
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
});
