import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { useRecoilState } from 'recoil';
import MyPageScreen from '@/screens/bottomNav/MyPage/MyPageScreen';
import ApplicationDetailsScreen from '@/screens/ApplicationDetailsScreen';
import Fonts from '@/styles/typography';
import BackLeftArrow from '@/components/molecules/Header/BackLeftArrow';
import BookDetailsScreen from '@/screens/BookDetailsScreen';
import ReviewDetailsScreen from '@/screens/ReviewDetailsScreen';
import profileType from '@/utils/recoil/profile';
import { Profile } from '@/types/UserTypes';
import SettingIcon from '@/components/molecules/etc/SettingIcon';
import SwitchButton from '@/components/atoms/Button/SwitchButton';

export type MyPageParamList = {
  MyPage: undefined;
  ApplicationDetails: undefined;
  BookDetails: undefined;
  ReviewDetails: undefined;
};

export type MyPageStackNavigationProp =
  NativeStackNavigationProp<MyPageParamList>;

const Stack = createNativeStackNavigator<MyPageParamList>();

export default function MyPageStack() {
  const [profileState] = useRecoilState<Profile>(profileType);
  return (
    <Stack.Navigator
      initialRouteName='MyPage'
      screenOptions={{
        headerTitleStyle: Fonts.header.title,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='MyPage'
        component={MyPageScreen}
        options={{
          headerTitle: '',
          headerRight: () => <SettingIcon />,
          headerLeft: () => <SwitchButton />,
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
          headerLeft: () => <BackLeftArrow />,
        }}
      />
      <Stack.Screen
        name='BookDetails'
        component={BookDetailsScreen}
        options={{
          title: 'Application details',
          headerLeft: () => <BackLeftArrow />,
        }}
      />
      <Stack.Screen
        name='ReviewDetails'
        component={ReviewDetailsScreen}
        options={{
          title: 'Review details',
          headerLeft: () => <BackLeftArrow />,
        }}
      />
    </Stack.Navigator>
  );
}
