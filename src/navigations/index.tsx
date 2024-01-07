import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import MainBottomNavTab, {
  MainBottomNavTabParamList,
} from './MainBottomNavTab/MainBottomNavTab';
import CategoryScreen from '@/screens/Category/CategoryScreen';
import BackLeft from '@/components/molecules/Header/BackLeft';

import AuthStack, { AuthStackParamList } from './AuthStack/AuthStack';
import TermsStack, { TermsStackParamList } from './Common/TermsStack';
import ContentStack, { ContentStackParamList } from './Common/ContentStack';
import NotificationScreen from '@/screens/Notification';
import HeaderLeftTitle from '@/components/atoms/Text/HeaderLeftTitle';
import RightCloseX from '@/components/molecules/Header/RightCloseX';
import { Category, CategoryFindLabel } from '@/constants/category';
import ProductListScreen from '@/screens/Product/ProductListScreen';
import Fonts from '@/styles/typography';
import ModalProvider from '@/components/organisms/Modal/ModalProvider';
import loginState from '@/utils/recoil/login';
import SearchScreen from '@/screens/Search';
import CategoryHeader from '@/components/molecules/Header/CategoryHeader';

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

const prefix = Linking.createURL('/');

function Navigation() {
  // const { isLoggedIn, getStoredToken } = useLoginHook();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const getStoredToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  };

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        ContentStack: {
          path: '',
          screens: {
            Content: {
              path: 'content/:id',
              parse: {
                id: Number,
              },
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    getStoredToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && !isLoggedIn) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>기다리는중</Text>
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
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
                header: () => {
                  return (
                    <CategoryHeader
                      title={CategoryFindLabel(route.params.categoryId)}
                    />
                  );
                },
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
      <ModalProvider />
    </NavigationContainer>
  );
}

export default Navigation;
