import { Fontisto, Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { Transportations } from '@/types/program/ProgramCourse';

type TravelTimeProps = {
  icon: Transportations;
  travelTime: string;
};

export default function TravelTime({ icon, travelTime }: TravelTimeProps) {
  const time = travelTime.split(':');
  const hours = time[0];
  const minutes = time[1];

  return (
    <View style={styles.container}>
      {icon === 'WALK' && <Ionicons name='walk' size={15} color='#7A7A7A' />}
      {icon === 'CAR' && (
        <Fontisto
          name='car'
          size={15}
          color='#7A7A7A'
          style={{ paddingRight: 3 }}
        />
      )}
      <Text style={styles.text}>{`${hours}h ${minutes}m`}</Text>
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
