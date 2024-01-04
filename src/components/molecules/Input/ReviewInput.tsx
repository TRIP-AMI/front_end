import { StyleSheet } from 'react-native';
import BasicInput from '@components/atoms/Input/BasicInput';
import { Control, Controller } from 'react-hook-form';
import CheckButton from '@components/molecules/Button/CheckButton';

function ReviewInput({
  control,
  errorText,
  starRating,
  handleSubmit,
  placeholder,
  onSubmit,
  notRequiredContent,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
  starRating?: number;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: any;
  onSubmit: (data: unknown) => void;
  notRequiredContent?: boolean;
}) {
  return (
    <Controller
      control={control}
      rules={{
        required: {
          value: !notRequiredContent,
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
            <BasicInput
              textarea
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              maxLength={100}
              error={errorText}
              style={styles.input}
            />
            <CheckButton
              disabled={
                (!notRequiredContent && value === '') || starRating === 0
              }
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
