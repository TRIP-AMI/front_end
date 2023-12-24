import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import Colors from '@/styles/colors';

export default function BasicModalText({
  content,
  style,
}: {
  content: string;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.text, style]}>{content}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    color: Colors.fontGray02,
    paddingHorizontal: 20,
  },
});
