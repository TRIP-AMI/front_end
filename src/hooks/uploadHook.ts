import { useForm } from 'react-hook-form';
import { Category } from '@/constants/category';
import { ProgramCourse } from '@/types/program/ProgramCourse';
import { ProgramCostType } from '@/types/program/ProgramCost';

export interface CreateContentBasicForm {
  title: string;
  explanation: string;
  category: Category[];
  hashtag: string;
  hashtagList: string[];
  meetingPoint: string;
  availableDates: string[];
  timeToMeet: {
    h: string;
    m: string;
  };
  recruitedPersons: number;
  email: string;
  programCourse: ProgramCourse[];
  programCost: string;
  programCostType: ProgramCostType;
}

const useUpload = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContentBasicForm>({
    defaultValues: {
      // baiscInfo
      title: '',
      explanation: '',
      category: [],
      hashtag: '',
      hashtagList: [],
      meetingPoint: '',
      availableDates: [],
      timeToMeet: {
        h: '',
        m: '',
      },
      recruitedPersons: 1,
      email: '',
      // Program Course Info
      programCourse: [new ProgramCourse('0')],
      // Program Cost
      programCost: '',
      programCostType: 'GUIDE',
    },
  });

  return {
    control,
    handleSubmit,
    errors,
  };
};

export default useUpload;
