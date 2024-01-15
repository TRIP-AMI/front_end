import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilValue } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import loginState from '@/utils/recoil/login';
import loginApi from '@/services/module/login/login';
import { ILoginInputs } from '@/types/FormTypes';
import profileType from '@/utils/recoil/profile';
import { Profile } from '@/types/UserTypes';
import { AuthStackNavigationProp } from '@/navigations/AuthStack/AuthStack';
import useModalHook from '@/hooks/modalHook';
import instance from '@/services/config/axios';

const useLoginHook = () => {
  const isLoggedIn = useRecoilValue(loginState);
  const [isLoading, setIsLoading] = useState(false);
  const profileState = useRecoilValue<Profile>(profileType);
  const { replace } = useNavigation<AuthStackNavigationProp>();
  const { setModalName } = useModalHook();

  const onLogin = async (isAuto: boolean, req: ILoginInputs) => {
    try {
      setIsLoading(true);
      const res = await loginApi.getLoginUser(req);
      const { data, headers } = res;
      const accessToken = headers['authorization'];
      const refreshToken = headers['refresh'];
      instance.defaults.headers.common['Authorization'] = accessToken;
      // console.log(
      //   'login 토큰:',
      //   instance.defaults.headers.common['Authorization'],
      // );
      if (isAuto) {
        await AsyncStorage.multiSet([
          ['token', accessToken],
          ['refresh', refreshToken],
        ]);
      }
      replace('SelectProfile', {
        memberId: data.authMemberid,
        nickname: data.nickname,
        email: data.email,
        imgUrl: data.imgUrl,
      });
    } catch (e) {
      setModalName('LOGIN_INVALID');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoggedIn, isLoading, profileState, onLogin };
};

export default useLoginHook;
