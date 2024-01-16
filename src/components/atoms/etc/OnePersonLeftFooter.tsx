import { Text, View, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

export default function OnePersonLeftFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.highlight}>1 person</Text> is left on the earliest
        date!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    paddingVertical: 10,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 16,
    letterSpacing: -0.24,
    fontSize: 12,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'Montserrat-Bold',
  },
});
