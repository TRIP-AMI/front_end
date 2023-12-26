import { FlatList, View, StyleSheet } from 'react-native';
import BulletListItem from '../Text/BulletListItem';

export default function BasicModalDetail({
  data,
}: {
  data: { key: string }[];
}) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <BulletListItem content={item.key} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    marginTop: 14,
  },
});
