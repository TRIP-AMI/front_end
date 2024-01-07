import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import UploadScreen from '@/screens/bottomNav/Upload/UploadScreen';
import CalendarScreen from '@/screens/bottomNav/Upload/Calendar/CalendarScreen';
import LeftBackCenterTitle from '@/components/molecules/Header/LeftBackCenterTitle';

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
        header: (props) => {
          return (
            <LeftBackCenterTitle
              title={props.options.title || props.route.name}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name='Upload'
        component={UploadScreen}
        options={{
          title: 'Create Content',
        }}
      />
      <Stack.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{
          title: 'Available Dates',
        }}
      />
    </Stack.Navigator>
  );
}
