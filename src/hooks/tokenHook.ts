import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import loginState from '@/utils/recoil/login';
import profileType from '@/utils/recoil/profile';
import { Profile } from '@/types/UserTypes';
import instance from '@/services/config/axios';

const useToken = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [profileState, setProfileState] = useRecoilState<Profile>(profileType);
  const [loading, setLoading] = useState(true);

  const getStoredToken = async () => {
    const [token, refresh, profile] = await AsyncStorage.multiGet([
      'token',
      'refresh',
      'profile',
    ]);
    if (token[1] && refresh[1] && profile[1]) {
      setIsLoggedIn(true);
      setProfileState(profile[1] as Profile);
      instance.defaults.headers.common['Authorization'] = `Bearer ${token[1]}`;
    } else delete instance.defaults.headers.common['Authorization'];
    setLoading(false);
  };

  return {
    loading,
    setLoading,
    isLoggedIn,
    profileState,
    getStoredToken,
  };
};

export default useToken;
