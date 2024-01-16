import { Control, useController } from 'react-hook-form';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';
import Regex from '@/constants/regex';
import Timer from '@/components/molecules/etc/Timer';

// TODO: control any 타입 수정..
export function EmailInput({
  control,
  errorText,
  placeholder,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
  placeholder?: string;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'email',
    control,
    rules: {
      required: true,
      pattern: {
        value: Regex.email,
        message: 'It does not fit the email format.',
      },
    },
  });
  return (
    <BasicInput
      value={value}
      autoComplete='username'
      onChangeText={onChange}
      placeholder={placeholder || 'E-mail'}
      placeholderTextColor={Colors.fontGray05}
      autoCorrect={false}
      autoCapitalize='none'
      autoFocus
      error={errorText}
      style={placeholder ? { fontFamily: 'Montserrat-Regular' } : undefined}
      keyboardType='email-address'
    />
  );
}

export function PasswordInput({
  control,
  errorText,
  placeholder,
  autoFocus,
  validText,
  rules,
  reentered,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
  placeholder?: string;
  autoFocus?: boolean;
  validText?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules: Record<string, any>;
  reentered?: boolean;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: reentered ? 'reentered' : 'password',
    control,
    rules,
  });
  return (
    <BasicInput
      autoComplete='password'
      value={value}
      onChangeText={onChange}
      placeholder={placeholder || 'Password'}
      placeholderTextColor={Colors.fontGray05}
      secureTextEntry
      maxLength={21}
      autoFocus={autoFocus}
      error={errorText}
      valid={!errorText && value && validText}
    />
  );
}

export function AuthCodeInput({
  control,
  errorText,
  timer,
  setTimer,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'authCode',
    control,
  });
  return (
    <BasicInput
      value={value}
      autoComplete='one-time-code'
      onChangeText={onChange}
      placeholder='Authentication Number'
      placeholderTextColor={Colors.fontGray05}
      autoCorrect={false}
      autoCapitalize='none'
      error={errorText}
      style={{ fontFamily: 'Montserrat-Regular' }}
      autoFocus
      keyboardType='number-pad'
      timer={<Timer timer={timer} setTimer={setTimer} />}
    />
  );
}

export function NameInput({
  control,
  errorText,
  autoFocus,
  name,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
  autoFocus?: boolean;
  name?: string;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'nickname',
    control,
    rules: {
      required: true,
      maxLength: {
        value: 12,
        message: 'It does not fit the name format.',
      },
    },
  });
  return (
    <BasicInput
      value={value}
      autoComplete='nickname'
      onChangeText={onChange}
      placeholder={name || 'Enter a name'}
      placeholderTextColor={Colors.fontGray05}
      autoCorrect={false}
      autoCapitalize='none'
      autoFocus={autoFocus === undefined ? true : autoFocus}
      error={errorText}
      style={{ fontFamily: 'Montserrat-Regular' }}
    />
  );
}
