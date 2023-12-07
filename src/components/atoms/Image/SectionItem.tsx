import { View, StyleSheet, Pressable, Image } from 'react-native';
import ContentScreen from '@screens/ContentScreen';

export type SectionItemProps = {
  id: number;
  title: string;
  imgUrl: string;
};

export default function SectionItem({ item }: { item: SectionItemProps }) {
  return (
    <View style={styles.imgContainer}>
      <Pressable onPress={() => ContentScreen}>
        <Image
          source={{ uri: item.imgUrl }}
          resizeMode='cover'
          style={styles.img}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  img: {
    width: 150,
    height: 200,
    margin: 6,
  },
});
