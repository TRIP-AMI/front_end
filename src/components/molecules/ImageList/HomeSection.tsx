import { View, StyleSheet, FlatList, Text } from 'react-native';
import SectionItem, {
  SectionItemProps,
} from '@components/atoms/Image/SectionItem';

type HomeSectionProps = {
  section: {
    title: string;
    data: SectionItemProps[];
  };
};

export default function HomeSection({ section }: HomeSectionProps) {
  return (
    <View>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      <FlatList
        data={section.data}
        renderItem={({ item }) => <SectionItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});
