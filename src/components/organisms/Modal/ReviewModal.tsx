import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import StarRating from '@components/molecules/etc/StarRating';
import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';
import ReviewContentItem from '@components/atoms/Item/ReviewContentItem';
import ReviewInput from '@components/molecules/Input/ReviewInput';
import { ApplicationItemProps } from '@/types/ModalTypes';

// TODO style 다시 체크하기
function ReviewModal({ imgUrl, title }: ApplicationItemProps) {
  return (
    <BasicFullScreenModal
      headerStyle={styles.headerStyle}
      bodyStyle={styles.bodyStyle}
      modalTitle='Review'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <ReviewContentItem imgUrl={imgUrl} title={title} />
          <Separator color={Colors.lineGray05} hei={10} marginVer={10} />
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.question}>{`Did you like AMI's guide?`}</Text>
              <Text style={styles.subQuestion}>
                Please leave a score and review for AMI!
              </Text>
            </View>
            <StarRating />
            <ReviewInput />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </BasicFullScreenModal>
  );
}

// TODO headerStyle을 좀 더 유동적으로 할 수 있는 방법을...
const styles = StyleSheet.create({
  headerStyle: {
    paddingLeft: Dimensions.get('window').width / 2 - 36,
  },
  bodyStyle: {
    paddingHorizontal: 0,
  },
  container: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
  subQuestion: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.fontGray07,
  },
});

export default ReviewModal;
