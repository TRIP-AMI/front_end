export type SurveyId = 1 | 2 | 3 | 4 | 5 | 6;

export type SurveyChoiceType = {
  id: number;
  content: string;
};

export type SurveyData = {
  id: SurveyId;
  question: string;
  description: string;
  choices: SurveyChoiceType[];
  type: 'SINGLE' | 'MULTIPLE' | 'TEXT' | 'RATING';
};
