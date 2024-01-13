import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import loginState from '@/utils/recoil/login';
import loginApi from '@/services/module/login/login';
import { ILoginInputs } from '@/types/FormTypes';
import profileType from '@/utils/recoil/profile';
import { Profile } from '@/types/UserTypes';
import { AuthStackNavigationProp } from '@/navigations/AuthStack/AuthStack';
import useModalHook from '@/hooks/modalHook';

const useLoginHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isLoading, setIsLoading] = useState(false);
  const profileState = useRecoilValue<Profile>(profileType);
  const { replace } = useNavigation<AuthStackNavigationProp>();
  const { setModalName } = useModalHook();

  const onLogin = async (isAuto: boolean, req: ILoginInputs) => {
    try {
      setIsLoading(true);
      const res = await loginApi.getLoginUser(req);
      setIsLoading(false);
      const { data, headers } = res;
      const accessToken = headers['authorization'];
      const refreshToken = headers['refresh'];
      if (isAuto) {
        await AsyncStorage.multiSet([
          ['token', accessToken],
          ['refresh', refreshToken],
        ]);
      }
      replace('SelectProfile', {
        nickname: data.nickname,
        imgUrl: data.imgUrl,
      });
    } catch (e) {
      setModalName('LOGIN_INVALID');
      setIsLoading(false);
    }
  };

  const onLogout = async () => {
    // TODO: 로그아웃 API 연동
    await AsyncStorage.multiRemove(['token', 'refresh', 'profile']);
    setIsLoggedIn(false);
  };

  return { isLoggedIn, isLoading, profileState, onLogin, onLogout };
};

export default useLoginHook;
