import { SafeAreaView, View, StyleSheet } from 'react-native';
import ReviewItemList from '@components/organisms/Section/ReviewItemList';
import Spacing from '@styles/spacing';
import TotalText from '@/components/atoms/Text/TotalText';
import useReview from '@/hooks/reviewHook';

function ReviewDetailsScreen() {
  const { reviews } = useReview();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <TotalText total={reviews.length} />
      </View>
      <ReviewItemList
        data={reviews}
        emptyText='There is no Review details.'
        scrollEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: Spacing.IOS392Margin,
    paddingVertical: 10,
  },
  textContainer: {
    paddingBottom: 20,
    alignSelf: 'flex-start',
  },
});

export default ReviewDetailsScreen;
