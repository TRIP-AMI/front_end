import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import joinAuthApi from '@services/module/join/join';
import {
  EmailAuthProps,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import { IJoinAuthInputs } from '@/types/FormTypes';

const useAuthForm = ({
  mode,
  params,
}: {
  mode: 'JOIN' | 'FIND_PW';
  params?: EmailAuthProps;
}) => {
  const TITLE =
    mode === 'JOIN'
      ? 'Please enter your email'
      : `Please enter your email\nyou signed up for membership.`;

  const { navigate } = useNavigation<RootStackNavigationProp>();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [title, setTitle] = useState(TITLE);

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
      setTitle(TITLE);
      console.log(e);
    }
  };

  // TODO: 인증 코드 확인 요청, 에러 처리
  const onCheckAuthCode = async (data: IJoinAuthInputs) => {
    if (errors.authCode) return;
    try {
      await joinAuthApi.checkAuthCode(data.authCode);
      if (mode === 'JOIN') {
        console.log(
          `auth success (email: ${data.email}, marketing agree: ${params?.optionalChecked})`,
        );
        navigate('CreateName', { email: data.email });
      } else if (mode === 'FIND_PW') {
        navigate('ResetPassword', { email: data.email });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    isEmailSent,
    title,
    control,
    errors,
    handleSubmit,
    onConfirmEmail,
    onCheckAuthCode,
  };
};

export default useAuthForm;
