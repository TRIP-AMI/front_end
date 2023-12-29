export type Category =
  | 'ACTIVITY'
  | 'RESTAURANT'
  | 'TOURISM'
  | 'PHOTO'
  | 'KPOP'
  | 'SHOPPING';

export const CategoryList: { id: Category; label: string }[] = [
  { id: 'ACTIVITY', label: 'Activity' },
  { id: 'RESTAURANT', label: 'Restaurant' },
  { id: 'TOURISM', label: 'Tourism' },
  { id: 'PHOTO', label: 'Photo' },
  { id: 'KPOP', label: 'K-POP' },
  { id: 'SHOPPING', label: 'Shopping' },
];
