import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import loginState from '@/utils/recoil/login';
import loginApi from '@/services/module/login/login';

const useLoginHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const getStoredToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  };

  const onLogin = async () => {
    try {
      // TODO: 로그인 API 연동
      const data = await loginApi.getAccessToken();
      await AsyncStorage.setItem('token', JSON.stringify(data));
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    // TODO: 로그아웃 API 연동
    await AsyncStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, getStoredToken, onLogin, onLogout };
};

export default useLoginHook;
