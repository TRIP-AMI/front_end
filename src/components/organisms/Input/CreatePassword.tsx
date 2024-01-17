import { useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { PasswordInput } from '@/components/molecules/Input/LoginInput';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import { ICreatePasswordInputs } from '@/types/FormTypes';
import Regex from '@/constants/regex';

type CreatePasswordProps = {
  title: string;
  onSubmit: (data: ICreatePasswordInputs) => void;
  onCancel: () => void;
  confirmText: string;
  isLoading: boolean;
};

export default function CreatePassword({
  title,
  onSubmit,
  onCancel,
  confirmText,
  isLoading,
}: CreatePasswordProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      password: '',
      reentered: '',
    },
  });
  const { password } = watch();

  const contents = {
    title,
    subtitle: `At least 10 characters in combination of\na capital letter, numbers, and special characters.`,
  };

  return (
    <>
      <JoinLayout title={contents.title} subtitle={contents.subtitle}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <PasswordInput
              control={control}
              errorText={errors.password?.message}
              placeholder='Enter a password'
              validText={errors.password ? undefined : 'Password Available'}
              autoFocus
              rules={{
                required: 'This is required',
                pattern: {
                  value: Regex.password,
                  message: 'It does not fit the password format.',
                },
                maxLength: {
                  value: 20,
                  message: 'Pleas enter no more than 20 characters.',
                },
              }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <PasswordInput
              control={control}
              placeholder='Re-enter the password'
              errorText={errors.reentered?.message}
              validText={errors.reentered ? undefined : 'Password matching'}
              rules={{
                validate: (value: string) =>
                  value === password || 'Password does not match',
              }}
              reentered
            />
          </View>
        </View>
      </JoinLayout>
      <BottomButtons
        onCancel={onCancel}
        onNext={handleSubmit(onSubmit)}
        disabled={!!errors.password || !!errors.reentered || isLoading}
        confirmText={confirmText}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  inputBox: {
    width: '100%',
  },
  input: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
  },
  button: {
    width: '25%',
    alignItems: 'center',
  },
});
