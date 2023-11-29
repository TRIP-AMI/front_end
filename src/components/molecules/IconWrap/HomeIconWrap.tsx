import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  Dimensions,
} from 'react-native';

type HomeIconProps = {
  id: number;
  title: string;
  imgUrl: string;
};

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

export default function HomeIcon({ item }: { item: HomeIconProps }) {
  return (
    <Pressable onPress={() => console.log(item.title)}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: item.imgUrl }} style={styles.icon} />
        <Text style={styles.iconTitle}>{item.title}</Text>
      </View>
    </Pressable>
  );
}

const windowWidth = Dimensions.get('window').width;
const iconGridMargin = 10;
const column = dummyIcons.length / 2;

const styles = StyleSheet.create({
  iconContainer: {
    width: (windowWidth - iconGridMargin * 2) / column,
    height: 70,
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  iconTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
