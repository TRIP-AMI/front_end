import { useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { CreatePasswordProps } from '@/types/NavigationTypes';
import { PasswordInput } from '@/components/molecules/Input/LoginInput';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import useModalHook from '@/hooks/modalHook';
import { ICreatePasswordInputs } from '@/types/FormTypes';

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
  // TODO: 멤버 생성 요청, 에러 처리
  const onNext = async (data: ICreatePasswordInputs) => {
    if (errors.password || errors.reentered || data.password !== data.reentered)
      return;
    try {
      await console.log(
        `nickname: ${nickname} password: ${data.password}, email: ${email}`,
      );
      setModalName('JOIN_COMPLETE');
    } catch (e) {
      console.log(e);
    }
  };
  const contents = {
    title: 'Please enter your password',
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
