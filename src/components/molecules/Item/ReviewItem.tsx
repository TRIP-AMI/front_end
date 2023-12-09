import { Dimensions, StyleSheet, View } from 'react-native';
import colors from '@styles/colors';
import Spacing from '@styles/spacing';
import AmiImg from '@components/atoms/Image/AmiImg';
import ReviewSummary from '@components/atoms/Text/ReviewSummary';

type ReviewItemType = {
  reviewId: number;
  reviewName: string;
  reviewImg: string;
  reviewContent: string;
};

function ReviewItem({ item }: { item: ReviewItemType }) {
  return (
    <View style={styles.container}>
      <AmiImg imgUrl={item.reviewImg} style={styles.img} />
      <ReviewSummary name={item.reviewName} content={item.reviewContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.071,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: colors.reviewBackColor,
    padding: Dimensions.get('window').height * 0.016,
    marginHorizontal: Spacing.IOS392Margin,
    marginBottom: Dimensions.get('window').height * 0.0094,
    justifyContent: 'center',
  },
  img: {
    width: Dimensions.get('window').height * 0.038,
    height: Dimensions.get('window').height * 0.038,
    marginRight: Dimensions.get('window').width * 0.025,
    alignSelf: 'flex-start',
  },
});

export default ReviewItem;
