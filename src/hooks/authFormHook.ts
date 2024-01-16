import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import {
  AuthStackNavigationProp,
  EmailAuthProps,
} from '@/navigations/AuthStack/AuthStack';
import { IJoinAuthInputs } from '@/types/FormTypes';
import showToast from '@/utils/toast/toast';
import useModalHook from './modalHook';
import joinApi from '@/services/module/join/join';

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

  const onConfirmEmail = async (data: IJoinAuthInputs) => {
    if (errors.email) return;
    try {
      const res =
        mode === 'JOIN'
          ? await joinApi.checkEmail({ email: data.email })
          : await joinApi.checkMember({ email: data.email });
      if (res.status === 200) {
        setIsEmailSent(true);
        setEmail(data.email);
        showToast('Sent an authentication number to that email.');
        setTitle(
          `To the email you entered\nAuthentication number has been sent`,
        );
        setTimer(TIMER);
        await joinApi.sendAuthCode({ email: data.email });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // TODO: any 타입 수정
      const { status } = error.response;
      if (mode === 'JOIN') showToast('This account is already registered.');
      else if (mode === 'FIND_PW' && status === 400) setModalName('AUTH_ALERT');
      setIsEmailSent(false);
      setTitle(TITLE);
      setTimer(TIMER);
      setEmail('');
    }
  };

  const onResendEmail = async (data: IJoinAuthInputs) => {
    try {
      showToast('Sent an authentication number to that email.');
      await joinApi.sendAuthCode({ email: data.email });
      setIsEmailSent(true);
      setTimer(TIMER);
    } catch (error) {
      showToast('Failed to send authentication number.');
    }
  };

  const onCheckAuthCode = async (data: IJoinAuthInputs) => {
    if (errors.authCode || !data.authCode || timer === 0) return;
    try {
      await joinApi.checkAuthCode({
        email,
        inputCode: data.authCode,
      });
      if (mode === 'JOIN')
        navigate('CreateName', {
          email,
          agreedMarketing: params?.optionalChecked || false,
        });
      else if (mode === 'FIND_PW') {
        navigate('ResetPassword', { mode: 'RESET', email });
      }
    } catch (error) {
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
    onResendEmail,
    onCheckAuthCode,
    setTimer,
  };
};

export default useAuthForm;
