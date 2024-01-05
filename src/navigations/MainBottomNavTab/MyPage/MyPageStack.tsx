import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { useRecoilState } from 'recoil';
import SettingScreen from '@screens/bottomNav/MyPage/Setting/SettingScreen';
import EditProfileScreen from '@screens/bottomNav/MyPage/Setting/EditProfile/EditProfileScreen';
import InquiryDetailsScreen from '@screens/bottomNav/MyPage/Setting/InquiryDetails/InquiryDetailsScreen';
import TermsAndConditionScreen from '@screens/bottomNav/MyPage/Setting/TermsAndConditions/TermsAndConditionScreen';
import AccountManagementScreen from '@screens/bottomNav/MyPage/Setting/AccountManagement/AccountManagementScreen';
import WithdrawalScreen from '@screens/bottomNav/MyPage/Setting/AccountManagement/Withdrawal/WithdrawalScreen';
import { View } from 'react-native';
import RightCloseX from '@components/molecules/Header/RightCloseX';
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
  Setting: undefined;
  EditProfile: undefined;
  AccountManagement: undefined;
  InquiryDetails: undefined;
  TermsAndConditions: undefined;
  Withdrawal: undefined;
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
      <Stack.Screen
        name='Setting'
        component={SettingScreen}
        options={{
          title: 'Settings',
          headerTitleStyle: Fonts.header.title,
          headerLeft: () => <BackLeftArrow />,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='EditProfile'
        component={EditProfileScreen}
        options={{
          title: 'Edit Profile',
          headerTitleStyle: Fonts.header.title,
          headerLeft: () => <BackLeftArrow />,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='AccountManagement'
        component={AccountManagementScreen}
        options={{
          title: 'Account Management',
          headerTitleStyle: Fonts.header.title,
          headerLeft: () => <BackLeftArrow />,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='InquiryDetails'
        component={InquiryDetailsScreen}
        options={{
          title: 'Inquiry details',
          headerTitleStyle: Fonts.header.title,
          headerLeft: () => <BackLeftArrow />,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='TermsAndConditions'
        component={TermsAndConditionScreen}
        options={{
          title: 'Terms and Conditions',
          headerTitleStyle: Fonts.header.title,
          headerLeft: () => <BackLeftArrow />,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='Withdrawal'
        component={WithdrawalScreen}
        options={{
          headerTitle: '',
          headerLeft: () => <View />,
          headerRight: () => <RightCloseX />,
        }}
      />
    </Stack.Navigator>
  );
}
