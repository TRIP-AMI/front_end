import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from '@/navigations/';

const fetchFonts = async () => {
  // TODO: eslint 룰 제거하거나 오류 수정 필요
  await Font.loadAsync({
    // eslint-disable-next-line global-require
    'Pretendard-Medium': require('./assets/fonts/pretendard/Pretendard-Medium.ttf'),
    // eslint-disable-next-line global-require
    'Pretendard-Black': require('./assets/fonts/pretendard/Pretendard-Black.ttf'),
  });
};

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

  return <Navigation />;
}
