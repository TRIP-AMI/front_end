import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  Text,
} from 'react-native';

interface InputProps extends TextInputProps {
  touched?: boolean;
  error?: string;
}

export default function BasicInput({ touched, error, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor='#B9B9B9'
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export function BasicInputTextarea({ touched, error, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textarea}
        placeholderTextColor='#B9B9B9'
        multiline
        maxLength={500}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 5,
  },
  input: {},
  textarea: {
    height: 130,
  },
  error: {
    color: 'red',
  },
});
