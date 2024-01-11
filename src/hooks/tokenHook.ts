import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import loginState from '@/utils/recoil/login';
import profileType from '@/utils/recoil/profile';
import { Profile } from '@/types/UserTypes';

const useToken = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [profileState, setProfileState] = useRecoilState<Profile>(profileType);
  const [loading, setLoading] = useState(true);

  const getStoredToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const profile = await AsyncStorage.getItem('profile');
    if (token && profile) {
      setIsLoggedIn(true);
      setProfileState(profile as Profile);
    }
    setLoading(false);
  };
  return { loading, setLoading, isLoggedIn, profileState, getStoredToken };
};

export default useToken;
