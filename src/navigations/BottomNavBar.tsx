import { Ionicons, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import MyPageScreen from '@screens/MyPageScreen';
import LikeScreen from '@screens/LikeScreen';
import MenuScreen from '@screens/MenuScreen';
import Colors from '@styles/colors';
import HomeHeaderIcons from '@components/molecules/Header/HomeHeaderIcons';
import UploadScreen from '@screens/UploadScreen';
import SettingIcon from '@components/molecules/etc/SettingIcon';
import SwitchButton from '@components/atoms/Button/SwitchButton';
import { BottomTabParamList } from '@/types/NavigationTypes';
import Fonts from '@/styles/typography';
import BackLeftArrow from '@/components/molecules/Header/BackLeftArrow';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomNavBar() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerTitleStyle: Fonts.header.title,
        headerTitleAlign: 'left',
      }}
    >
      <Tab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='menu' color={color} size={26} />
          ),
          headerRight: () => <HomeHeaderIcons />,
          title: 'MENU',
        }}
      />
      <Tab.Screen
        name='Like'
        component={LikeScreen}
        options={{
          title: 'LIKE',
          tabBarIcon: ({ color }) => (
            <Ionicons name='heart' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' color={color} size={26} />
          ),
          title: 'TRIPAMI',
          headerTitleStyle: Fonts.header.logo,
          headerRight: () => <HomeHeaderIcons />,
        }}
      />
      <Tab.Screen
        name='Upload'
        component={UploadScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='pluscircleo' color={color} size={26} />
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
            <Ionicons name='person' color={color} size={26} />
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
