import { Text, StyleSheet } from 'react-native';

export default function ButtonText({ content }: { content: string }) {
  return <Text style={styles.text}>{content}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18, // TODO: 폰트 사이즈 수정 필요
    textAlign: 'center',
  },
});
