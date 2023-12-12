import { Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

export default function BasicModalText({ content }: { content: string }) {
  return <Text style={styles.text}>{content}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    color: Colors.fontGray01,
  },
});
