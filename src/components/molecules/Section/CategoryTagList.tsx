import { ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import PressHashTag from '@/components/atoms/Tag/PressHashTag';
import Spacing from '@/styles/spacing';
import { RootStackParamList } from '@/navigations';
import { CategoryTagListObject } from '@/constants/category';

function CategoryTagList() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Category'>>();
  const { categoryId } = params;
  return (
    <ScrollView
      horizontal
      style={{ paddingVertical: 10, paddingLeft: Spacing.IOS392Margin }}
    >
      {CategoryTagListObject[categoryId].map((tag) => {
        return (
          <PressHashTag
            key={tag.id}
            label={`${tag.label}`}
            style={{ marginRight: 5 }}
          />
        );
      })}
    </ScrollView>
  );
}

export default CategoryTagList;
