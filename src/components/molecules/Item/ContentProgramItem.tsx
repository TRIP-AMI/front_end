import { View, StyleSheet } from 'react-native';
import Colors from '@styles/colors';
import ProgramImg from '@components/atoms/Image/ProgramImg';
import ProgramText from '@components/atoms/Text/ProgramText';
import ProgramOrder from '@components/atoms/etc/ProgramOrder';
import Spacing from '@styles/spacing';
import ProgramTravelTime from '@components/molecules/Text/ProgramTravelTime';
import { Spot } from '@/types/program/ProgramCourse';

// TODO order 사이에 세로선 추가해야 함
function ContentProgramItem({
  id,
  title,
  imgUrl,
  content,
  requiredTime,
  distance,
  transportWithTimes,
}: Spot) {
  const totalTime = requiredTime.split(':').map(Number);
  const hours = totalTime[0] ? `${totalTime[0]}h` : '';
  const minutes = totalTime[1] ? ` ${totalTime[1]}m` : '';

  return (
    <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
      <View style={styles.container}>
        <View style={styles.order}>
          <ProgramOrder order={id} />
        </View>
        <View style={styles.textContainer}>
          <ProgramImg imageUrl={imgUrl} />
          <ProgramText
            location={`${title} (${hours}${minutes})`}
            detail={content}
          />
        </View>
      </View>
      <ProgramTravelTime
        distance={distance}
        walkingTime={transportWithTimes.WALK}
        carTime={transportWithTimes.CAR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  order: {
    alignSelf: 'center',
  },
  textContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.second,
    borderRadius: 5,
    marginLeft: 15,
  },
});

export default ContentProgramItem;
