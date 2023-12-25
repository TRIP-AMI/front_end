import { SurveyData, SurveyId } from '@/types/surveyData';

const SURVEY_DATA = new Map<SurveyId, SurveyData>([
  [
    1,
    {
      id: 1,
      question: `How did you get\nto know TRIPAMI?`,
      description: `(Single seletion)`,
      choices: [
        { id: 1, content: `Recommendation of\nacquaintances` },
        { id: 2, content: `Advertising / Social Media` },
        { id: 3, content: `App Store` },
        { id: 4, content: `A different routine` },
      ],
      type: 'SINGLE',
    },
  ],
  [
    2,
    {
      id: 2,
      question: `Which part of TRIPAMI\nwere you most satisfied with?`,
      description: `(Multiple selections)`,
      choices: [
        { id: 1, content: `There's a variety of programs.` },
        { id: 2, content: `The desired program search\nworks well.` },
        { id: 3, content: `Have detailed information\nabout the program.` },
        { id: 4, content: `I don't know.` },
      ],
      type: 'MULTIPLE',
    },
  ],
  [
    3,
    {
      id: 3,
      question: `Which part of TRIPAMI\nwere you most dissatisfied with?`,
      description: `(Multiple selections)`,
      choices: [
        { id: 1, content: `The programs don't vary.` },
        { id: 2, content: `I can't search for the program\nI want.` },
        { id: 3, content: `I don't have enough program\ninformation.` },
        { id: 4, content: `I don't know.` },
      ],
      type: 'MULTIPLE',
    },
  ],
  [
    4,
    {
      id: 4,
      question: `Did TRIPAMI help you\nplan your trip?`,
      description: `(Single selection)`,
      choices: [
        { id: 1, content: `It helped me a lot.` },
        { id: 2, content: `It helped me a little bit.` },
        { id: 3, content: `I'm not sure.` },
        { id: 4, content: `It wasn't good.` },
        { id: 5, content: `It wasn't that good.` },
      ],
      type: 'SINGLE',
    },
  ],
  [
    5,
    {
      id: 5,
      question: `Please let me know what we can\nimprove on TRIPAMI!`,
      description: '',
      choices: [],
      type: 'TEXT',
    },
  ],
  [
    6,
    {
      id: 6,
      question: `Please score TRIPAMI!`,
      description: `Score the overall satisfaction\nyou felt using TRIPAMI!`,
      choices: [],
      type: 'RATING',
    },
  ],
]);

export default SURVEY_DATA;
