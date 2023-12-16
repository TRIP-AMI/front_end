import { Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';

export function EmailInput({
  email,
  setEmail,
  placeholder,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}) {
  return (
    <BasicInput
      style={styles.input}
      value={email}
      autoComplete='username'
      onChangeText={setEmail}
      placeholder={placeholder || 'E-mail'}
      placeholderTextColor={Colors.fontGray05}
      autoCorrect={false}
      autoCapitalize='none'
      autoFocus
    />
  );
}

export function PasswordInput({
  password,
  setPassword,
  placeholder,
}: {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}) {
  return (
    <BasicInput
      style={styles.input}
      autoComplete='password'
      value={password}
      onChangeText={setPassword}
      placeholder={placeholder || 'Password'}
      placeholderTextColor={Colors.fontGray05}
      secureTextEntry
      maxLength={20}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
  },
});
