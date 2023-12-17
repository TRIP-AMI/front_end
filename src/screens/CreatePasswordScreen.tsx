import { useForm, Controller } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { CreatePasswordProps } from '@/types/NavigationTypes';
import { PasswordInput } from '@/components/molecules/Input/LoginInput';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import Regex from '@/constants/regex';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import useModalHook from '@/hooks/modalHook';

interface ICreatePasswordInputs {
  password: string;
  reentered: string;
}

export default function CreatePasswordScreen({
  route,
}: {
  route: { params: CreatePasswordProps };
}) {
  const { setModalName } = useModalHook();
  const { nickname, email } = route.params;
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      password: '',
      reentered: '',
    },
  });

  // TODO: 멤버 생성 요청, 에러 처리
  const onNext = async (data: ICreatePasswordInputs) => {
    if (errors.password || errors.reentered) return;
    try {
      await console.log(
        `nickname: ${nickname} password: ${data.password}, email: ${email}`,
      );
      setModalName('JOIN_COMPLETE');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <JoinLayout title='Please enter your password'>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Controller
              control={control}
              rules={{
                required: 'This is required',
                pattern: {
                  value: Regex.password,
                  message: 'It does not fit the password format.',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PasswordInput
                  password={value}
                  setPassword={onChange}
                  placeholder='Enter a password'
                  error={!!errors.password}
                  errorText={errors.password?.message}
                  vaildText={value && 'Password Available'}
                  autoFocus
                />
              )}
              name='password'
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Controller
              control={control}
              rules={{
                required: 'This is required',
                validate: (value) => {
                  const { password } = getValues();
                  return value === password || `The password doesn't match.`;
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PasswordInput
                  password={value}
                  setPassword={onChange}
                  placeholder='Re-enter the password'
                  error={!!errors.reentered}
                  errorText={errors.reentered?.message}
                  vaildText={value && 'Password matching'}
                />
              )}
              name='reentered'
            />
          </View>
        </View>
      </JoinLayout>
      <BottomButtons
        onCancel={() => setModalName('JOIN_CANCEL')}
        onNext={handleSubmit(onNext)}
        disabled={!!errors.password || !!errors.reentered}
        confirmText='Join'
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
