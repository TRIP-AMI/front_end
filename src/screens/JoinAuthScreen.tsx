import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import joinAuthApi from '@services/module/join/join';
import { useNavigation } from '@react-navigation/native';
import {
  AuthCodeInput,
  EmailInput,
} from '@/components/molecules/Input/LoginInput';
import BasicButton from '@/components/atoms/Button/BasicButton';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import {
  JoinAuthProps,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import { IJoinAuthInputs } from '@/types/FormTypes';

export default function JoinAuthScreen({
  route,
}: {
  route: { params: JoinAuthProps };
}) {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [title, setTitle] = useState('Please enter your email');
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinAuthInputs>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      authCode: '',
    },
  });

  // TODO: 이메일 인증 요청, 에러 처리
  const onConfirmEmail = async (data: IJoinAuthInputs) => {
    if (errors.email) return;
    try {
      await console.log(data);
      setIsEmailSent(true);
      setTitle(`To the email you entered\nAuthentication number has been sent`);
    } catch (e) {
      setIsEmailSent(false);
      setTitle('Please enter your email');
      console.log(e);
    }
  };

  // TODO: 인증 코드 확인 요청, 에러 처리
  const onCheckAuthCode = async (data: IJoinAuthInputs) => {
    if (errors.authCode) return;
    try {
      const res = await joinAuthApi.checkAuthCode(data.authCode);
      if (res) {
        console.log(
          `auth success (email: ${data.email}, marketing agree: ${route.params.optionalChecked})`,
        );
        navigate('CreateName', { email: data.email });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <JoinLayout title={title}>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <EmailInput
            control={control}
            errorText={errors.email?.message}
            placeholder='Email Address'
          />
        </View>
        <View style={styles.button}>
          {isEmailSent ? (
            <OutlinedButton
              onPress={handleSubmit(onConfirmEmail)}
              content='Resend'
              disabled
              customStyle={{
                paddingVertical: 14,
              }}
            />
          ) : (
            <BasicButton
              onPress={handleSubmit(onConfirmEmail)}
              content='Confirm'
              small
              round
            />
          )}
        </View>
      </View>
      {isEmailSent && (
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <AuthCodeInput
              control={control}
              errorText={errors.authCode?.message}
            />
          </View>
          <View style={styles.button}>
            <BasicButton
              onPress={handleSubmit(onCheckAuthCode)}
              content='Confirm'
              small
              round
            />
          </View>
        </View>
      )}
    </JoinLayout>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  inputBox: {
    width: '75%',
  },
  touched: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '24.3%',
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: 'Montserrat-Regular',
  },
});
