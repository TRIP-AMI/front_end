import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';
import { useState } from 'react';

function SettingScreen() {
  const [isAppPushEnabled, setIsAppPushEnabled] = useState(false);
  const appPushToggleSwitch = () =>
    setIsAppPushEnabled((previousState) => !previousState);

  const [isUtilizeEnabled, setIsUtilizeEnabled] = useState(false);
  const utilizeToggleSwitch = () =>
    setIsUtilizeEnabled((previousState) => !previousState);

  // TODO react-native-paper의 ToggleButton도 확인해보기
  const settingValue = (title: string, value: string) => {
    switch (title) {
      case 'Home Page Country':
      case 'Version':
        return <Text style={styles.value}>{value}</Text>;
      case 'App Push Notification':
        return (
          <Switch
            value={isAppPushEnabled}
            onValueChange={appPushToggleSwitch}
            trackColor={{ true: '#FFFFFF' }}
            ios_backgroundColor='#FFFFFF'
            thumbColor={isAppPushEnabled ? Colors.primary : Colors.fontGray06}
          />
        );
      case 'Utilize marketing information':
        return (
          <Switch
            value={isUtilizeEnabled}
            onValueChange={utilizeToggleSwitch}
          />
        );
      default:
        return (
          <MaterialIcons
            name='arrow-forward-ios'
            size={15}
            color={Colors.fontGray03}
          />
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
          <View style={styles.subContainer}>
            <Text key={item.path} style={styles.text}>
              {item.title}
            </Text>
            {settingValue(item.title, item.value)}
          </View>
          {(index === 2 || index === 6) && (
            <Separator color={Colors.lineGray05} hei={8} marginVer={0} />
          )}
        </>
      ))}
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
