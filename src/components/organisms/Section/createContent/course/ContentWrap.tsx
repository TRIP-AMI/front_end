import { View, StyleSheet } from 'react-native';
import { ProgramCourse } from '@/types/program/ProgramCourse';
import NumberInCircle from '@/components/atoms/\bBadge/NumberInCircle';
import VerticalLine from './VerticalLine';
import TopContent from './TopContent';
import MidContent from './MidContent';
import BottomContent from './BottomContent';

export default function ContentWrap({
  program,
  index,
  lineShowCheck,
  deleteProgram,
  onChangeHandlers,
}: {
  program: ProgramCourse;
  index: number;
  lineShowCheck: (i: number) => boolean;
  deleteProgram: (id: string) => void;
  onChangeHandlers: {
    requiredTimeValueChange: (id: string, v: string) => void;
    programImgUrlChange: (id: string, v: string) => void;
    programImgTitleChange: (id: string, v: string) => void;
    programImgSubTitleChange: (id: string, v: string) => void;
    programDistanceChange: (id: string, v: string) => void;
    programWalkingTimeChange: (id: string, v: string) => void;
    programCarTimeChange: (id: string, v: string) => void;
  };
}) {
  const {
    requiredTimeValueChange,
    programImgUrlChange,
    programImgTitleChange,
    programImgSubTitleChange,
    programDistanceChange,
    programWalkingTimeChange,
    programCarTimeChange,
  } = onChangeHandlers;

  const urlChange = (v: string) => {
    programImgUrlChange(program.id, v);
  };
  const titleChange = (v: string) => {
    programImgTitleChange(program.id, v);
  };
  const subTitleChange = (v: string) => {
    programImgSubTitleChange(program.id, v);
  };
  const distanceChange = (v: string) => {
    programDistanceChange(program.id, v);
  };
  const walkingTimeChange = (v: string) => {
    programWalkingTimeChange(program.id, v);
  };
  const carTimeChange = (v: string) => {
    programCarTimeChange(program.id, v);
  };
  return (
    <View key={program.id} style={styles.programCourse}>
      {/* line */}
      <View style={{ paddingTop: 4, marginRight: 15 }}>
        <NumberInCircle num={index + 1} />
        {lineShowCheck(index) && <VerticalLine />}
      </View>
      {/* content */}
      <View style={{ flexShrink: 1, width: '100%' }}>
        <TopContent
          requiredTimeValue={program.time}
          requiredTimeValueChange={requiredTimeValueChange}
          index={index}
          programId={program.id}
          deleteProgram={deleteProgram}
        />
        <MidContent
          imgInfo={program.imgInfo}
          urlChange={urlChange}
          titleChange={titleChange}
          subTitleChange={subTitleChange}
        />
        <BottomContent
          distance={program.distance}
          distanceChange={distanceChange}
          walkingTime={program.walkingTime}
          walkingTimeChange={walkingTimeChange}
          carTime={program.carTime}
          carTimeChange={carTimeChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  programCourse: {
    position: 'relative',
    flexDirection: 'row',
    marginBottom: 30,
  },
});
