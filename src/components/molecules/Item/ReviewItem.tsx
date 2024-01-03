import { StyleSheet, View } from 'react-native';
import Colors from '@styles/colors';
import AmiImg from '@components/atoms/Image/AmiImg';
import ReviewText from '@components/atoms/Text/ReviewText';

type ReviewItemType = {
  reviewId: number;
  reviewName: string;
  reviewImg: string;
  reviewContent: string;
};

function ReviewItem({ item }: { item: ReviewItemType }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <AmiImg imgUrl={item.reviewImg} style={styles.img} />
      </View>
      <ReviewText name={item.reviewName} content={item.reviewContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: Colors.fontGray08,
    padding: 14,
    marginBottom: 8,
    justifyContent: 'center',
  },
  imgContainer: {
    width: 32,
    height: 32,
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    marginBottom: 0,
  },
});

export default ReviewItem;
