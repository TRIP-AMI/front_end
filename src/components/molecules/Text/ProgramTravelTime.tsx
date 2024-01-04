import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import ProgramWalkTime from '@components/atoms/Text/ProgramWalkTime';
import ProgramCarTime from '@components/atoms/Text/ProgramCarTime';
import DistanceTag from '@components/atoms/Tag/DistanceTag';

function ProgramTravelTime({
  distance,
  walkingTime,
  carTime,
}: {
  distance: ReactNode;
  walkingTime: ReactNode;
  carTime: ReactNode;
}) {
  return (
    <View style={styles.container}>
      <DistanceTag dist={distance} />
      <ProgramWalkTime walkingTime={walkingTime} />
      <ProgramCarTime carTime={carTime} />
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
