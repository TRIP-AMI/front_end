import { ScrollView } from 'react-native';
import HashTag from '@/components/atoms/Tag/HashTag';
import Spacing from '@/styles/spacing';

const categoryTagList = [
  { id: '11', label: 'Itaewon' },
  { id: '22', label: 'Itaewon' },
  { id: '33', label: 'Itaewon' },
  { id: '44', label: 'Itaewon' },
  { id: '55', label: 'Itaewon' },
];

function CategoryTagList() {
  return (
    <ScrollView
      horizontal
      style={{ paddingVertical: 10, paddingLeft: Spacing.IOS392Margin }}
    >
      {categoryTagList.map((tag) => {
        return (
          <HashTag key={tag.id} style={{ marginRight: 5 }}>
            #{tag.label}
          </HashTag>
        );
      })}
    </ScrollView>
  );
}

export default CategoryTagList;
