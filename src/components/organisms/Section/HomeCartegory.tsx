import { View, StyleSheet } from 'react-native';
import HomeIcon from '@components/molecules/IconWrap/HomeIconWrap';
import { CategoryList } from '@/constants/category';

export default function HomeCartegory() {
  return (
    <View>
      <View style={styles.iconGridContainer}>
        {CategoryList.map((item) => (
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
