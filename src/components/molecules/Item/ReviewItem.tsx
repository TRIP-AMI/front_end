import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '@styles/colors';
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

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.071,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: Colors.fontGray08,
    padding: screenHeight * 0.016,
    marginHorizontal: Spacing.IOS392Margin,
    marginBottom: screenHeight * 0.0094,
    justifyContent: 'center',
  },
  img: {
    width: screenHeight * 0.038,
    height: screenHeight * 0.038,
    marginRight: Dimensions.get('window').width * 0.025,
    alignSelf: 'flex-start',
  },
});

export default ReviewItem;
