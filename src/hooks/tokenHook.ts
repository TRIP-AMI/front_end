import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import loginState from '@/utils/recoil/login';
import profileType from '@/utils/recoil/profile';
import { Profile } from '@/types/UserTypes';
import instance from '@/services/config/axios';
import userState, { UserType } from '@/utils/recoil/user';

const useToken = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [profileState, setProfileState] = useRecoilState<Profile>(profileType);
  const [loading, setLoading] = useState(true);
  const userData = useRecoilValue<UserType>(userState);
  const resetUser = useResetRecoilState(userState);

  const getStoredToken = async () => {
    const [token, refresh, profile] = await AsyncStorage.multiGet([
      'token',
      'refresh',
      'profile',
    ]);
    if (token[1] && refresh[1] && profile[1]) {
      setIsLoggedIn(true);
      setProfileState(profile[1] as Profile);
      instance.defaults.headers.common['Authorization'] = `${token[1]}`;
    } else onLogout();
    setLoading(false);
  };

  // TODO: 로그아웃 API 체크
  const onLogout = async () => {
    const { memberId } = userData;
    console.log(`logout memberId: ${memberId}`);
    // await instance.patch(`/members/${memberId}/logout`);
    await AsyncStorage.multiRemove(['token', 'refresh', 'profile']);
    delete instance.defaults.headers.common['Authorization'];
    resetUser();
    setIsLoggedIn(false);
  };

  return {
    loading,
    setLoading,
    isLoggedIn,
    profileState,
    getStoredToken,
    onLogout,
  };
};

export default useToken;
