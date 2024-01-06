import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Linking from 'expo-linking';
import { RecoilRoot } from 'recoil';
import Toast, { ToastConfig } from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '@/navigations/';
import ModalProvider from '@/components/organisms/Modal/ModalProvider';
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

const prefix = Linking.createURL('/');

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        ContentStack: {
          path: '',
          screens: {
            Content: {
              path: 'content/:id',
              parse: {
                id: Number,
              },
            },
          },
        },
      },
    },
  };

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
    <RecoilRoot>
      <NavigationContainer linking={linking}>
        <Navigation />
        <ModalProvider />
      </NavigationContainer>
      <Toast config={CustomToast as ToastConfig} />
    </RecoilRoot>
  );
}
