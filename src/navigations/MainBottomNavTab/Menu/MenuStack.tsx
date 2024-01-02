import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import BackLeftArrow from '@/components/molecules/Header/BackLeftArrow';
import AboutScreen from '@/screens/bottomNav/Menu/About';
import AnnouncementScreen from '@/screens/bottomNav/Menu/Announcement';
import AnnouncementDetailScreen from '@/screens/bottomNav/Menu/Announcement/detail';
import FAQScreen from '@/screens/bottomNav/Menu/FAQ/FAQScreen';
import InquiryScreen from '@/screens/bottomNav/Menu/Inquiry/InquiryScreen';
import Fonts from '@/styles/typography';
import MenuScreen from '@/screens/bottomNav/Menu/MenuScreen';
import HomeHeaderIcons from '@/components/molecules/Header/HomeHeaderIcons';

export type MenuParamList = {
  Menu: undefined;
  About: undefined;
  Announcement: undefined;
  AnnouncementDetail: { announcementId: number };
  FAQ: undefined;
  Inquiry: undefined;
};

export type MenuStackNavigationProp = NativeStackNavigationProp<MenuParamList>;

const Stack = createNativeStackNavigator<MenuParamList>();

export default function MenuStack() {
  return (
    <Stack.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerTitleStyle: Fonts.header.title,
      }}
    >
      <Stack.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          title: 'MENU',
          headerRight: () => <HomeHeaderIcons />,
        }}
      />
      <Stack.Group
        screenOptions={{
          headerLeft: () => <BackLeftArrow />,
        }}
      >
        <Stack.Screen
          name='About'
          options={{ title: 'About TRIPAMI' }}
          component={AboutScreen}
        />
        <Stack.Screen name='Announcement' component={AnnouncementScreen} />
        <Stack.Screen
          name='AnnouncementDetail'
          component={AnnouncementDetailScreen}
        />
        <Stack.Screen name='FAQ' component={FAQScreen} />
        <Stack.Screen name='Inquiry' component={InquiryScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
