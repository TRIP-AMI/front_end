import { View, StyleSheet, Text } from 'react-native';
import Colors from '@/styles/colors';

export default function NumberInCircle({ num }: { num: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 23,
    aspectRatio: 1,
    position: 'relative',
    backgroundColor: Colors.primary,
    borderRadius: 100,
  },
  textStyle: {
    position: 'absolute',
    top: 3.5,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.42,
  },
});
