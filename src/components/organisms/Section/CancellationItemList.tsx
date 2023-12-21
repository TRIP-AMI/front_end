import { FlatList, View } from 'react-native';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';
import CancellationItem from '@components/molecules/Item/CancellationItem';
import EmptyText from '@components/atoms/Text/EmptyText';

const dummyCancellationData = [
  {
    id: 5,
    title: 'Itaewon Tour',
    subTitle: 'Restaurant - Cafe - Photo',
    price: '50,000 won',
    date: '12.10.2023',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
  },
  {
    id: 6,
    title: 'Seoul Tour',
    subTitle: 'Restaurant - Cafe - Photo',
    price: '50,000 won',
    date: '12.10.2023',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
  },
];

function CancellationItemList() {
  const cancellationData = dummyCancellationData;

  return (
    <View>
      {cancellationData ? (
        <FlatList
          data={cancellationData}
          renderItem={({ item, index }) => (
            <>
              <CancellationItem item={item} />
              {index !== cancellationData.length - 1 && (
                <Separator color={Colors.lineGray03} hei={1} marginVer={20} />
              )}
            </>
          )}
          keyExtractor={(item) => item.id.toString() + item.title}
        />
      ) : (
        <EmptyText text='There is no Cancellation details.' fullScreen />
      )}
    </View>
  );
}

export default CancellationItemList;
