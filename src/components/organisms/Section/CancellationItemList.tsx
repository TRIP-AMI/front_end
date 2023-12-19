import { FlatList } from 'react-native';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';
import CancellationItem from '@components/molecules/Item/CancellationItem';

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
  return (
    <FlatList
      data={dummyCancellationData}
      renderItem={({ item, index }) => (
        <>
          <CancellationItem item={item} />
          {index !== dummyCancellationData.length - 1 && (
            <Separator color={Colors.lineGray03} hei={1} marginVer={20} />
          )}
        </>
      )}
      keyExtractor={(item) => item.id.toString() + item.title}
    />
  );
}

export default CancellationItemList;
