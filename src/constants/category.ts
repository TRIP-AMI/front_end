/* eslint-disable import/extensions */

// icon
import { ImageSourcePropType } from 'react-native';
import IconActivity from '@/assets/icons/category/Activity.png';
import IconRestaurant from '@/assets/icons/category/Restaurant.png';
import IconTourism from '@/assets/icons/category/Tourism.png';
import IconPhoto from '@/assets/icons/category/Photo.png';
import IconKPOP from '@/assets/icons/category/K-POP.png';
import IconShopping from '@/assets/icons/category/Shopping.png';

// img
import ImgActivity from '@/assets/images/catagoryBanner/ActivityBanner.png';
import ImgRestaurant from '@/assets/images/catagoryBanner/RestaurantBanner.png';
import ImgTourism from '@/assets/images/catagoryBanner/TourismBanner.png';
import ImgPhoto from '@/assets/images/catagoryBanner/PhotoBanner.png';
import ImgKPOP from '@/assets/images/catagoryBanner/kpopBanner.png';
import ImgShopping from '@/assets/images/catagoryBanner/ShoppingBanner.png';

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

export type CategoryBannerImgType = {
  [key in Category]: ImageSourcePropType;
};

export const CategoryBannerImg: CategoryBannerImgType = {
  ACTIVITY: ImgActivity,
  RESTAURANT: ImgRestaurant,
  TOURISM: ImgTourism,
  PHOTO: ImgPhoto,
  KPOP: ImgKPOP,
  SHOPPING: ImgShopping,
};

export type CategoryTagListObjectType = {
  [key in Category]: { id: number; label: string }[];
};

export const CategoryTagListObject: CategoryTagListObjectType = {
  ACTIVITY: [
    { id: 1, label: 'Christmas' },
    { id: 2, label: 'Sports' },
    { id: 3, label: 'Exercise' },
    { id: 4, label: 'Ski' },
    { id: 5, label: 'Camping' },
  ],
  RESTAURANT: [
    { id: 1, label: 'Chicken' },
    { id: 2, label: 'Bulgogi' },
    { id: 3, label: 'Dduckbokki' },
    { id: 4, label: 'Beer' },
    { id: 5, label: 'Jjimdak' },
  ],
  TOURISM: [
    { id: 1, label: 'Namsan Tower' },
    { id: 2, label: 'Sports' },
    { id: 3, label: 'Gyeongbokgung' },
    { id: 4, label: 'Han River' },
  ],
  PHOTO: [
    { id: 1, label: 'Night view' },
    { id: 2, label: 'Lotte Tower' },
    { id: 3, label: 'Nature' },
    { id: 4, label: 'City' },
    { id: 5, label: 'sea' },
  ],
  KPOP: [
    { id: 1, label: 'Concert' },
    { id: 2, label: 'BTS' },
    { id: 3, label: 'BLACKPINK' },
    { id: 4, label: 'Busking' },
    { id: 5, label: 'Band' },
  ],
  SHOPPING: [
    { id: 1, label: 'Market' },
    { id: 2, label: 'DDP' },
    { id: 3, label: 'Hongdae' },
    { id: 4, label: 'Myeongdong' },
    { id: 5, label: 'Gangnam' },
  ],
};
