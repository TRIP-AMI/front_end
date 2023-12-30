import { Control, useController } from 'react-hook-form';
import { ProgramCourse } from '@/types/program/ProgramCourse';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useProgramCourse = (control: Control<any>) => {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'programCourse' });

  const onChangeHandlers = {
    requiredTimeValueChange: (id: string, v: string) => {
      const copy = [...value];
      const findItem: ProgramCourse = copy.find((program) => program.id === id);
      findItem.time = v;
      onChange(copy);
    },
    programImgUrlChange: (id: string, url: string) => {
      const copy = [...value];
      const findItem: ProgramCourse = copy.find((program) => program.id === id);
      findItem.imgInfo.imgUrl = url;
      onChange(copy);
    },
    programImgTitleChange: (id: string, v: string) => {
      const copy = [...value];
      const findItem: ProgramCourse = copy.find((program) => program.id === id);
      findItem.imgInfo.title = v;
      onChange(copy);
    },
    programImgSubTitleChange: (id: string, v: string) => {
      const copy = [...value];
      const findItem: ProgramCourse = copy.find((program) => program.id === id);
      findItem.imgInfo.subTitle = v;
      onChange(copy);
    },
    programDistanceChange: (id: string, v: string) => {
      const copy = [...value];
      const findItem: ProgramCourse = copy.find((program) => program.id === id);
      findItem.distance = v;
      onChange(copy);
    },
    programWalkingTimeChange: (id: string, v: string) => {
      const copy = [...value];
      const findItem: ProgramCourse = copy.find((program) => program.id === id);
      findItem.walkingTime = v;
      onChange(copy);
    },
    programCarTimeChange: (id: string, v: string) => {
      const copy = [...value];
      const findItem: ProgramCourse = copy.find((program) => program.id === id);
      findItem.carTime = v;
      onChange(copy);
    },
  };

  const addProgram = () => {
    onChange([...value, new ProgramCourse(`${value.length}`)]);
  };

  const deleteProgram = (id: string) => {
    onChange(value.filter((program: ProgramCourse) => program.id !== id));
  };

  const lineShowCheck = (i: number) => i !== value.length - 1;

  return {
    value,
    onChangeHandlers,
    addProgram,
    deleteProgram,
    lineShowCheck,
  };
};

export default useProgramCourse;
