import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  Octicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '@styles/colors';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LikeScreen from '@/screens/bottomNav/Like/LikeScreen';
import HomeScreen from '@/screens/bottomNav/Home/HomeScreen';
import Fonts from '@/styles/typography';
import MenuStack, { MenuParamList } from './Menu/MenuStack';
import MyPageStack, { MyPageParamList } from './MyPage/MyPageStack';
import UploadStack, { UploadStackParamList } from './Upload/UploadStack';

import LeftTitleRightSearchNoti from '@/components/molecules/Header/LeftTitleRightSearchNoti';
import HomeHeader from '@/components/molecules/Header/HomeHeader';

export type MainBottomNavTabParamList = {
  MenuStack: NavigatorScreenParams<MenuParamList>;
  Like: undefined;
  Home: undefined;
  UploadStack: NavigatorScreenParams<UploadStackParamList>;
  MyPageStack: NavigatorScreenParams<MyPageParamList>;
};

export type MainBottomNavTabNavigationProp =
  NativeStackNavigationProp<MainBottomNavTabParamList>;

const Tab = createBottomTabNavigator<MainBottomNavTabParamList>();

const iconSize = 24;

export default function MainBottomNavTab() {
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
        name='MenuStack'
        component={MenuStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='menu' color={color} size={30} />
          ),
          tabBarLabel: 'Menu',
        }}
      />
      <Tab.Screen
        name='Like'
        component={LikeScreen}
        options={{
          tabBarLabel: 'Like',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='heart' size={iconSize} color={color} />
          ),
          header: () => <LeftTitleRightSearchNoti title='Like' />,
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='md-home-outline' color={color} size={iconSize} />
          ),
          tabBarLabel: 'Home',
          header: () => <HomeHeader />,
        }}
      />
      <Tab.Screen
        name='UploadStack'
        component={UploadStack}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='pluscircleo' color={color} size={iconSize} />
          ),
          title: 'Upload',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='MyPageStack'
        component={MyPageStack}
        options={{
          title: 'My',
          tabBarIcon: ({ color }) => (
            <Octicons name='person' color={color} size={iconSize} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
