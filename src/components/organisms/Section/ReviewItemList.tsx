import ReviewItem from '@components/molecules/Item/ReviewItem';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
import TotalText from '@components/atoms/Text/TotalText';
import Spacing from '@styles/spacing';
import reviewApi from '@/services/module/review/review';

type ReviewItemType = {
  reviewId: number;
  reviewName: string;
  reviewImg: string;
  reviewContent: string;
};

function ReviewItemList({
  scrollEnabled,
  emptyText,
  totalVisible,
}: {
  scrollEnabled: boolean;
  emptyText: string;
  totalVisible?: boolean;
}) {
  const [dummyReview, setDummyReview] = useState<ReviewItemType[]>([]);

  const getData = async () => {
    try {
      const data = await reviewApi.getReviewList();
      setDummyReview(data);
    } catch (error) {
      console.error('배너 목록 호출에 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {dummyReview.length === 0 ? (
        <EmptyText text={emptyText} />
      ) : (
        <>
          {totalVisible && (
            <View style={styles.textContainer}>
              <TotalText total={dummyReview.length} />
            </View>
          )}
          <FlatList
            data={dummyReview}
            renderItem={({ item }) => <ReviewItem item={item} />}
            keyExtractor={(item) => item.reviewId.toString()}
            scrollEnabled={scrollEnabled}
            style={styles.listWrap}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listWrap: {
    marginBottom: 52,
  },
  textContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginHorizontal: Spacing.IOS392Margin,
  },
});

export default ReviewItemList;
