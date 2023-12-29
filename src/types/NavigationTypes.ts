import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// TODO: 타입 정리
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

export type JoinTemsScreen = 'Age' | 'Privacy' | 'Terms' | 'Marketing';

export type JoinTermsProps = {
  en: string;
  ko: string;
};

export type CalendarProps = {
  availableDates: string[];
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
  Age: JoinTermsProps;
  Privacy: JoinTermsProps;
  Terms: JoinTermsProps;
  Marketing: JoinTermsProps;
  JoinAuth: EmailAuthProps;
  CreateName: CreateNameProps;
  CreatePassword: CreatePasswordProps;
  FindPassword: EmailAuthProps;
  ResetPassword: CreatePasswordProps;
  Calendar: CalendarProps;
  ApplicationDetails: undefined;
  SelectProfile: SelectProfileProps;
  BookDetails: undefined;
  ReviewDetails: undefined;
  Setting: undefined;
  EditProfile: undefined;
  AccountManagement: undefined;
  InquiryDetails: undefined;
  TermsAndConditions: undefined;
};

export type BottomTabParamList = {
  Menu: undefined;
  Like: undefined;
  Home: undefined;
  Upload: CalendarProps;
  MyPage: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type BottomTabNavigationProp =
  NativeStackNavigationProp<BottomTabParamList>;
