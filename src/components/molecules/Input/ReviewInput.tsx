import { StyleSheet } from 'react-native';
import BasicInput from '@components/atoms/Input/BasicInput';
import { Controller, useForm } from 'react-hook-form';
import CheckButton from '@components/molecules/Button/CheckButton';
import StarRating from '@components/molecules/etc/StarRating';
import { useState } from 'react';
import useModalHook from '@hooks/modalHook';

function ReviewInput() {
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
    <Controller
      control={control}
      rules={{
        required: {
          value: true,
          message: 'Content is required.',
        },
        maxLength: {
          value: 100,
          message: 'The maximum input is 100 characters.',
        },
      }}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
            <StarRating starRating={starRating} setStarRating={setStarRating} />
            <BasicInput
              textarea
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Good things, things to improve, etc.'
              maxLength={100}
              error={errors.content?.message}
              style={styles.input}
            />
            <CheckButton
              disabled={value === '' || starRating === 0}
              onPress={handleSubmit(onSubmit)}
            />
          </>
        );
      }}
      name='content'
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 130,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
  },
});

export default ReviewInput;
