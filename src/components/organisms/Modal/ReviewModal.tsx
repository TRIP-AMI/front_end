import { Dimensions, StyleSheet } from 'react-native';
import StarRating from '@components/molecules/etc/StarRating';
import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';

function ReviewModal() {
  return (
    <BasicFullScreenModal headerStyle={styles.headerStyle} modalTitle='Review'>
      <StarRating />
    </BasicFullScreenModal>
  );
}

// TODO headerStyle을 좀 더 유동적으로 할 수 있는 방법을...
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    paddingLeft: Dimensions.get('window').width / 2 - 36,
  },
});

export default ReviewModal;
