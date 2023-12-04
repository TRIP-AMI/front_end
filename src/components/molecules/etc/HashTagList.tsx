import { FlatList, StyleSheet, View } from 'react-native';
import Spacing from '@styles/spacing';
import HashTag from '@components/atoms/Tag/HashTag';

function HashTagList({ data }: { data: string[] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <HashTag style={styles.hashTag}>#{item}</HashTag>
        )}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: Spacing.IOS392Margin,
  },
  hashTag: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 13,
  },
});

export default HashTagList;
