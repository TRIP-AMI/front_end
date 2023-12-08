import { Text, StyleSheet } from 'react-native';

export default function MontMediumText({
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
});
