import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  Octicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '@styles/colors';
import HomeHeaderIcons from '@components/molecules/Header/HomeHeaderIcons';
import SettingIcon from '@components/molecules/etc/SettingIcon';
import SwitchButton from '@components/atoms/Button/SwitchButton';
import MyPageScreen from '@/screens/bottomNav/MyPage/MyPageScreen';
import UploadScreen from '@/screens/bottomNav/Upload/UploadScreen';
import MenuScreen from '@/screens/bottomNav/Menu/MenuScreen';
import LikeScreen from '@/screens/bottomNav/Like/LikeScreen';
import HomeScreen from '@/screens/bottomNav/Home/HomeScreen';
import { MainBottomTabParamList } from '@/types/NavigationTypes';
import Fonts from '@/styles/typography';
import BackLeftArrow from '@/components/molecules/Header/BackLeftArrow';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const iconSize = 24;

export default function BottomNavBar() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {
          paddingTop: 10,
          height: 90,
        },
        headerTitleStyle: Fonts.header.title,
        headerTitleAlign: 'left',
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.fontGray02,
        tabBarLabelStyle: Fonts.tabBar.label,
      }}
    >
      <Tab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='menu' color={color} size={30} />
          ),
          headerRight: () => <HomeHeaderIcons />,
          title: 'MENU',
          tabBarLabel: 'Menu',
        }}
      />
      <Tab.Screen
        name='Like'
        component={LikeScreen}
        options={{
          title: 'LIKE',
          tabBarLabel: 'Like',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='heart' size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='md-home-outline' color={color} size={iconSize} />
          ),
          title: 'TRIPAMI',
          tabBarLabel: 'Home',
          headerTitleStyle: Fonts.header.logo,
          headerRight: () => <HomeHeaderIcons />,
        }}
      />
      <Tab.Screen
        name='Upload'
        component={UploadScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='pluscircleo' color={color} size={iconSize} />
          ),
          headerLeft: () => <BackLeftArrow />,
          title: 'Upload',
          headerTitle: 'Create Content',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name='MyPage'
        component={MyPageScreen}
        options={{
          title: 'My',
          tabBarIcon: ({ color }) => (
            <Octicons name='person' color={color} size={iconSize} />
          ),
          headerRight: () => <SettingIcon />,
          headerLeft: () => <SwitchButton />,
          headerTitle: '',
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
      />
    </Tab.Navigator>
  );
}
