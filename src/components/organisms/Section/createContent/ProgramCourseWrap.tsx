import { Control, useController } from 'react-hook-form';
import { View, StyleSheet, Pressable } from 'react-native';
import { ProgramCourse, ProgramCourseImg } from '@hooks/uploadHook';
import { FontAwesome5, Fontisto, Octicons } from '@expo/vector-icons';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';
import ContentCreateTimeInput from '@/components/molecules/Input/ContentCreateTimeInput';
import ProgramImgUpload from '@/components/atoms/Image/ProgramImgUpload';
import NumberInCircle from '@/components/atoms/\bBadge/NumberInCircle';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';

function VerticalLine() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 27,
        alignSelf: 'center',
        width: 1,
        height: 283,
        backgroundColor: '#E3E3E3',
      }}
    />
  );
}

// program content ===================================================================
function TopContent({
  requiredTimeValue,
  requiredTimeValueChange,
  index,
  programId,
  deleteProgram,
}: {
  requiredTimeValue: string;
  requiredTimeValueChange: (id: string, value: string) => void;
  index: number;
  programId: string;
  deleteProgram: (id: string) => void;
}) {
  const onChangeText = (value: string) => {
    requiredTimeValueChange(programId, value);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ContentCreateTimeInput
        value={requiredTimeValue}
        onChangeText={onChangeText}
        text='hours (Required Time)'
      />
      {index !== 0 && (
        <Pressable
          onPress={() => {
            deleteProgram(programId);
          }}
        >
          <Octicons name='x-circle-fill' size={18} color='#ccc' />
        </Pressable>
      )}
    </View>
  );
}
function MidContent({
  imgInfo,
  urlChange,
  titleChange,
  subTitleChange,
}: {
  imgInfo: ProgramCourseImg;
  urlChange: (url: string) => void;
  titleChange: (value: string) => void;
  subTitleChange: (value: string) => void;
}) {
  return (
    <View style={styles.midWrap}>
      <ProgramImgUpload urlChange={urlChange} initialState={imgInfo.imgUrl} />
      <View style={{ marginVertical: 8 }}>
        <BasicInput
          value={imgInfo.title}
          onChangeText={titleChange}
          placeholder='Place title (no more than 30)'
          style={{ fontSize: 12 }}
        />
      </View>
      <BasicInput
        value={imgInfo.subTitle}
        onChangeText={subTitleChange}
        placeholder='Location exact location (no more than 50)'
        style={{ fontSize: 12 }}
      />
    </View>
  );
}
function BottomContent({
  distance,
  walkingTime,
  carTime,
  distanceChange,
  walkingTimeChange,
  carTimeChange,
}: {
  distance: string;
  walkingTime: string;
  carTime: string;
  distanceChange: (value: string) => void;
  walkingTimeChange: (value: string) => void;
  carTimeChange: (value: string) => void;
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <ContentCreateTimeInput
        value={distance}
        onChangeText={distanceChange}
        text='km'
      />
      <ContentCreateTimeInput
        value={walkingTime}
        onChangeText={walkingTimeChange}
        text='minutes'
        icon={<FontAwesome5 name='walking' size={16} color='#7A7A7A' />}
      />
      <ContentCreateTimeInput
        value={carTime}
        onChangeText={carTimeChange}
        text='minutes'
        icon={<Fontisto name='car' size={16} color='#7A7A7A' />}
      />
    </View>
  );
}

function ContentWrap({
  program,
  index,
  lineShowCheck,
  deleteProgram,
  requiredTimeValueChange,
  programImgUrlChange,
  programImgTitleChange,
  programImgSubTitleChange,
  programDistanceChange,
  programWalkingTimeChange,
  programCarTimeChange,
}: {
  program: ProgramCourse;
  index: number;
  lineShowCheck: (i: number) => boolean;
  deleteProgram: (id: string) => void;
  requiredTimeValueChange: (id: string, v: string) => void;
  programImgUrlChange: (id: string, v: string) => void;
  programImgTitleChange: (id: string, v: string) => void;
  programImgSubTitleChange: (id: string, v: string) => void;
  programDistanceChange: (id: string, v: string) => void;
  programWalkingTimeChange: (id: string, v: string) => void;
  programCarTimeChange: (id: string, v: string) => void;
}) {
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

// ===================================================================================

export default function ProgramCourseWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'programCourse' });

  const requiredTimeValueChange = (id: string, v: string) => {
    const copy = [...value];
    const findItem: ProgramCourse = copy.find((program) => program.id === id);
    findItem.time = v;
    onChange(copy);
  };

  const programImgUrlChange = (id: string, url: string) => {
    const copy = [...value];
    const findItem: ProgramCourse = copy.find((program) => program.id === id);
    findItem.imgInfo.imgUrl = url;
    onChange(copy);
  };

  const programImgTitleChange = (id: string, v: string) => {
    const copy = [...value];
    const findItem: ProgramCourse = copy.find((program) => program.id === id);
    findItem.imgInfo.title = v;
    onChange(copy);
  };

  const programImgSubTitleChange = (id: string, v: string) => {
    const copy = [...value];
    const findItem: ProgramCourse = copy.find((program) => program.id === id);
    findItem.imgInfo.subTitle = v;
    onChange(copy);
  };

  const programDistanceChange = (id: string, v: string) => {
    const copy = [...value];
    const findItem: ProgramCourse = copy.find((program) => program.id === id);
    findItem.distance = v;
    onChange(copy);
  };

  const programWalkingTimeChange = (id: string, v: string) => {
    const copy = [...value];
    const findItem: ProgramCourse = copy.find((program) => program.id === id);
    findItem.walkingTime = v;
    onChange(copy);
  };

  const programCarTimeChange = (id: string, v: string) => {
    const copy = [...value];
    const findItem: ProgramCourse = copy.find((program) => program.id === id);
    findItem.carTime = v;
    onChange(copy);
  };

  const addProgram = () => {
    onChange([...value, new ProgramCourse(`${value.length}`)]);
  };

  const deleteProgram = (id: string) => {
    onChange(value.filter((program: ProgramCourse) => program.id !== id));
  };

  const lineShowCheck = (i: number) => i !== value.length - 1;

  return (
    <View style={{ marginTop: 25 }}>
      <ContentInputWrap
        title='Program Course'
        subTitle='You can register up to five programs.'
        content={
          <View>
            {value.map((program: ProgramCourse, index: number) => {
              return (
                <ContentWrap
                  key={program.id}
                  program={program}
                  index={index}
                  lineShowCheck={lineShowCheck}
                  deleteProgram={deleteProgram}
                  requiredTimeValueChange={requiredTimeValueChange}
                  programImgUrlChange={programImgUrlChange}
                  programImgTitleChange={programImgTitleChange}
                  programImgSubTitleChange={programImgSubTitleChange}
                  programDistanceChange={programDistanceChange}
                  programWalkingTimeChange={programWalkingTimeChange}
                  programCarTimeChange={programCarTimeChange}
                />
              );
            })}

            {/* add */}
            {value.length < 5 && (
              <OutlinedButton content='Add' onPress={addProgram} />
            )}
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  programCourse: {
    position: 'relative',
    flexDirection: 'row',
    marginBottom: 30,
  },
  midWrap: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: Colors.second,
    borderRadius: 5,
  },
});
