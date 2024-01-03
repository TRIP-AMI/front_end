import ReviewItem from '@components/molecules/Item/ReviewItem';
import { FlatList, StyleSheet, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
import { ReviewItemType } from '@/services/module/review/review';

function ReviewItemList({
  data,
  scrollEnabled,
  emptyText,
}: {
  data: ReviewItemType[];
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
  },
});

export default ReviewItemList;
