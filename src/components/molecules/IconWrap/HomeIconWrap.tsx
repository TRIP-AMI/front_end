import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import { RootStackNavigationProp } from '@/navigations';

type HomeIconProps = {
  id: number;
  title: string;
  imgUrl: string;
};

const dummyIcons = [];
dummyIcons.length = 6;

export default function HomeIcon({ item }: { item: HomeIconProps }) {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Category', { title: item.title })}
    >
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
