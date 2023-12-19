import { Control, useController } from 'react-hook-form';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';
import Regex from '@/constants/regex';

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
      required: 'Please enter your email address',
      pattern: {
        value: Regex.email,
        message: 'This is an invalid email address',
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
  rules?: Record<string, any>;
  reentered?: boolean;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: reentered ? 'reentered' : 'password',
    control,
    rules: reentered
      ? rules
      : {
          required: 'This is required',
          pattern: {
            value: Regex.password,
            message: 'It does not fit the password format.',
          },
          maxLength: {
            value: 20,
            message: 'Pleas enter no more than 20 characters.',
          },
        },
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
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'authCode',
    control,
    rules: {
      required: 'Please enter your authentication code',
    },
  });
  return (
    <BasicInput
      value={value}
      autoComplete='one-time-code'
      onChangeText={onChange}
      placeholder='Enter authentication number'
      placeholderTextColor={Colors.fontGray05}
      autoCorrect={false}
      autoCapitalize='none'
      error={errorText}
      style={{ fontFamily: 'Montserrat-Regular' }}
      autoFocus
    />
  );
}

export function NameInput({
  control,
  errorText,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'nickname',
    control,
    rules: {
      required: 'This is required',
      maxLength: {
        value: 12,
        message: 'No more than 12 characters',
      },
    },
  });
  return (
    <BasicInput
      value={value}
      autoComplete='nickname'
      onChangeText={onChange}
      placeholder='Enter a name'
      placeholderTextColor={Colors.fontGray05}
      autoCorrect={false}
      autoCapitalize='none'
      autoFocus
      maxLength={12}
      error={errorText}
      style={{ fontFamily: 'Montserrat-Regular' }}
    />
  );
}
