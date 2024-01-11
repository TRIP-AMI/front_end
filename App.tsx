import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { RecoilRoot } from 'recoil';
import Toast, { ToastConfig } from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from '@/navigations/';
import CustomToast from '@/components/atoms/Toast/CustomToast';

const fetchFonts = async () => {
  await Font.loadAsync({
    'Pretendard-Regular': require('./src/assets/fonts/pretendard/Pretendard-Regular.ttf'),
    'Pretendard-Medium': require('./src/assets/fonts/pretendard/Pretendard-Medium.ttf'),
    'Pretendard-Bold': require('./src/assets/fonts/pretendard/Pretendard-Bold.ttf'),
    'Pretendard-SemiBold': require('./src/assets/fonts/pretendard/Pretendard-SemiBold.ttf'),
    'Pretendard-ExtraBold': require('./src/assets/fonts/pretendard/Pretendard-ExtraBold.ttf'),
    'Mortend-Bold': require('./src/assets/fonts/mortend/Mortend-Bold.ttf'),
    'Montserrat-Regular': require('./src/assets/fonts/montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/montserrat/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-ExtraBold': require('./src/assets/fonts/montserrat/Montserrat-ExtraBold.ttf'),
  });
};

const queryClient = new QueryClient();

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const loadFonts = async () => {
      await fetchFonts();
      setFontLoad(true);
      SplashScreen.hideAsync();
    };
    loadFonts();
  }, []);

  if (!fontLoad) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navigation />
        <Toast config={CustomToast as ToastConfig} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
