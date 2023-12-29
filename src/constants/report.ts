import { ReportOptionType } from '@/types/ReportTypes';

const REPORT_OPTIONS: ReportOptionType[] = [
  {
    id: 1,
    title: `There is inaccurate or incorrect\ninformation.`,
    question: `Please tell us about inaccurate\nor incorrect information.`,
  },
  {
    id: 2,
    title: `AMI has a problem.`,
    question: `Please tell us if there is\na problem with AMI.`,
  },
  {
    id: 3,
    title: `It's a fraud.`,
    question: `Please tell us about the\nfraudulent situation.`,
  },
  {
    id: 4,
    title: `This is unpleasant.`,
    question: `Please tell us about an\nunpleasant experience.`,
  },
  { id: 5, title: `etc.`, question: `Please let us know\nthe other reports.` },
];

export default REPORT_OPTIONS;
