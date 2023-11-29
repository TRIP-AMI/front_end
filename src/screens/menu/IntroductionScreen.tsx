import { View, Text, StyleSheet } from 'react-native';

export default function IntroductionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CultureX!</Text>
      <Text style={styles.subtitle}>하하하</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    margin: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    margin: 10,
  },
});
