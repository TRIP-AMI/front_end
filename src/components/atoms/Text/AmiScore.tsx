import { Text, View, StyleSheet } from 'react-native';
import colors from '@styles/colors';

function AmiScore({ score, title }: { score: number; title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  score: {
    color: colors.main,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
    marginBottom: 1,
  },
  title: {
    color: colors.contentLine,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.24,
  },
});

export default AmiScore;