import { FlatList, View, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

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
            <View style={{}}>
              <Text style={styles.text}>{`\u2022 ${item.key}`}</Text>
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
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 20,
    color: Colors.fontGray02,
  },
});
