import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, StyleSheet, Pressable, Text } from 'react-native';
import BasicInput from '@components/atoms/Input/BasicInput';
import useLoginHook from '@/hooks/loginHook';
import BasicButton from '@/components/atoms/Button/BasicButton';
import Colors from '@/styles/colors';
import CheckBox from '@/components/atoms/Button/CheckBox';
import modalState from '@/utils/recoil/modal';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const { onAutoLogin, onLogin } = useLoginHook();
  const setModal = useSetRecoilState(modalState);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,20}$/;

  useEffect(() => {
    // console.log('email: ', email);
    // console.log('pw: ', password);
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
        <View style={styles.inputBox}>
          <BasicInput
            style={styles.input}
            autoComplete='email'
            value={email}
            onChangeText={setEmail}
            placeholder='E-mail'
            placeholderTextColor={Colors.fontGray05}
            autoCorrect={false}
            autoCapitalize='none'
            autoFocus
          />
        </View>
        <View style={styles.inputBox}>
          <BasicInput
            style={styles.input}
            autoComplete='password'
            value={password}
            onChangeText={setPassword}
            placeholder='Password'
            placeholderTextColor={Colors.fontGray05}
            secureTextEntry
            maxLength={20}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.checkbox}>
            <CheckBox isChecked={isChecked} setChecked={setChecked} />
          </View>
          <View>
            <Text style={styles.text}>Remember me</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <BasicButton onPress={onLoginPress} content='Login' round />
      </View>
      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={() => console.log('Navigate to ForgotPasswordScreen')}
        >
          <Text style={styles.footerText}>Forgot password?</Text>
        </Pressable>
        <Text style={[styles.footerText, { color: Colors.lineGray04 }]}>|</Text>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={() => console.log('Navigate to JoinScreen')}
        >
          <Text style={styles.footerText}>Join</Text>
        </Pressable>
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
  inputBox: {
    paddingVertical: 6,
  },
  input: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
    letterSpacing: -0.28,
  },
  checkbox: {
    marginTop: 10,
  },
  text: {
    color: Colors.fontGray02,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 30,
    letterSpacing: -0.28,
    paddingTop: 6,
    paddingHorizontal: 8,
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
  pressed: {
    opacity: 0.5,
  },
});
