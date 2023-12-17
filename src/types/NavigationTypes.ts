import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type CreatePasswordProps = {
  nickname: string;
  email: string;
};

export type CreateNameProps = {
  email: string;
};

export type JoinAuthProps = {
  optionalChecked: boolean;
};

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
  Login: undefined;
  Join: undefined;
  JoinAuth: JoinAuthProps;
  CreateName: CreateNameProps;
  CreatePassword: CreatePasswordProps;
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
