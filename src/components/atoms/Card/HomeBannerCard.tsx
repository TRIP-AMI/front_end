import { View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

type HomeBannerCardProps = {
  id: number;
  title: string;
  imgUrl: string;
};

export default function HomeBannerCard({
  item,
}: {
  item: HomeBannerCardProps;
}) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    // TODO 나중에 각 컨텐츠로 이동하도록 경로 수정
    <Pressable onPress={() => navigation.navigate('Content')}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: item.imgUrl }}
          resizeMode='cover'
          style={styles.img}
        />
      </View>
    </Pressable>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imgContainer: {
    width: windowWidth,
    height: 300,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
