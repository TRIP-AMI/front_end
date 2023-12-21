import { useForm } from 'react-hook-form';

export interface CreateContentBasicForm {
  title: string;
  explanation: string;
  category: string[];
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
        h: '12',
        m: '30',
      },
      recruitedPersons: 1,
      email: '',
      // Program Course Info
      // Program Cost
    },
  });

  return {
    control,
    handleSubmit,
    errors,
  };
};

export default useUpload;
