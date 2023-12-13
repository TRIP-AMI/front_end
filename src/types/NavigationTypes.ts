import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  MenuBar: undefined;
  Service: undefined;
  BannerList: undefined;
  Notification: undefined;
  FAQ: undefined;
  Inquiry: undefined;
  Search: undefined;
  Content: undefined;
  Category: { title: string };
  ApplicationDetails: undefined;
};

export type BottomTabParamList = {
  Menu: undefined;
  Like: undefined;
  Home: undefined;
  Upload: undefined;
  MyPage: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
