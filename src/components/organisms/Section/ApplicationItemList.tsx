import { FlatList, View } from 'react-native';
import ApplicationItem from '@components/molecules/Item/ApplicationItem';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';
import EmptyText from '@components/atoms/Text/EmptyText';

const dummyApplicationData = [
  {
    id: 3,
    title: 'Itaewon Tour',
    subTitle: 'Restaurant - Cafe - Photo',
    price: '50,000 won',
    date: '12.10.2024',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
  },
  {
    id: 4,
    title: 'Seoul Tour',
    subTitle: 'Restaurant - Cafe - Photo',
    price: '50,000 won',
    date: '12.10.2023',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
  },
];

function ApplicationItemList() {
  const applicationData = dummyApplicationData;

  return (
    <View>
      {applicationData ? (
        <FlatList
          data={applicationData}
          renderItem={({ item, index }) => (
            <>
              <ApplicationItem item={item} />
              {index !== applicationData.length - 1 && (
                <Separator color={Colors.lineGray03} hei={1} marginVer={20} />
              )}
            </>
          )}
          keyExtractor={(item) => item.id.toString() + item.title}
        />
      ) : (
        <EmptyText text='There is no Application details.' fullScreen />
      )}
    </View>
  );
}

export default ApplicationItemList;
