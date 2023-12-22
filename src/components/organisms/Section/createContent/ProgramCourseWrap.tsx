import { Control, useController } from 'react-hook-form';
import { View, StyleSheet, Pressable } from 'react-native';
import { ProgramCourse } from '@hooks/uploadHook';
import { FontAwesome5, Fontisto, Octicons } from '@expo/vector-icons';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';
import ContentCreateTimeInput from '@/components/molecules/Input/ContentCreateTimeInput';
import ProgramImgUpload from '@/components/atoms/Image/ProgramImgUpload';
import NumberInCircle from '@/components/atoms/\bBadge/NumberInCircle';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';

export default function ProgramCourseWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'programCourse' });

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
                <View
                  key={program.id}
                  style={{
                    position: 'relative',
                    flexDirection: 'row',
                    marginBottom: 30,
                  }}
                >
                  {/* line */}
                  <View style={{ paddingTop: 4, marginRight: 15 }}>
                    <NumberInCircle num={index + 1} />
                    {lineShowCheck(index) && (
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
                    )}
                  </View>
                  {/* content */}
                  <View style={{ flexShrink: 1, width: '100%' }}>
                    {/* top */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <ContentCreateTimeInput text='hours (Required Time)' />
                      {index !== 0 && (
                        <Pressable
                          onPress={() => {
                            deleteProgram(program.id);
                          }}
                        >
                          <Octicons
                            name='x-circle-fill'
                            size={18}
                            color='#ccc'
                          />
                        </Pressable>
                      )}
                    </View>
                    {/* mid */}
                    <View style={styles.midWrap}>
                      <ProgramImgUpload initialState={program.imgInfo.imgUrl} />
                      <View style={{ marginVertical: 8 }}>
                        <BasicInput
                          placeholder='Place title (no more than 30)'
                          style={{ fontSize: 12 }}
                        />
                      </View>
                      <BasicInput
                        placeholder='Location exact location (no more than 50)'
                        style={{ fontSize: 12 }}
                      />
                    </View>
                    {/* bottom */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <ContentCreateTimeInput text='km' />
                      <ContentCreateTimeInput
                        text='minutes'
                        icon={
                          <FontAwesome5
                            name='walking'
                            size={16}
                            color='#7A7A7A'
                          />
                        }
                      />
                      <ContentCreateTimeInput
                        text='minutes'
                        icon={<Fontisto name='car' size={16} color='#7A7A7A' />}
                      />
                    </View>
                  </View>
                </View>
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
  midWrap: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: Colors.second,
    borderRadius: 5,
  },
});
