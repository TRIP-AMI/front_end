import ReviewItem from '@components/molecules/Item/ReviewItem';
import { FlatList, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
// import Spacing from '@styles/spacing';
import { ReviewListResponse as ReviewItemListType } from '@/services/module/review/review';

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
    <View>
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

// const styles = StyleSheet.create({
//   textContainer: {
//     paddingTop: 10,
//     paddingBottom: 20,
//     alignSelf: 'flex-start',
//     marginHorizontal: Spacing.IOS392Margin,
//   },
// });

export default ReviewItemList;
