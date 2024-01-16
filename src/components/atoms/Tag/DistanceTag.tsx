import { ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';

function DistanceTag({ dist }: { dist: ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tag}>{dist}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#D2D2D2',
    marginRight: 6.95,
  },
  tag: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.36,
    marginHorizontal: 7,
    marginVertical: 2,
  },
});

export default DistanceTag;
