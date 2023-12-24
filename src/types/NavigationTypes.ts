import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// TODO: 타입 정리
export type CreatePasswordProps = {
  mode: 'CREATE' | 'RESET';
  nickname?: string;
  email: string;
};

export type CreateNameProps = {
  email: string;
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
  JoinAuth: EmailAuthProps;
  CreateName: CreateNameProps;
  CreatePassword: CreatePasswordProps;
  FindPassword: EmailAuthProps;
  ResetPassword: CreatePasswordProps;
  Calendar: undefined;
  ApplicationDetails: undefined;
  SelectProfile: SelectProfileProps;
  BookDetails: undefined;
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
