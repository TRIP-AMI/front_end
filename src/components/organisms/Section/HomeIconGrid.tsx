import { View, StyleSheet } from 'react-native';
import HomeIcon from '@components/molecules/IconWrap/HomeIconWrap';

const dummyIcons = [
  {
    id: 1,
    title: 'item1',
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1495593-1267764.png?f=webp&w=512',
  },
  {
    id: 2,
    title: 'item2',
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1495593-1267764.png?f=webp&w=512',
  },
  {
    id: 3,
    title: 'item3',
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1495593-1267764.png?f=webp&w=512',
  },
  {
    id: 4,
    title: 'item4',
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1495593-1267764.png?f=webp&w=512',
  },
  {
    id: 5,
    title: 'item5',
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1495593-1267764.png?f=webp&w=512',
  },
  {
    id: 6,
    title: 'item6',
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1495593-1267764.png?f=webp&w=512',
  },
];

export default function HomeIconGrid() {
  return (
    <View>
      <View style={styles.iconGridContainer}>
        {dummyIcons.map((item) => (
          <HomeIcon key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

const iconGridMargin = 10;

const styles = StyleSheet.create({
  iconGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: iconGridMargin,
  },
});
