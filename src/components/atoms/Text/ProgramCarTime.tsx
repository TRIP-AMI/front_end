import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

function ProgramCarTime({ carTime }: { carTime: ReactNode }) {
  return (
    <View style={styles.container}>
      <Fontisto name='car' size={15} color='#7A7A7A' />
      <Text style={styles.text}>{carTime}분</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#7A7A7A',
    fontSize: 13,
    fontFamily: 'Pretendard-Regular',
    letterSpacing: -0.39,
  },
});

export default ProgramCarTime;
