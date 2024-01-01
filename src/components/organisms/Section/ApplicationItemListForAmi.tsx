import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import EmptyText from '@components/atoms/Text/EmptyText';
import TotalText from '@components/atoms/Text/TotalText';
import Spacing from '@styles/spacing';
import ApplicationItemForAmi from '@components/molecules/Item/ApplicationItemForAmi';
import FilterText from '@components/atoms/Text/FilterText';
import { useState } from 'react';
import useModalHook from '@hooks/modalHook';

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
  const { resetModal } = useModalHook();
  const [category, setCategory] = useState('View All');

  const onChange = (select: string) => {
    resetModal();
    setCategory(select);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {applicationData ? (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <TotalText total={applicationData.length} />
            <FilterText category={category} onChange={onChange} />
          </View>
          <FlatList
            data={applicationData}
            renderItem={({ item }) => (
              <ApplicationItemForAmi item={item} category={category} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default ApplicationItemListForAmi;
