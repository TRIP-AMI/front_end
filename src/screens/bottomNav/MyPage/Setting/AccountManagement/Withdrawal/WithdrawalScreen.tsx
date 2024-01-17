import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import useModalHook from '@hooks/modalHook';
import { useForm } from 'react-hook-form';
import ReviewInput from '@components/molecules/Input/ReviewInput';
import Spacing from '@styles/spacing';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '@styles/colors';
import WithdrawalFooter from '@components/molecules/Footer/WithdrawalFooter';
import { useRecoilValue } from 'recoil';
import userState, { UserType } from '@utils/recoil/user';
import { postWithdrawal } from '@services/module/withdrawal/withdrawal';

function WithdrawalScreen() {
  const userData = useRecoilValue<UserType>(userState);
  const { setModalName } = useModalHook();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { content: '' },
  });

  const onSubmit = (contentData: { content: string }) => {
    postWithdrawal({
      memberId: userData.memberId,
      reason: contentData.content,
    }).then(() => {});
    setModalName('WITHDRAWAL');
  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.img}>
              <SimpleLineIcons
                name='exclamation'
                size={51}
                color={Colors.fontGray05}
              />
            </View>
            <Text style={styles.text}>
              {`Are you sure you want\nto leave the account?`}
            </Text>
            <ReviewInput
              control={control}
              errorText={errors.content?.message}
              placeholder='Tell me the reason for your withdrawal.'
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              notRequiredContent
            />
          </View>
        </TouchableWithoutFeedback>
        <WithdrawalFooter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: Spacing.IOS392Margin,
    marginBottom: 60,
  },
  img: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.32,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WithdrawalScreen;
