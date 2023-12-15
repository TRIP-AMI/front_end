import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet } from 'react-native';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';

export function EmailInput({
  email,
  setEmail,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) {
  return (
    <View style={styles.inputBox}>
      <BasicInput
        style={styles.input}
        value={email}
        autoComplete='username'
        onChangeText={setEmail}
        placeholder='E-mail'
        placeholderTextColor={Colors.fontGray05}
        autoCorrect={false}
        autoCapitalize='none'
        autoFocus
      />
    </View>
  );
}

export function PasswordInput({
  password,
  setPassword,
}: {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) {
  return (
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
  );
}

const styles = StyleSheet.create({
  inputBox: {
    paddingVertical: 6,
  },
  input: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
  },
});
