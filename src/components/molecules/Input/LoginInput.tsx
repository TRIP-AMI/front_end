import { Dispatch, SetStateAction } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';

export function EmailInput({
  email,
  setEmail,
  placeholder,
  error,
  errorText,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
}) {
  return (
    <View style={styles.container}>
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
      {error && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

export function PasswordInput({
  password,
  setPassword,
  placeholder,
  autoFocus,
  error,
  errorText,
  vaildText,
}: {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  autoFocus?: boolean;
  error?: boolean;
  errorText?: string;
  vaildText?: string;
}) {
  return (
    <View style={styles.container}>
      <BasicInput
        style={styles.input}
        autoComplete='password'
        value={password}
        onChangeText={setPassword}
        placeholder={placeholder || 'Password'}
        placeholderTextColor={Colors.fontGray05}
        secureTextEntry
        maxLength={20}
        autoFocus={autoFocus}
      />
      {error ? (
        <Text style={styles.error}>{errorText}</Text>
      ) : (
        vaildText && <Text style={styles.valid}>{vaildText}</Text>
      )}
    </View>
  );
}

// TODO: 스타일 수정
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
  },
  error: {
    color: '#F22222',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
    paddingHorizontal: 5,
  },
  valid: {
    color: 'skyblue',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
    paddingHorizontal: 5,
  },
});
