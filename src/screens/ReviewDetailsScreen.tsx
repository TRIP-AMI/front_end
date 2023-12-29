import { SafeAreaView, StyleSheet } from 'react-native';
import ReviewItemList from '@components/organisms/Section/ReviewItemList';
import Spacing from '@styles/spacing';

function ReviewDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ReviewItemList
        emptyText='There is no Review details.'
        scrollEnabled
        totalVisible
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginHorizontal: Spacing.IOS392Margin,
  },
});

export default ReviewDetailsScreen;
