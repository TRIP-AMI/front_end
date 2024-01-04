import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';
import ReviewContentItem from '@components/atoms/Item/ReviewContentItem';
import ReviewInput from '@components/molecules/Input/ReviewInput';
import { useState } from 'react';
import useModalHook from '@hooks/modalHook';
import { useForm } from 'react-hook-form';
import StarRating from '@components/molecules/etc/StarRating';
import { ApplicationItemProps } from '@/types/ModalTypes';

function ReviewModal({ imgUrl, title }: ApplicationItemProps) {
  const [starRating, setStarRating] = useState(0);
  const { setModalName } = useModalHook();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { content: '' },
  });

  const onSubmit = (data: unknown) => {
    console.log('data::::', data);
    console.log('starRating::::', starRating);
    setModalName('REVIEW_DETAIL');
  };

  return (
    <BasicFullScreenModal
      headerStyle={styles.headerStyle}
      bodyStyle={styles.bodyStyle}
      modalTitle='Review'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <ReviewContentItem imgUrl={imgUrl} title={title} />
          <Separator color={Colors.lineGray05} hei={8} marginVer={25} />
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.question}>{`Did you like AMI's guide?`}</Text>
              <Text style={styles.subQuestion}>
                Please leave a score and review for AMI!
              </Text>
            </View>
            <StarRating starRating={starRating} setStarRating={setStarRating} />
            <ReviewInput
              control={control}
              errorText={errors.content?.message}
              starRating={starRating}
              placeholder='Good things, things to improve, etc.'
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </BasicFullScreenModal>
  );
}

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
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.32,
    lineHeight: 22,
    marginBottom: 5,
  },
  subQuestion: {
    color: Colors.fontGray05,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.28,
    lineHeight: 18,
  },
});

export default ReviewModal;
