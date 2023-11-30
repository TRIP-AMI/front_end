import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import MyPageScreen from '@screens/MyPageScreen';
import PlanScreen from '@screens/PlanScreen';
import LikeScreen from '@screens/LikeScreen';
import MenuScreen from '@screens/MenuScreen';
import Colors from '@styles/colors';
import HomeHeaderIcons from '@components/molecules/Header/HomeHeaderIcons';
import { BottomTabParamList } from '@/types/NavigationTypes';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomNavBar() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: Colors.main,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
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
          headerRight: () => <HomeHeaderIcons />,
        }}
      />
      <Tab.Screen
        name='MyPage'
        component={MyPageScreen}
        options={{
          title: 'MY',
          tabBarIcon: ({ color }) => (
            <Ionicons name='person' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Plan'
        component={PlanScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='clipboard' color={color} size={26} />
          ),
          title: 'PLAN',
        }}
      />
    </Tab.Navigator>
  );
}
