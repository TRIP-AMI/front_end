import { useEffect, useState } from 'react';
import postApi from '@services/module/post/post';
import { FlatList, StyleSheet, View } from 'react-native';
import MyPostItem from '@components/molecules/Item/MyPostItem';
import Spacing from '@styles/spacing';
import EmptyText from '@components/atoms/Text/EmptyText';
import BasicItem from '@/types/basicItem';

// 클래스로 데이터 가공
// TODO: any 말고 타입 선정을 어떻게 해야될까.. dto 선언?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processData = (list: any): BasicItem[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return list.map((item: any) => {
    return BasicItem.Builder.withBasicItemId(item.postId)
      .withBasicItemImg(item.postImg)
      .withBasicItemTitle(item.postTitle)
      .withBasicItemSubTitle(item.postSubTitle)
      .build();
  });
};

function PostItemList() {
  const [postList, setPostList] = useState<BasicItem[]>([]);

  const getData = async () => {
    try {
      const data = await postApi.getPostList();
      setPostList(processData(data));
    } catch (error) {
      console.error('plan 목록 호출에 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {postList.length === 0 ? (
        <EmptyText text='Leave your first post!' />
      ) : (
        <FlatList
          data={postList}
          renderItem={(item) => <MyPostItem postItem={item.item} />}
          keyExtractor={(item) => item.itemId}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          style={styles.listWrap}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listWrap: {
    marginBottom: 40,
    marginHorizontal: Spacing.IOS392Margin,
  },
});

export default PostItemList;
