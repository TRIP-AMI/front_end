import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import useLoginHook from '@/hooks/loginHook';
import BasicButton from '@/components/atoms/Button/BasicButton';
import Colors from '@/styles/colors';
import modalState from '@/utils/recoil/modal';
import TextButton from '@/components/atoms/Button/TextButton';
import LabeledCheckBox from '@/components/molecules/Toggle/LabeledCheckBox';
import {
  EmailInput,
  PasswordInput,
} from '@/components/molecules/Input/LoginInput';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const { onAutoLogin, onLogin } = useLoginHook();
  const setModal = useSetRecoilState(modalState);
  const [disabled, setDisabled] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,20}$/;

  useEffect(() => {
    if (!email || !password) {
      setDisabled(true);
    } else {
      setDisabled(false);
      console.log(`email: ${email}, password: ${password}`);
    }
  }, [email, password]);

  const onLoginPress = () => {
    if (!email.match(emailRegex) || !password.match(passwordRegex)) {
      return setModal({
        modalName: 'LOGIN_INVALID',
      });
    }
    return isChecked ? onAutoLogin() : onLogin();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.inputContainer}>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <LabeledCheckBox
          label='Remember me'
          isChecked={isChecked}
          setChecked={setChecked}
        />
      </View>
      <View style={styles.button}>
        {disabled ? (
          <BasicButton onPress={() => {}} content='Login' round disabled />
        ) : (
          <BasicButton onPress={onLoginPress} content='Login' round />
        )}
      </View>
      <View style={styles.footer}>
        <TextButton
          title='Forgot password?'
          onPress={() => console.log('Navigate to ForgotPasswordScreen')}
          style={styles.footerText}
        />
        <Text style={[styles.footerText, { color: Colors.lineGray04 }]}>|</Text>
        <TextButton
          title='Join'
          onPress={() => console.log('Navigate to JoinScreen')}
          style={styles.footerText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    marginTop: 34,
    paddingHorizontal: 50,
  },
  button: {
    paddingHorizontal: 50,
    marginVertical: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#A1A5AE',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
    paddingHorizontal: 8,
  },
});
