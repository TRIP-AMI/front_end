import { Text, StyleSheet } from 'react-native';

export default function ButtonText({
  content,
  color,
  small,
}: {
  content: string;
  color: string;
  small?: boolean;
}) {
  return (
    <Text style={[styles.text, { color }, small && styles.smallText]}>
      {content}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
  },
  smallText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
  },
});
