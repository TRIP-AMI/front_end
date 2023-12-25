import { SurveyData, SurveyId } from '@/types/surveyData';

const surveyData = new Map<SurveyId, SurveyData>([
  [
    1,
    {
      id: 1,
      question: `How did you get to know TRIPAMI?`,
      description: `(Single selection)`,
      choices: [
        `Google Recommendation of acquaintances`,
        `A different routine`,
        `Advertising/Social Media`,
        `App Store`,
      ],
      type: 'SINGLE',
    },
  ],
  [
    2,
    {
      id: 2,
      question: `Which part of TRIPAMI were you most satisfied with?`,
      description: `(Multiple selections)`,
      choices: [
        `There's a variety of programs.`,
        `The desired program search works well.`,
        `Have detailed information about the program.`,
        `I don't know.`,
      ],
      type: 'MULTIPLE',
    },
  ],
  [
    3,
    {
      id: 3,
      question: `Which part of TRIPAMI were you most dissatisfied with?`,
      description: `(Multiple selections)`,
      choices: [
        `The programs don't vary.`,
        `I can't search for the program I want.`,
        `I don't have enough program information.`,
        `I don't know.`,
      ],
      type: 'MULTIPLE',
    },
  ],
  [
    4,
    {
      id: 4,
      question: `Did TRIPAMI help you plan your trip?`,
      description: `(Single selection)`,
      choices: [
        `It helped me a lot.`,
        `It helped me a little bit.`,
        `I'm not sure.`,
        `It wasn't good.`,
        `It wasn't that good.`,
      ],
      type: 'SINGLE',
    },
  ],
  [
    5,
    {
      id: 5,
      question: `Please let me know what we can improve on TRIPAMI!`,
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

export default surveyData;
