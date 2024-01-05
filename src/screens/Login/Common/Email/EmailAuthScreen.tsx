import { View, StyleSheet } from 'react-native';
import {
  AuthCodeInput,
  EmailInput,
} from '@/components/molecules/Input/LoginInput';
import BasicButton from '@/components/atoms/Button/BasicButton';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import { EmailAuthProps } from '@/navigations/AuthStack/AuthStack';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import useAuthForm from '@/hooks/authFormHook';
import Colors from '@/styles/colors';

export default function EmailAuthScreen({
  route,
}: {
  route: { params: EmailAuthProps };
}) {
  const {
    isEmailSent,
    title,
    control,
    errors,
    timer,
    handleSubmit,
    onConfirmEmail,
    onCheckAuthCode,
    setTimer,
  } = useAuthForm({ mode: route.params.mode, params: route.params });

  return (
    <JoinLayout title={title}>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <EmailInput
            control={control}
            errorText={errors.email?.message}
            placeholder='Email Address'
          />
        </View>
        <View style={styles.button}>
          {isEmailSent ? (
            <OutlinedButton
              onPress={handleSubmit(onConfirmEmail)}
              content='Resend'
              customStyle={{
                paddingVertical: 14,
                borderColor: Colors.fontGray06,
              }}
            />
          ) : (
            <BasicButton
              onPress={handleSubmit(onConfirmEmail)}
              content='Confirm'
              small
              round
            />
          )}
        </View>
      </View>
      {isEmailSent && (
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <AuthCodeInput
              control={control}
              errorText={errors.authCode?.message}
              timer={timer}
              setTimer={setTimer}
            />
          </View>
          <View style={styles.button}>
            <BasicButton
              onPress={handleSubmit(onCheckAuthCode)}
              content='Confirm'
              small
              round
            />
          </View>
        </View>
      )}
    </JoinLayout>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  inputBox: {
    width: '75%',
  },
  touched: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '24.3%',
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: 'Montserrat-Regular',
  },
});
