import { StyleSheet } from 'react-native';
import BasicInput from '@components/atoms/Input/BasicInput';
import { Controller, useForm } from 'react-hook-form';
import CheckButton from '@components/molecules/Button/CheckButton';

function ReviewInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { content: '' },
  });

  const onSubmit = (data: unknown) => {
    console.log('data::::', data);
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
          message: 'The maximum input is 1000 characters.',
        },
      }}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
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
              disabled={value === ''}
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
