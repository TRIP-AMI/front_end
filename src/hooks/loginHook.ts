import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import loginState from '@/utils/recoil/login';
import loginApi from '@/services/module/login/login';
import { ILoginInputs } from '@/types/FormTypes';
import profileType from '@/utils/recoil/profile';
import { Profile } from '@/types/UserTypes';
import { AuthStackNavigationProp } from '@/navigations/AuthStack/AuthStack';

const useLoginHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [profileState, setProfileState] = useRecoilState<Profile>(profileType);
  const { navigate } = useNavigation<AuthStackNavigationProp>();

  const getStoredToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const profile = await AsyncStorage.getItem('profile');
    if (token && profile) {
      setIsLoggedIn(true);
      setProfileState(profile as Profile);
    }
  };

  const onLogin = async (isAuto: boolean, req: ILoginInputs) => {
    try {
      // TODO: 로그인 API 연동
      const userInfo = await loginApi.getLoginUser(req);
      if (isAuto) {
        await AsyncStorage.setItem('token', userInfo.token);
      }
      navigate('SelectProfile', {
        nickname: userInfo.nickname,
        imgUrl: userInfo.imgUrl,
      });
    } catch (e) {
      // TODO: 로그인 실패시 처리
      console.log('로그인 실패: ', e);
    }
  };

  const onLogout = async () => {
    // TODO: 로그아웃 API 연동
    await AsyncStorage.removeItem('profile');
    await AsyncStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, profileState, getStoredToken, onLogin, onLogout };
};

export default useLoginHook;
