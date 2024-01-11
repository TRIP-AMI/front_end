import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import CloseButton from '@/components/atoms/Button/CloseButton';
import BackLeftArrow from '@/components/molecules/Header/BackLeftArrow';
import ContentHeaderRightIcons from '@/components/molecules/Header/ContentHeaderRightIcons';
import ContentReportDetailScreen from '@/screens/Content/Report/ContentReportDetailScreen';
import ContentReportScreen from '@/screens/Content/Report/ContentReportScreen';
import ContentScreen from '@/screens/Content/ContentScreen';
import Fonts from '@/styles/typography';

export type ContentProps = {
  id: number;
};
export type ReportProps = {
  programId: number;
};
export type ReportDetailProps = ReportProps & {
  title: string;
};

export type ContentStackParamList = {
  Content: ContentProps;
  Report: ReportProps;
  ReportDetail: ReportDetailProps;
};

export type ContentStackNavigationProp =
  NativeStackNavigationProp<ContentStackParamList>;

const Stack = createNativeStackNavigator<ContentStackParamList>();

export default function ContentStack() {
  // TODO: goBack 없을 때 처리
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator initialRouteName='Content'>
      <Stack.Group
        screenOptions={{
          headerBackVisible: false,
          headerTitleStyle: Fonts.header.title,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name='Content'
          component={ContentScreen}
          options={{
            title: '',
            headerRight: () => <ContentHeaderRightIcons />,
            headerLeft: () => <BackLeftArrow />,
          }}
        />
        <Stack.Screen
          name='Report'
          component={ContentReportScreen}
          options={{
            title: '',
            headerRight: () => <CloseButton onPress={() => goBack()} />,
          }}
        />
        <Stack.Screen
          name='ReportDetail'
          component={ContentReportDetailScreen}
          options={{
            title: '',
            headerLeft: () => <BackLeftArrow />,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
