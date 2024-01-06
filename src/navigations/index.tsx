import { useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { NavigatorScreenParams } from '@react-navigation/native';
import MainBottomNavTab, {
  MainBottomNavTabParamList,
} from './MainBottomNavTab/MainBottomNavTab';
import CategoryScreen from '@/screens/Category/CategoryScreen';
import Colors from '@/styles/colors';
import SearchNotificationRight from '@/components/molecules/Header/SearchNotificationRight';
import BackLeft from '@/components/molecules/Header/BackLeft';
import useLoginHook from '@/hooks/loginHook';

import AuthStack, { AuthStackParamList } from './AuthStack/AuthStack';
import TermsStack, { TermsStackParamList } from './Common/TermsStack';
import ContentStack, { ContentStackParamList } from './Common/ContentStack';
import NotificationScreen from '@/screens/Notification';
import HeaderLeftTitle from '@/components/atoms/Text/HeaderLeftTitle';
import RightCloseX from '@/components/molecules/Header/RightCloseX';
import { Category, CategoryFindLabel } from '@/constants/category';
import ProductListScreen from '@/screens/Product/ProductListScreen';
import Fonts from '@/styles/typography';
import SearchScreen from '@/screens/Search';

export type RootStackParamList = {
  MainBottomNavTab: NavigatorScreenParams<MainBottomNavTabParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  ContentStack: NavigatorScreenParams<ContentStackParamList>;
  TermsStack: NavigatorScreenParams<TermsStackParamList>;
  Category: { categoryId: Category };
  ProductList: { listId: string; title: string };
  Notification: undefined;
  Search: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const { isLoggedIn, getStoredToken } = useLoginHook();

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
            name='MainBottomNavTab'
            component={MainBottomNavTab}
            options={{ headerShown: false }}
          />
          {/* category */}
          <Stack.Screen
            name='Category'
            component={CategoryScreen}
            options={({ route }) => ({
              title: CategoryFindLabel(route.params.categoryId),
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
          {/* product list */}
          <Stack.Screen
            name='ProductList'
            component={ProductListScreen}
            options={({ route }) => ({
              title: route.params.title,
              headerLeft: () => <BackLeft />,
              headerTitleStyle: Fonts.header.title,
            })}
          />
          {/* content */}
          <Stack.Screen
            name='ContentStack'
            component={ContentStack}
            options={{ headerShown: false }}
          />

          {/* Notification */}
          <Stack.Screen
            name='Notification'
            component={NotificationScreen}
            options={{
              headerTitle: '',
              headerLeft: () => <HeaderLeftTitle title='Notification' />,
              headerRight: () => <RightCloseX />,
              headerShadowVisible: false,
            }}
          />
          {/* Search */}
          <Stack.Screen
            name='Search'
            component={SearchScreen}
            options={{
              headerTitle: '',
              headerRight: () => <RightCloseX />,
              headerShadowVisible: false,
              headerBackVisible: false,
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name='AuthStack'
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
      )}

      {/* terms */}
      <Stack.Screen
        name='TermsStack'
        component={TermsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
