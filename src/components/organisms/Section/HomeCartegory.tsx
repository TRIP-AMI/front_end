import { View, StyleSheet } from 'react-native';
import HomeIcon from '@components/molecules/IconWrap/HomeIconWrap';

const Icons = [
  {
    id: 1,
    title: 'Activity',
    imgUrl: 'https://via.placeholder.com/450x450/ECECEC',
  },
  {
    id: 2,
    title: 'Restaurant',
    imgUrl: 'https://via.placeholder.com/450x450/ECECEC',
  },
  {
    id: 3,
    title: 'Tourism',
    imgUrl: 'https://via.placeholder.com/450x450/ECECEC',
  },
  {
    id: 4,
    title: 'Photo',
    imgUrl: 'https://via.placeholder.com/450x450/ECECEC',
  },
  {
    id: 5,
    title: 'K-POP',
    imgUrl: 'https://via.placeholder.com/450x450/ECECEC',
  },
  {
    id: 6,
    title: 'Shopping',
    imgUrl: 'https://via.placeholder.com/450x450/ECECEC',
  },
];

export default function HomeCartegory() {
  return (
    <View>
      <View style={styles.iconGridContainer}>
        {Icons.map((item) => (
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
