import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import CloseButton from '@/components/atoms/Button/CloseButton';
import useModalHook from '@/hooks/modalHook';
import CreateNameScreen from '@/screens/CreateNameScreen';
import CreatePasswordScreen from '@/screens/CreatePasswordScreen';
import EmailAuthScreen from '@/screens/EmailAuthScreen';
import JoinScreen from '@/screens/JoinScreen';
import LoginScreen from '@/screens/LoginScreen';
import SelectProfileScreen from '@/screens/SelectProfileScreen';
import Fonts from '@/styles/typography';

export type CreatePasswordProps = {
  mode: 'CREATE' | 'RESET';
  nickname?: string;
  email: string;
  agreedMarketing?: boolean;
};

export type CreateNameProps = {
  email: string;
  agreedMarketing: boolean;
};

export type EmailAuthProps = {
  mode: 'JOIN' | 'FIND_PW';
  optionalChecked?: boolean;
};
// 유저 정보 prop으로 받기

export type SelectProfileProps = {
  nickname: string;
  imgUrl: string;
};

export type AuthStackParamList = {
  Login: undefined;
  SelectProfile: SelectProfileProps;
  Join: undefined;
  JoinAuth: EmailAuthProps;
  CreateName: CreateNameProps;
  CreatePassword: CreatePasswordProps;
  FindPassword: EmailAuthProps;
  ResetPassword: CreatePasswordProps;
};

export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStack() {
  const { setModalName } = useModalHook();
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator>
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
        <Stack.Screen name='CreatePassword' component={CreatePasswordScreen} />
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
        <Stack.Screen name='ResetPassword' component={CreatePasswordScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AuthStack;
// TODO: 타입 정리
