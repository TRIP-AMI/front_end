import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import useModalHook from '@/hooks/modalHook';
import { ICreatePasswordInputs } from '@/types/FormTypes';
import instance from '@/services/config/axios';
import joinApi from '@/services/module/join/join';
import userState from '@/utils/recoil/user';
import CreatePassword from '@/components/organisms/Input/CreatePassword';
import useLoginHook from '@/hooks/loginHook';
import { RootStackNavigationProp } from '@/navigations';

export default function ResetPasswordScreen() {
  const { goBack } = useNavigation<RootStackNavigationProp>();
  const { memberId } = useRecoilValue(userState);
  const { setModalName } = useModalHook();
  const { onLogout } = useLoginHook();
  const [isLoading, setIsLoading] = useState(false);

  const onNext = async (data: ICreatePasswordInputs) => {
    if (data.password !== data.reentered) return;
    try {
      setIsLoading(true);
      await joinApi.checkPassword({ password: data.password });
      await instance.patch(`/members/${memberId}/password`, {
        password: data.password,
      });
      onLogout();
      setModalName('JOIN_COMPLETE', {
        title: 'Your Password has been reset.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CreatePassword
      title='Please set a new password'
      onSubmit={onNext}
      onCancel={goBack}
      confirmText='Submit'
      isLoading={isLoading}
    />
  );
}
