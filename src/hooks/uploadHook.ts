import { useForm } from 'react-hook-form';
import { Category } from '@/constants/category';

export type ProgramCostType = 'GUIDE' | 'ALL';

export type ProgramCourseImg = {
  imgUrl: string;
  title: string;
  subTitle: string;
};

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

export class ProgramCourse {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public id: string,
    public time: string = '',
    public distance: string = '',
    public walkingTime: string = '',
    public carTime: string = '',
    public imgInfo: ProgramCourseImg = {
      imgUrl: '',
      title: '',
      subTitle: '',
    },
    // eslint-disable-next-line no-empty-function
  ) {}
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
