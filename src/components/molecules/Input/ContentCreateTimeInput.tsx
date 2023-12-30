import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { ReactNode } from 'react';
import Colors from '@/styles/colors';

interface ContentCreateTimeInputProps extends TextInputProps {
  text: string;
  icon?: ReactNode;
}

export default function ContentCreateTimeInput({
  text,
  icon,
  ...props
}: ContentCreateTimeInputProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* icon */}
      {icon && <View style={{ marginRight: 3 }}>{icon}</View>}
      {/* input */}
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        maxLength={2}
        placeholder='00'
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {/* description */}
      <Text style={{ marginLeft: 3, color: '#757575', fontSize: 12 }}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 42,
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.lineGray04,
    borderRadius: 5,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 15,
    letterSpacing: -0.28,
  },
});
