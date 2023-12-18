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
  const { field } = useController({
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
      value={field.value}
      autoComplete='username'
      onChangeText={field.onChange}
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
  compare,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorText?: string;
  placeholder?: string;
  autoFocus?: boolean;
  validText?: string;
  compare?: string;
}) {
  const { field } = useController({
    name: compare ? 'reentered' : 'password',
    control,
    rules: compare
      ? {
          required: 'This is required',
          validate: (value) => {
            return value === compare || 'The passwords do not match';
          },
        }
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
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder || 'Password'}
      placeholderTextColor={Colors.fontGray05}
      secureTextEntry
      maxLength={21}
      autoFocus={autoFocus}
      error={errorText}
      valid={!errorText && field.value && validText}
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
  const { field } = useController({
    name: 'authCode',
    control,
    rules: {
      required: 'Please enter your authentication code',
    },
  });
  return (
    <BasicInput
      value={field.value}
      autoComplete='one-time-code'
      onChangeText={field.onChange}
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
  const { field } = useController({
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
      value={field.value}
      autoComplete='nickname'
      onChangeText={field.onChange}
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
