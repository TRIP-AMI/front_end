import { StyleSheet, Text } from 'react-native';

function TotalText({ total }: { total: number }) {
  return <Text style={styles.text}>{total} Total</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#77787A',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
});

export default TotalText;
