import ReviewItem from '@components/molecules/Item/ReviewItem';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
import reviewApi from '@/services/module/review/review';

type ReviewItemType = {
  reviewId: number;
  reviewName: string;
  reviewImg: string;
  reviewContent: string;
};

function ReviewItemList() {
  const [dummyReviwe, setDummyReviwe] = useState<ReviewItemType[]>([]);

  const getData = async () => {
    try {
      const data = await reviewApi.getReviewList();
      setDummyReviwe(data);
    } catch (error) {
      console.error('배너 목록 호출에 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {dummyReviwe.length === 0 ? (
        <EmptyText text='There are no reviews.' />
      ) : (
        <FlatList
          data={dummyReviwe}
          renderItem={({ item }) => <ReviewItem item={item} />}
          keyExtractor={(item) => item.reviewId.toString()}
          scrollEnabled={false}
          style={styles.listWrap}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listWrap: {
    marginBottom: 52,
  },
});

export default ReviewItemList;
