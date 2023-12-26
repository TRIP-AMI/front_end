import { Control } from 'react-hook-form';
import { View } from 'react-native';
import { ProgramCourse } from '@/types/program/ProgramCourse';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import useProgramCourse from '@/hooks/programHook';
import { CreateContentBasicForm } from '@/hooks/uploadHook';
import ContentWrap from './course/ContentWrap';

// ===================================================================================

export default function ProgramCourseWrap({
  control,
}: {
  control: Control<CreateContentBasicForm, unknown>;
}) {
  const {
    value: programList,
    onChangeHandlers,
    addProgram,
    deleteProgram,
    lineShowCheck,
  } = useProgramCourse(control);

  return (
    <View style={{ marginTop: 25 }}>
      <ContentInputWrap
        title='Program Course'
        subTitle='You can register up to five programs.'
        content={
          <View>
            {programList.map((program: ProgramCourse, index: number) => {
              return (
                <ContentWrap
                  key={program.id}
                  program={program}
                  index={index}
                  lineShowCheck={lineShowCheck}
                  deleteProgram={deleteProgram}
                  onChangeHandlers={onChangeHandlers}
                />
              );
            })}

            {/* add */}
            {programList.length < 5 && (
              <OutlinedButton content='Add' onPress={addProgram} />
            )}
          </View>
        }
      />
    </View>
  );
}
