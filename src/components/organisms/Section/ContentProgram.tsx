import TextTitle from '@components/atoms/Text/TextTitle';
import { StyleSheet, View } from 'react-native';
import Spacing from '@styles/spacing';
import ContentProgramItem from '@components/molecules/Item/ContentProgramItem';
import { Spot } from '@/types/program/ProgramCourse';

function ContentProgram({ spots }: { spots: Spot[] }) {
  return (
    <View style={styles.container}>
      <TextTitle style={styles.title}>Program</TextTitle>
      <View style={styles.programContainer}>
        {spots.map((spot, idx) => (
          <ContentProgramItem
            key={spot.id}
            id={idx + 1}
            title={spot.title}
            content={spot.content}
            imgUrl={spot.imgUrl}
            requiredTime={spot.requiredTime}
            distance={spot.distance}
            transportWithTimes={spot.transportWithTimes}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.IOS392Margin,
    paddingVertical: 30,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
  },
  programContainer: {
    paddingTop: 15,
  },
});

export default ContentProgram;
