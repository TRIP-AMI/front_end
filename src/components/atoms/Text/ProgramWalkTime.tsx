import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ProgramWalkTime({ walkingTime }: { walkingTime: ReactNode }) {
  return (
    <View style={styles.container}>
      <Ionicons name='walk' size={15} color='#7A7A7A' />
      <Text style={styles.text}>{walkingTime}분</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6.95,
  },
  text: {
    color: '#7A7A7A',
    fontSize: 13,
    fontFamily: 'Pretendard-Regular',
    letterSpacing: -0.39,
  },
});

export default ProgramWalkTime;
