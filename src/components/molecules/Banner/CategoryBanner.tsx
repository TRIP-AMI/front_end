import { RouteProp, useRoute } from '@react-navigation/native';
import { View, Image } from 'react-native';
import { CategoryBannerImg } from '@/constants/category';
import { RootStackParamList } from '@/navigations';

export default function CategoryBanner() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Category'>>();
  const { categoryId } = params;

  return (
    <View>
      <Image source={CategoryBannerImg[categoryId]} />
    </View>
  );
}
