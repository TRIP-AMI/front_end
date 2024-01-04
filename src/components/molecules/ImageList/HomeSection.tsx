import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import BasicItem from '@/types/basicItem';
import BasicProductItem from '../Item/BasicProductItem';
import Spacing from '@/styles/spacing';
import { HomeProgramSectionId } from '@/types/Literal/home';
import { RootStackNavigationProp } from '@/navigations';

type HomeProgramSectionProps = {
  section: {
    id: HomeProgramSectionId;
    title: string;
    data: BasicItem[];
  };
};

export default function HomeProgramSection({
  section,
}: HomeProgramSectionProps) {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const onMorePress = () => {
    navigate('ProductList', {
      listId: section.id,
      title: section.title,
    });
  };
  return (
    <View>
      <SectionDividerBar style={{ marginVertical: 15 }} />
      {/* head */}
      <View style={styles.sectionHeaderWrap}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
        <Pressable>
          <Text style={styles.sectionHeaderTextMoreText} onPress={onMorePress}>
            More
          </Text>
        </Pressable>
      </View>
      {/* content list */}
      <FlatList
        data={section.data}
        renderItem={({ item }) => <BasicProductItem basicItem={item} />}
        keyExtractor={(item) => `${item.itemId}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        style={{ paddingLeft: Spacing.IOS392Margin }}
        horizontal
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sectionWrap: {
    paddingHorizontal: Spacing.IOS392Margin,
  },
  sectionHeaderWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: Spacing.IOS392Margin,
  },
  sectionHeaderText: {
    color: '#161616',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 18,
    lineHeight: 22,
  },
  sectionHeaderTextMoreText: {
    color: '#77787A',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    lineHeight: 30,
  },
});
