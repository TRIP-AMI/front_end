import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  Text,
} from 'react-native';

interface InputProps extends TextInputProps {
  textarea?: boolean;
  error?: string;
}

export default function BasicInput({ textarea, error, ...props }: InputProps) {
  const textareaStyle = textarea ? styles.textarea : undefined;
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, textareaStyle]}
        placeholderTextColor='#B9B9B9'
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        multiline={textarea}
      />

      {/* error text */}
      {error && <Text style={styles.error}>{error}</Text>}

      {/* 최대 갯수 설정시 사용 */}
      {props.autoComplete !== 'password' && props.maxLength && (
        <View style={{ flexDirection: 'row-reverse' }}>
          <Text style={{ color: '#B9B9B9', fontSize: 13 }}>
            {props.value?.length}/{props.maxLength}
          </Text>
        </View>
      )}
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
    marginTop: 10,
    color: 'red',
  },
});
