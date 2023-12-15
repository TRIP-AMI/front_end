import { FlatList } from 'react-native';
import ApplicationItem from '@components/molecules/Item/ApplicationItem';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';

const dummyApplicationData = [
  {
    id: 1,
    title: 'Introduce Our Service',
    date: '07.12.2023',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
  },
  {
    id: 2,
    title: 'Introduce Our Service',
    date: '07.12.2023',
    imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
  },
];

function ApplicationItemList() {
  const availableReview = true; // TODO review 가능 여부 판단해야 함

  return (
    <FlatList
      data={dummyApplicationData}
      renderItem={({ item, index }) => (
        <>
          <ApplicationItem
            date={`Application date: ${item.date}`}
            title={item.title}
            imgUrl={item.imgUrl}
            badgeVisible={availableReview}
          />
          {index !== dummyApplicationData.length - 1 && (
            <Separator color={Colors.lineGray04} hei={1} marginVer={15.5} />
          )}
        </>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default ApplicationItemList;
