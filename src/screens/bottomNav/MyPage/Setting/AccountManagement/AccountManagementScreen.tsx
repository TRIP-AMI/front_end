import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import Separator from '@components/atoms/etc/Separator';
import { useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import SettiingSectionButton from '@/components/atoms/Button/SettingSectionButton';
import { RootStackNavigationProp } from '@/navigations';
import userState from '@/utils/recoil/user';

function AccountManagementScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { email } = useRecoilValue(userState);

  const onPressChangePassword = () => {
    navigation.navigate('ResetPassword');
  };

  const onPressWithdrawal = () => {
    navigation.navigate('MainBottomNavTab', {
      screen: 'MyPageStack',
      params: { screen: 'Withdrawal' },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>E-mail</Text>
          <Text style={styles.mail}>{email}</Text>
        </View>
      </View>
      <Separator color={Colors.lineGray05} hei={8} marginVer={10} />
      <SettiingSectionButton
        title='Change Password'
        onPress={onPressChangePassword}
      />
      <SettiingSectionButton title='Withdrawal' onPress={onPressWithdrawal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  textContainer: {
    paddingVertical: 15,
  },
  buttonContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Spacing.IOS392Margin,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 15,
  },
  mail: {
    color: Colors.fontGray05,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
    marginTop: 10,
  },
});

export default AccountManagementScreen;
