import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import BasicButton from '@/components/atoms/Button/BasicButton';
import Colors from '@/styles/colors';
import TextButton from '@/components/atoms/Button/TextButton';
import {
  EmailInput,
  PasswordInput,
} from '@/components/molecules/Input/LoginInput';
import LabeledCheckBox from '@/components/molecules/Toggle/LabeledCheckBox';
import useModalHook from '@/hooks/modalHook';
import { ILoginInputs } from '@/types/FormTypes';
import useLoginHook from '@/hooks/loginHook';
import { AuthStackNavigationProp } from '@/navigations/AuthStack/AuthStack';

export default function LoginScreen() {
  const { onLogin, isLoading } = useLoginHook();
  const { navigate } = useNavigation<AuthStackNavigationProp>();
  const [isChecked, setChecked] = useState(false);
  const { setModalName } = useModalHook();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLoginPress = (data: ILoginInputs) => {
    return errors.email || errors.password
      ? setModalName('LOGIN_INVALID')
      : onLogin(isChecked, data);
  };

  const onCheck = () => {
    setChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <EmailInput control={control} />
          <PasswordInput control={control} autoFocus={false} />
          <LabeledCheckBox
            label='Remember me'
            isChecked={isChecked}
            onCheck={onCheck}
          />
        </View>
        <View style={styles.button}>
          <BasicButton
            onPress={handleSubmit(onLoginPress)}
            content='Login'
            round
            disabled={!!errors.email || !!errors.password || isLoading}
          />
        </View>
        <View style={styles.footer}>
          <TextButton
            title='Forgot password?'
            onPress={() => navigate('FindPassword', { mode: 'FIND_PW' })}
            style={styles.footerText}
          />
          <Text style={[styles.footerText, { color: Colors.lineGray04 }]}>
            |
          </Text>
          <TextButton
            title='Join'
            onPress={() => navigate('Join')}
            style={styles.footerText}
          />
        </View>
      </Pressable>
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
