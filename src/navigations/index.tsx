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
import BackLeftArrow from '@components/molecules/Header/BackLeftArrow';
import ApplicationDetailsScreen from '@screens/ApplicationDetailsScreen';
import { useEffect } from 'react';
import InquiryScreen from '@/screens/menu/InquiryScreen';
import { RootStackParamList } from '@/types/NavigationTypes';
import BottomNavBar from './BottomNavBar';
import CategoryScreen from '@/screens/CategoryScreen';
import Colors from '@/styles/colors';
import SearchNotificationRight from '@/components/molecules/Header/SearchNotificationRight';
import BackLeft from '@/components/molecules/Header/BackLeft';
import Fonts from '@/styles/typography';
import LoginScreen from '@/screens/LoginScreen';
import useLoginHook from '@/hooks/loginHook';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const { isLoggedIn, getStoredToken } = useLoginHook();

  useEffect(() => {
    getStoredToken();
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
                headerLeft: () => <BackLeftArrow />,
              }}
            />
            <Stack.Screen
              name='Inquiry'
              component={InquiryScreen}
              options={{
                headerTitleStyle: Fonts.header.title,
                headerLeft: () => <BackLeftArrow />,
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
                headerLeft: () => <BackLeftArrow />,
              }}
            />
            <Stack.Screen
              name='ApplicationDetails'
              component={ApplicationDetailsScreen}
              options={{
                title: 'Application details',
                headerTitleStyle: Fonts.header.title,
                headerLeft: () => <BackLeftArrow />,
                headerShadowVisible: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerBackVisible: false,
              headerTitleStyle: Fonts.header.title,
              headerShadowVisible: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
