import { Text, StyleSheet, Pressable } from 'react-native';
import Colors from '@styles/colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

function AmiScore({ score, title }: { score: number; title: string }) {
  const navigation = useNavigation<RootStackNavigationProp>();

  const pressHandler = () => {
    switch (title) {
      case 'Application details':
        return navigation.navigate('ApplicationDetails');
      default:
        return null;
    }
  };

  return (
    <Pressable style={styles.container} onPress={pressHandler}>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  score: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
    marginBottom: 1,
  },
  title: {
    color: Colors.fontGray05,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.24,
  },
});

export default AmiScore;
