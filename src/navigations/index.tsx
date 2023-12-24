import { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroductionScreen from '@screens/menu/IntroductionScreen';
import BannerListScreen from '@screens/menu/BannerListScreen';
import NotificationScreen from '@screens/menu/NotificationScreen';
import FAQScreen from '@screens/menu/FAQScreen';
import ContentScreen from '@screens/ContentScreen';
import ContentHeaderRightIcons from '@components/molecules/Header/ContentHeaderRightIcons';
import BackLeftArrow from '@components/molecules/Header/BackLeftArrow';
import ApplicationDetailsScreen from '@screens/ApplicationDetailsScreen';
import { useNavigation } from '@react-navigation/native';
import BookDetailsScreen from '@screens/BookDetailsScreen';
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
import JoinScreen from '@/screens/JoinScreen';
import EmailAuthScreen from '@/screens/EmailAuthScreen';
import useModalHook from '@/hooks/modalHook';
import CreateNameScreen from '@/screens/CreateNameScreen';
import CreatePasswordScreen from '@/screens/CreatePasswordScreen';
import CalendarScreen from '@/screens/CalendarScreen';
import SelectProfileScreen from '@/screens/SelectProfileScreen';
import CloseButton from '@/components/atoms/Button/CloseButton';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const { isLoggedIn, profileState, getStoredToken } = useLoginHook();
  const { setModalName } = useModalHook();
  const navigation = useNavigation();

  useEffect(() => {
    getStoredToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
          <Stack.Screen
            name='Calendar'
            component={CalendarScreen}
            options={{
              title: 'Available Dates',
              headerTitleStyle: Fonts.header.title,
              headerLeft: () => <BackLeft />,
            }}
          />
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
              title:
                profileState === 'AMI'
                  ? 'Applicant History'
                  : 'Application details',
              headerTitleStyle: Fonts.header.title,
              headerLeft: () => <BackLeftArrow />,
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name='BookDetails'
            component={BookDetailsScreen}
            options={{
              title: 'Application details',
              headerTitleStyle: Fonts.header.title,
              headerLeft: () => <BackLeftArrow />,
              headerShadowVisible: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Group
            screenOptions={{
              headerBackVisible: false,
              headerTitleStyle: Fonts.header.title,
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen
              name='SelectProfile'
              component={SelectProfileScreen}
              options={{
                title: 'Select Profile',
              }}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              title: 'Join',
              headerBackVisible: false,
              headerTitleStyle: Fonts.header.title,
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name='Join' component={JoinScreen} />
            <Stack.Screen
              name='JoinAuth'
              component={EmailAuthScreen}
              options={{
                headerRight: () => (
                  <CloseButton onPress={() => setModalName('JOIN_CANCEL')} />
                ),
              }}
            />
            <Stack.Screen name='CreateName' component={CreateNameScreen} />
            <Stack.Screen
              name='CreatePassword'
              component={CreatePasswordScreen}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              title: 'Find Password',
              headerBackVisible: false,
              headerTitleStyle: Fonts.header.title,
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name='FindPassword'
              component={EmailAuthScreen}
              options={{
                headerRight: () => (
                  <CloseButton onPress={() => navigation.goBack()} />
                ),
              }}
            />
            <Stack.Screen
              name='ResetPassword'
              component={CreatePasswordScreen}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

export default Navigation;
