import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import UploadScreen from '@/screens/bottomNav/Upload/UploadScreen';
import BackLeftArrow from '@/components/molecules/Header/BackLeftArrow';
import CalendarScreen from '@/screens/bottomNav/Upload/Calendar/CalendarScreen';
import Fonts from '@/styles/typography';
import BackLeft from '@/components/molecules/Header/BackLeft';

export type CalendarProps = {
  availableDates: string[];
};

export type UploadStackParamList = {
  Upload: CalendarProps;
  Calendar: CalendarProps;
};

export type UploadStackNavigationProp =
  NativeStackNavigationProp<UploadStackParamList>;

const Stack = createNativeStackNavigator<UploadStackParamList>();

export default function UploadStack() {
  return (
    <Stack.Navigator
      initialRouteName='Upload'
      screenOptions={{
        headerTitleStyle: Fonts.header.title,
      }}
    >
      <Stack.Screen
        name='Upload'
        component={UploadScreen}
        options={{
          headerLeft: () => <BackLeftArrow />,
          title: 'Upload',
          headerTitle: 'Create Content',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{
          title: 'Available Dates',

          headerLeft: () => <BackLeft />,
        }}
      />
    </Stack.Navigator>
  );
}
