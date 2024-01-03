/* eslint-disable import/extensions */
import IconActivity from '@/assets/icons/category/Activity.png';
import IconRestaurant from '@/assets/icons/category/Restaurant.png';
import IconTourism from '@/assets/icons/category/Tourism.png';
import IconPhoto from '@/assets/icons/category/Photo.png';
import IconKPOP from '@/assets/icons/category/K-POP.png';
import IconShopping from '@/assets/icons/category/Shopping.png';

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

export const CategoryFindLabel = (id: Category): string => {
  const category = CategoryList.find((item) => id === item.id);
  return category ? category.label : '';
};

export const CategoryIcon = {
  ACTIVITY: IconActivity,
  RESTAURANT: IconRestaurant,
  TOURISM: IconTourism,
  PHOTO: IconPhoto,
  KPOP: IconKPOP,
  SHOPPING: IconShopping,
};
