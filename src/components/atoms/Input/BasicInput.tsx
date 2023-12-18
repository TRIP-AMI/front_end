import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  Text,
} from 'react-native';
import Colors from '@/styles/colors';

interface InputProps extends TextInputProps {
  textarea?: boolean;
  error?: string;
  valid?: string;
}

export default function BasicInput({
  textarea,
  error,
  valid,
  ...props
}: InputProps) {
  const textareaStyle = textarea ? styles.textarea : undefined;
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={Colors.fontGray05}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          style={[styles.input, textareaStyle, props.style]}
          multiline={textarea}
        />
        {/* 최대 갯수 설정시 사용 */}
        {textarea && props.maxLength && (
          <View style={{ flexDirection: 'row-reverse' }}>
            <Text
              style={[styles.input, { fontSize: 13, color: Colors.fontGray07 }]}
            >
              {props.value?.length}/{props.maxLength}
            </Text>
          </View>
        )}
      </View>
      {/* error text */}
      {error && (
        <Text style={[styles.message, { color: Colors.fontRed01 }]}>
          {error}
        </Text>
      )}
      {/* valid text */}
      {!error && valid && (
        <Text style={[styles.message, { color: Colors.fontBlue01 }]}>
          {valid}
        </Text>
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
    borderColor: Colors.lineGray04,
    borderRadius: 5,
  },
  input: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 20,
    letterSpacing: -0.28,
  },
  textarea: {
    height: 130,
  },
  message: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
    letterSpacing: -0.24,
  },
});
