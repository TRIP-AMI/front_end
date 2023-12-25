export type SurveyId = 1 | 2 | 3 | 4 | 5 | 6;

export type SurveyData = {
  id: SurveyId;
  question: string;
  description: string;
  choices: string[];
  type: 'SINGLE' | 'MULTIPLE' | 'TEXT' | 'RATING';
};
