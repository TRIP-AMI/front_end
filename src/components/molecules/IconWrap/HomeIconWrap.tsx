/* eslint-disable import/extensions */
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import { RootStackNavigationProp } from '@/navigations';
import { Category, CategoryIcon } from '@/constants/category';

type HomeIconProps = { id: Category; label: string };

const dummyIcons = [];
dummyIcons.length = 6;

export default function HomeIcon({ item }: { item: HomeIconProps }) {
  const navigation = useNavigation<RootStackNavigationProp>();

  const IconView = (
    <Image
      source={CategoryIcon[item.id]}
      style={{ width: '100%', height: '100%' }}
    />
  );

  return (
    <Pressable
      onPress={() => navigation.navigate('Category', { categoryId: item.id })}
    >
      <View style={styles.iconContainer}>
        <View style={styles.iconWrap}>{IconView}</View>
        <Text style={styles.iconTitle}>{item.label}</Text>
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
    marginVertical: 15,
  },
  iconWrap: {
    width: 60,
    height: 60,
    marginBottom: 5,
    padding: 4,
    backgroundColor: '#F2F2F2',
    borderRadius: 3,
    overflow: 'hidden',
  },
  iconTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
});
