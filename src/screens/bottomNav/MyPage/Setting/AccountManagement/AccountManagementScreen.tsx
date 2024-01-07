import { SafeAreaView, StyleSheet, View, Text, Pressable } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import Separator from '@components/atoms/etc/Separator';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MyPageStackNavigationProp } from '@/navigations/MainBottomNavTab/MyPage/MyPageStack';

function AccountManagementScreen() {
  const navigation = useNavigation<MyPageStackNavigationProp>();

  // TODO API mail 받아오기
  const mail = 'dfdfdfd@dfdf.com';

  const onPressWithdrawal = () => {
    navigation.navigate('Withdrawal');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>E-mail</Text>
          <Text style={styles.mail}>{mail}</Text>
        </View>
      </View>
      <Separator color={Colors.lineGray05} hei={8} marginVer={10} />
      <Pressable style={styles.buttonContainer} onPress={onPressWithdrawal}>
        <Text style={styles.title}>Withdrawal</Text>
        <MaterialIcons
          name='arrow-forward-ios'
          size={20}
          color={Colors.fontGray03}
        />
      </Pressable>
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
