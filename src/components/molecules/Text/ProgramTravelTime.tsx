import { StyleSheet, View } from 'react-native';
import DistanceTag from '@components/atoms/Tag/DistanceTag';
import TravelTime from '@/components/atoms/Tag/TravelTiem';

function ProgramTravelTime({
  distance,
  walkingTime,
  carTime,
}: {
  distance: string;
  walkingTime: string;
  carTime: string;
}) {
  return (
    <View style={styles.container}>
      <DistanceTag dist={distance} />
      <TravelTime icon='WALK' travelTime={walkingTime} />
      <TravelTime icon='CAR' travelTime={carTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginLeft: 25,
  },
});

export default ProgramTravelTime;
