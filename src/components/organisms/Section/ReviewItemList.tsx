import ReviewItem from '@components/molecules/Item/ReviewItem';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
import TotalText from '@components/atoms/Text/TotalText';
import Spacing from '@styles/spacing';
import useReview from '@/hooks/reviewHook';

function ReviewItemList({
  scrollEnabled,
  emptyText,
  totalVisible,
}: {
  scrollEnabled: boolean;
  emptyText: string;
  totalVisible?: boolean;
}) {
  const { reviews, getReviews } = useReview();

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {reviews.length === 0 ? (
        <EmptyText text={emptyText} />
      ) : (
        <>
          {totalVisible && (
            <View style={styles.textContainer}>
              <TotalText total={reviews.length} />
            </View>
          )}
          <FlatList
            data={reviews}
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
    // marginBottom: 52,
    // paddingHorizontal: Spacing.IOS392Margin,
  },
  textContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    alignSelf: 'flex-start',
    marginHorizontal: Spacing.IOS392Margin,
  },
});

export default ReviewItemList;
