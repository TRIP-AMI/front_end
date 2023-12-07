import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  MenuBar: undefined;
  Service: undefined;
  BannerList: undefined;
  Notification: undefined;
  FAQ: undefined;
  Contact: undefined;
  Search: undefined;
  Content: undefined;
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
