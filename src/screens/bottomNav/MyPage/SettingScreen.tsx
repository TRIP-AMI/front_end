import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';
import { useState } from 'react';
import ToggleButton from '@components/atoms/Button/ToggleButton';
import { useNavigation } from '@react-navigation/native';
import LogoutButton from '@components/molecules/Button/LogoutButton';
import { MyPageStackNavigationProp } from '@/navigations/MainBottomNavTab/MyPage/MyPageStack';

function SettingScreen() {
  const navigation = useNavigation<MyPageStackNavigationProp>();

  const [isAppPushEnabled, setIsAppPushEnabled] = useState(false);
  const appPushToggleSwitch = () =>
    setIsAppPushEnabled((previousState) => !previousState);

  const [isUtilizeEnabled, setIsUtilizeEnabled] = useState(false);
  const utilizeToggleSwitch = () =>
    setIsUtilizeEnabled((previousState) => !previousState);

  const settingValue = (path: string, title: string, value: string) => {
    switch (path) {
      case 'HomePageCountry':
      case 'Version':
        return (
          <View style={styles.subContainer}>
            <Text key={path} style={styles.text}>
              {title}
            </Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        );
      case 'AppPushNotification':
        return (
          <View style={styles.subContainer}>
            <Text key={path} style={styles.text}>
              {title}
            </Text>
            <ToggleButton
              value={isAppPushEnabled}
              onValueChange={appPushToggleSwitch}
            />
          </View>
        );
      case 'UtilizeMarketingInformation':
        return (
          <View style={styles.subContainer}>
            <Text key={path} style={styles.text}>
              {title}
            </Text>
            <ToggleButton
              value={isUtilizeEnabled}
              onValueChange={utilizeToggleSwitch}
            />
          </View>
        );
      case 'Logout':
        return null;
      default:
        // TODO path error
        return (
          <Pressable
            style={styles.subContainer}
            onPress={() => navigation.navigate(path)}
          >
            <Text key={path} style={styles.text}>
              {title}
            </Text>
            <MaterialIcons
              name='arrow-forward-ios'
              size={20}
              color={Colors.fontGray03}
            />
          </Pressable>
        );
    }
  };

  // TODO version 값 가져오기
  const settingList = [
    { title: 'Edit Profile', value: '', path: 'EditProfile' },
    { title: 'Account Management', value: '', path: 'AccountManagement' },
    { title: 'Home Page Country', value: 'ENG', path: 'HomePageCountry' },
    { title: 'Inquiry details', value: '', path: 'InquiryDetails' },
    { title: 'App Push Notification', value: '', path: 'AppPushNotification' },
    {
      title: 'Utilize marketing information',
      value: '',
      path: 'UtilizeMarketingInformation',
    },
    { title: 'Terms and conditions', value: '', path: 'TermsAndConditions' },
    { title: 'Version', value: '1.0.0', path: 'Version' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {settingList.map((item, index) => (
        <>
          {settingValue(item.path, item.title, item.value)}
          {(index === 2 || index === 6) && (
            <Separator color={Colors.lineGray05} hei={8} marginVer={0} />
          )}
        </>
      ))}
      <LogoutButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  subContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Spacing.IOS392Margin,
  },
  text: {
    color: Colors.fontGray03,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.32,
    lineHeight: 18,
  },
  value: {
    color: Colors.fontGray05,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.32,
    lineHeight: 18,
  },
});

export default SettingScreen;
