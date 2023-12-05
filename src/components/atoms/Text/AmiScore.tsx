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
    fontSize: 16,
    color: colors.main,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 3,
  },
  title: {
    fontSize: 12,
    color: colors.moreGray,
    fontFamily: 'Montserrat-Regular',
  },
});

export default AmiScore;
