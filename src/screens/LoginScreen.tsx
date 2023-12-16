import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useLoginHook from '@/hooks/loginHook';
import BasicButton from '@/components/atoms/Button/BasicButton';
import Colors from '@/styles/colors';
import TextButton from '@/components/atoms/Button/TextButton';
import {
  EmailInput,
  PasswordInput,
} from '@/components/molecules/Input/LoginInput';
import LabeledCheckBox from '@/components/molecules/Toggle/LabeledCheckBox';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import useLoginInput from '@/hooks/loginInputHook';
import useModalHook from '@/hooks/modalHook';

export default function LoginScreen() {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const { email, password, setEmail, setPassword, emptyInput, invalidInput } =
    useLoginInput();
  const [isChecked, setChecked] = useState(false);
  const { onLogin } = useLoginHook();
  const { setModalName } = useModalHook();

  const onLoginPress = () => {
    return invalidInput ? setModalName('LOGIN_INVALID') : onLogin(isChecked);
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
        {emptyInput ? (
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
          onPress={() => navigate('Join')}
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
    height: 150,
    justifyContent: 'space-between',
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
