import { ImageBackground, StyleSheet, View } from 'react-native';
import BasicProductItemTitle from '@components/atoms/Text/BasicProductItemTitle';
import BasicProductItemSubTitle from '@components/atoms/Text/BasicProductItemSubTitle';
import BasicItem from '@/types/basicItem';

function MyPostItem({ postItem }: { postItem: BasicItem }) {
  return (
    <View style={styles.basicItemWrap}>
      <View style={styles.imgWrap}>
        <ImageBackground
          source={{ uri: postItem.itemImg }}
          resizeMode='cover'
          style={styles.img}
        />
      </View>
      <View>
        <BasicProductItemTitle style={{ marginBottom: 1 }}>
          {postItem.itemTitle}
        </BasicProductItemTitle>
        <BasicProductItemSubTitle>
          {postItem.itemSubTitle}
        </BasicProductItemSubTitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basicItemWrap: {
    width: '48.5%',
    marginBottom: 20,
  },
  imgWrap: {
    height: 161,
    marginBottom: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
  },
});

export default MyPostItem;
