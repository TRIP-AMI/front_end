import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CloseButton from '@/components/atoms/Button/CloseButton';
import JoinTermsScreen from '@/screens/Terms/JoinTermsScreen';
import Fonts from '@/styles/typography';

export type JoinTermsScreenType = 'Age' | 'Privacy' | 'Terms' | 'Marketing';

export type JoinTermsProps = {
  en: string;
  ko: string;
};

export type TermsStackParamList = {
  [K in JoinTermsScreenType]: JoinTermsProps;
};

const Stack = createNativeStackNavigator<TermsStackParamList>();

export default function TermsStack() {
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerBackVisible: false,
          headerRight: () => <CloseButton onPress={() => goBack()} />,
          headerShadowVisible: false,
          headerTitleStyle: Fonts.header.title,
        }}
      >
        <Stack.Screen
          name='Age'
          component={JoinTermsScreen}
          options={{ title: 'Age Consent' }}
        />
        <Stack.Screen
          name='Privacy'
          component={JoinTermsScreen}
          options={{ title: 'Privacy Policy' }}
        />
        <Stack.Screen
          name='Terms'
          component={JoinTermsScreen}
          options={{ title: 'Tems of Service' }}
        />
        <Stack.Screen
          name='Marketing'
          component={JoinTermsScreen}
          options={{ title: 'Marketing Agreements' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
