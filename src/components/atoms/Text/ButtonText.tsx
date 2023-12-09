import { Text, StyleSheet } from 'react-native';

export default function ButtonText({
  content,
  color,
}: {
  content: string;
  color: string;
}) {
  return <Text style={[styles.text, { color }]}>{content}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    paddingVertical: '3%',
  },
});
