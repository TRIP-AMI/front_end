import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, StyleSheet } from 'react-native';
import joinAuthApi from '@services/module/join/join';
import { useNavigation } from '@react-navigation/native';
import { EmailInput } from '@/components/molecules/Input/LoginInput';
import BasicButton from '@/components/atoms/Button/BasicButton';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import {
  JoinAuthProps,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import Regex from '@/constants/regex';

interface IJoinAuthInputs {
  email: string;
  authCode: string;
}

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
  } = useForm({
    defaultValues: {
      email: '',
      authCode: '',
    },
  });

  // TODO: 이메일 인증 요청, 에러 처리
  const onSubmit = async (data: IJoinAuthInputs) => {
    if (errors.email) return;
    try {
      await console.log(data);
      setIsEmailSent(true);
      setTitle(
        `To the email you entered,\nAuthentification number has been sent.`,
      );
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
        console.log('marketing agree: ', route.params.optionalChecked);
        console.log('authentification success');
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
          <Controller
            control={control}
            rules={{
              required: 'Please enter your email address',
              pattern: {
                value: Regex.email,
                message: 'This is an invalid email address',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <EmailInput
                email={value}
                setEmail={onChange}
                placeholder='Email Address'
                error={!!errors.email}
                errorText={errors.email?.message}
              />
            )}
            name='email'
          />
        </View>
        <View style={styles.button}>
          {isEmailSent ? (
            <OutlinedButton
              onPress={handleSubmit(onSubmit)}
              content='Resend'
              disabled
              customStyle={{ paddingVertical: 15 }}
            />
          ) : (
            <BasicButton
              onPress={handleSubmit(onSubmit)}
              content='Confirm'
              round
              disabled={!!errors.email}
            />
          )}
        </View>
      </View>
      {isEmailSent && (
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Controller
              control={control}
              rules={{
                required: 'Please enter your authentication code',
              }}
              render={({ field: { onChange, value } }) => (
                <BasicInput
                  style={styles.input}
                  value={value}
                  autoComplete='one-time-code'
                  onChangeText={onChange}
                  placeholder='Enter authentication code'
                  placeholderTextColor={Colors.fontGray05}
                  autoCorrect={false}
                  autoCapitalize='none'
                  autoFocus
                />
              )}
              name='authCode'
            />
          </View>
          <View style={styles.button}>
            <BasicButton
              onPress={handleSubmit(onCheckAuthCode)}
              content='Confirm'
              round
              disabled={!!errors.authCode}
            />
          </View>
        </View>
      )}
      {errors.authCode && (
        <Text style={styles.error}>{errors.authCode.message}</Text>
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
    width: '73%',
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
  error: {
    color: '#F22222',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
    paddingHorizontal: 5,
  },
});
