import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import {
  AuthStackNavigationProp,
  EmailAuthProps,
} from '@/navigations/AuthStack/AuthStack';
import { IJoinAuthInputs } from '@/types/FormTypes';
import instance, { BASE_API_URL } from '@/services/config/axios';
import showToast from '@/utils/toast/toast';
import useModalHook from './modalHook';

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

  const { navigate } = useNavigation<AuthStackNavigationProp>();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState(TITLE);
  const { setModalName } = useModalHook();
  const TIMER = 180;
  const [timer, setTimer] = useState(TIMER);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IJoinAuthInputs>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      authCode: '',
    },
  });

  // TODO: 이메일 인증 요청
  const onConfirmEmail = async (data: IJoinAuthInputs) => {
    if (errors.email) return;
    try {
      await instance.post(`${BASE_API_URL}/email`, { email: data.email });
      if (isEmailSent === true)
        showToast('Sent an authentication number to that email.');
      setIsEmailSent(true);
      setTitle(`To the email you entered\nAuthentication number has been sent`);
      setEmail(data.email);
      setTimer(TIMER);
    } catch (e) {
      if (mode === 'JOIN') showToast('This account is already registered.');
      else if (mode === 'FIND_PW') setModalName('AUTH_ALERT');
      setIsEmailSent(false);
      setTitle(TITLE);
      setTimer(TIMER);
      setEmail('');
    }
  };

  // TODO: 인증 코드 확인 요청
  const onCheckAuthCode = async (data: IJoinAuthInputs) => {
    if (errors.authCode || !data.authCode || timer === 0) return;
    try {
      if (mode === 'JOIN') {
        await instance.post(`${BASE_API_URL}/confirm`, {
          email,
          authCode: data.authCode,
        });
        navigate('CreateName', {
          email,
          agreedMarketing: params?.optionalChecked || false,
        });
      } else if (mode === 'FIND_PW') {
        navigate('ResetPassword', { mode: 'RESET', email });
      }
    } catch (e) {
      setError('authCode', {
        message: 'The authentication number is invalid.',
      });
    }
  };

  return {
    isEmailSent,
    title,
    control,
    errors,
    timer,
    handleSubmit,
    onConfirmEmail,
    onCheckAuthCode,
    setTimer,
  };
};

export default useAuthForm;
