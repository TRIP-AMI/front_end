import { View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/navigations';

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

  const goContent = () => {
    navigation.navigate('ContentStack', {
      screen: 'Content',
      params: { id: item.id },
    });
  };

  return (
    // TODO 나중에 각 컨텐츠로 이동하도록 경로 수정
    <Pressable onPress={goContent}>
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
