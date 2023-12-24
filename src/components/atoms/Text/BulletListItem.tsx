import { Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

export default function BulletListItem({ content }: { content: string }) {
  return <Text style={styles.text}>{`\u2022 ${content}`}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: Colors.fontGray03,
  },
});
