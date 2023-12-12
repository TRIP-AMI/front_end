import { Text, StyleSheet, View } from 'react-native';

function BlackBadge({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
    paddingVertical: 3,
    paddingHorizontal: 9,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default BlackBadge;
