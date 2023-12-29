import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
import TotalText from '@components/atoms/Text/TotalText';
import Spacing from '@styles/spacing';
import ApplicationItemForAmi from '@components/molecules/Item/ApplicationItemForAmi';

const dummyApplicationData = [
  {
    id: 3,
    title: 'Itaewon Tour',
    subTitle: 'Restaurant - Cafe - Photo',
    price: '50,000 won',
    date: '12.10.2024',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
    tourist: [
      {
        id: 1,
        name: 'John',
        imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
      },
      {
        id: 2,
        name: 'John2',
        imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
      },
    ],
  },
  {
    id: 4,
    title: 'Seoul Tour',
    subTitle: 'Restaurant - Cafe - Photo',
    price: '50,000 won',
    date: '12.10.2023',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
    tourist: [
      {
        id: 1,
        name: 'John',
        imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
      },
      {
        id: 2,
        name: 'John2',
        imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
      },
    ],
  },
];

function ApplicationItemListForAmi() {
  const applicationData = dummyApplicationData;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {applicationData ? (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <TotalText total={applicationData.length} />
          </View>
          <FlatList
            data={applicationData}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <ApplicationItemForAmi item={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString() + item.title}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      ) : (
        <EmptyText text='There is no Application details.' fullScreen />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  itemContainer: {
    marginBottom: 20,
  },
});

export default ApplicationItemListForAmi;
