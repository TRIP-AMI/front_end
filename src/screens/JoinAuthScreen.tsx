import { Text, View, StyleSheet } from 'react-native';
import {
  EmailInput,
  PasswordInput,
} from '@/components/molecules/Input/LoginInput';
import useLoginInput from '@/hooks/loginInputHook';

export default function JoinAuthScreen() {
  const { email, setEmail, password, setPassword } = useLoginInput();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please enter your email</Text>
      <View style={styles.inputContainer}>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    paddingVertical: 40,
  },
  inputContainer: {},
});
