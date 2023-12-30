import { useEffect } from 'react';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentScreen from '@screens/ContentScreen';
import ContentHeaderRightIcons from '@components/molecules/Header/ContentHeaderRightIcons';
import BackLeftArrow from '@components/molecules/Header/BackLeftArrow';
import ApplicationDetailsScreen from '@screens/ApplicationDetailsScreen';
import BookDetailsScreen from '@screens/BookDetailsScreen';
import ReviewDetailsScreen from '@screens/ReviewDetailsScreen';
import AnnouncementScreen from '@/screens/bottomNav/Menu/Announcement';
import FAQScreen from '@/screens/bottomNav/Menu/FAQ/FAQScreen';
import InquiryScreen from '@/screens/bottomNav/Menu/Inquiry/InquiryScreen';
import BottomNavBar from './MainBottomNavTab';
import CategoryScreen from '@/screens/Category/CategoryScreen';
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
import CalendarScreen from '@/screens/bottomNav/Upload/Calendar/CalendarScreen';
import SelectProfileScreen from '@/screens/SelectProfileScreen';
import CloseButton from '@/components/atoms/Button/CloseButton';
import ContentReportScreen from '@/screens/ContentReportScreen';
import ContentReportDetailScreen from '@/screens/ContentReportDetailScreen';
import JoinTermsScreen from '@/screens/JoinTermsScreen';
import AboutScreen from '@/screens/bottomNav/Menu/About';
import { RootStackParamList } from '@/types/NavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const { isLoggedIn, profileState, getStoredToken } = useLoginHook();
  const { setModalName } = useModalHook();
  const { goBack } = useNavigation();

  useEffect(() => {
    getStoredToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          {/* bottom nav */}
          <Stack.Screen
            name='MenuBar'
            component={BottomNavBar}
            options={{ headerShown: false }}
          />
          {/* menu */}
          <Stack.Group
            screenOptions={{
              headerTitleStyle: Fonts.header.title,
              headerLeft: () => <BackLeftArrow />,
            }}
          >
            <Stack.Screen
              name='About'
              options={{ title: 'About TRIPAMI' }}
              component={AboutScreen}
            />
            <Stack.Screen name='Announcement' component={AnnouncementScreen} />
            <Stack.Screen name='FAQ' component={FAQScreen} />
            <Stack.Screen name='Inquiry' component={InquiryScreen} />
          </Stack.Group>
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
          <Stack.Group
            screenOptions={{
              headerBackVisible: false,
              headerTitleStyle: Fonts.header.title,
              headerShadowVisible: false,
            }}
          >
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
              name='Report'
              component={ContentReportScreen}
              options={{
                title: '',
                headerRight: () => <CloseButton onPress={() => goBack()} />,
              }}
            />
            <Stack.Screen
              name='ReportDetail'
              component={ContentReportDetailScreen}
              options={{
                title: '',
                headerLeft: () => <BackLeftArrow />,
              }}
            />
          </Stack.Group>
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
          <Stack.Screen
            name='ReviewDetails'
            component={ReviewDetailsScreen}
            options={{
              title: 'Review details',
              headerTitleStyle: Fonts.header.title,
              headerLeft: () => <BackLeftArrow />,
              headerShadowVisible: false,
            }}
          />
          <Stack.Group
            screenOptions={{
              headerBackVisible: false,
              headerRight: () => <CloseButton onPress={() => goBack()} />,
              headerShadowVisible: false,
              headerTitleStyle: Fonts.header.title,
            }}
          >
            <Stack.Screen
              name='Age'
              component={JoinTermsScreen}
              options={{ title: 'Age Consent' }}
            />
            <Stack.Screen
              name='Privacy'
              component={JoinTermsScreen}
              options={{ title: 'Privacy Policy' }}
            />
            <Stack.Screen
              name='Terms'
              component={JoinTermsScreen}
              options={{ title: 'Tems of Service' }}
            />
            <Stack.Screen
              name='Marketing'
              component={JoinTermsScreen}
              options={{ title: 'Marketing Agreements' }}
            />
          </Stack.Group>
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
            <Stack.Group
              screenOptions={{
                headerBackVisible: false,
                headerRight: () => <CloseButton onPress={() => goBack()} />,
                headerShadowVisible: false,
                headerTitleStyle: Fonts.header.title,
              }}
            >
              <Stack.Screen
                name='Age'
                component={JoinTermsScreen}
                options={{ title: 'Age Consent' }}
              />
              <Stack.Screen
                name='Privacy'
                component={JoinTermsScreen}
                options={{ title: 'Privacy Policy' }}
              />
              <Stack.Screen
                name='Terms'
                component={JoinTermsScreen}
                options={{ title: 'Tems of Service' }}
              />
              <Stack.Screen
                name='Marketing'
                component={JoinTermsScreen}
                options={{ title: 'Marketing Agreements' }}
              />
            </Stack.Group>
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
                headerRight: () => <CloseButton onPress={() => goBack()} />,
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
