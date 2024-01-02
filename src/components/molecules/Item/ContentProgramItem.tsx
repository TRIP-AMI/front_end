import { View, StyleSheet } from 'react-native';
import Colors from '@styles/colors';
import ProgramImg from '@components/atoms/Image/ProgramImg';
import ProgramText from '@components/atoms/Text/ProgramText';
import ProgramOrder from '@components/atoms/etc/ProgramOrder';
import Spacing from '@styles/spacing';
import { ReactNode } from 'react';
import ProgramTravelTime from '@components/molecules/Text/ProgramTravelTime';

// TODO order 사이에 세로선 추가해야 함
function ContentProgramItem({
  order,
  imageUrl,
  location,
  detail,
  travelTime,
}: {
  order: number;
  imageUrl: string;
  location: string;
  detail: string;
  // eslint-disable-next-line react/require-default-props
  travelTime?: {
    distance: ReactNode;
    walkingTime: ReactNode;
    carTime: ReactNode;
  } | null;
}) {
  return (
    <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
      <View style={styles.container}>
        <View style={styles.order}>
          <ProgramOrder order={order} />
        </View>
        <View style={styles.textContainer}>
          <ProgramImg imageUrl={imageUrl} />
          <ProgramText location={location} detail={detail} />
        </View>
      </View>
      {travelTime && true ? (
        <ProgramTravelTime
          distance={travelTime.distance}
          walkingTime={travelTime.walkingTime}
          carTime={travelTime.carTime}
        />
      ) : null}
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
