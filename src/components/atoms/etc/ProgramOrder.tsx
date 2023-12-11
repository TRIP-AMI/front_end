import { StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';
import Colors from '@styles/colors';

function ProgramOrder({ order }: { order: ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{order}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 23,
    height: 23,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.42,
    textAlign: 'center',
  },
});

export default ProgramOrder;
