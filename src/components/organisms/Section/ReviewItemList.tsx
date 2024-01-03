import ReviewItem from '@components/molecules/Item/ReviewItem';
import { FlatList, StyleSheet, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
import { ReviewListResponse as ReviewItemListType } from '@/services/module/review/review';
import Spacing from '@/styles/spacing';

function ReviewItemList({
  data,
  scrollEnabled,
  emptyText,
}: {
  data: ReviewItemListType[];
  scrollEnabled: boolean;
  emptyText: string;
}) {
  return (
    <View style={styles.listContainer}>
      {data.length === 0 ? (
        <EmptyText text={emptyText} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <ReviewItem item={item} />}
          keyExtractor={(item) => item.reviewId.toString()}
          scrollEnabled={scrollEnabled}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: Spacing.IOS392Margin,
  },
});

export default ReviewItemList;
