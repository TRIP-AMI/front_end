import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroductionScreen from '@screens/menu/IntroductionScreen';
import BannerListScreen from '@screens/menu/BannerListScreen';
import NotificationScreen from '@screens/menu/NotificationScreen';
import FAQScreen from '@screens/menu/FAQScreen';
import SearchScreen from '@screens/SearchScreen';
import ContentScreen from '@screens/ContentScreen';
import ContentHeaderRightIcons from '@components/molecules/Header/ContentHeaderRightIcons';
import ContentHeaderLeftIcon from '@components/molecules/Header/ContentHeaderLeftIcon';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import InquiryScreen from '@/screens/menu/InquiryScreen';
import { RootStackParamList } from '@/types/NavigationTypes';
import BottomNavBar from './BottomNavBar';
import CategoryScreen from '@/screens/CategoryScreen';
import Colors from '@/styles/colors';
import SearchNotificationRight from '@/components/molecules/Header/SearchNotificationRight';
import BackLeft from '@/components/molecules/Header/BackLeft';
import Fonts from '@/styles/typography';
import LoginScreen from '@/screens/LoginScreen';
import loginState from '@/utils/recoil/login';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    getToken();
    console.log('isLoggedIn', isLoggedIn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name='MenuBar'
              component={BottomNavBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Service'
              component={IntroductionScreen}
              options={{
                title: 'CultureX',
              }}
            />
            <Stack.Screen
              name='BannerList'
              component={BannerListScreen}
              options={{
                title: 'Events',
              }}
            />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen
              name='FAQ'
              component={FAQScreen}
              options={{
                headerTitleStyle: Fonts.header.title,
                headerLeft: () => <ContentHeaderLeftIcon />,
              }}
            />
            <Stack.Screen
              name='Inquiry'
              component={InquiryScreen}
              options={{
                headerTitleStyle: Fonts.header.title,
                headerLeft: () => <ContentHeaderLeftIcon />,
              }}
            />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen
              name='Category'
              component={CategoryScreen}
              options={({ route }) => ({
                title: route.params.title,
                headerStyle: {
                  backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 20,
                },
                headerLeft: () => <BackLeft theme='white' />,
                headerRight: () => <SearchNotificationRight theme='white' />,
              })}
            />
            <Stack.Screen
              name='Content'
              component={ContentScreen}
              options={{
                title: '',
                headerRight: () => <ContentHeaderRightIcons />,
                headerLeft: () => <ContentHeaderLeftIcon />,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerBackVisible: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
