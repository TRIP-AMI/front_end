import { useEffect, useState } from 'react';
import likeApi from '@services/module/like/like';
import { FlatList, StyleSheet } from 'react-native';
import MyPostItem from '@components/molecules/Item/MyPostItem';
import Spacing from '@styles/spacing';
import BasicItem from '@/types/basicItem';

// 클래스로 데이터 가공
// TODO: any 말고 타입 선정을 어떻게 해야될까.. dto 선언?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processData = (list: any): BasicItem[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return list.map((item: any) => {
    return BasicItem.Builder.withBasicItemId(item.likeId)
      .withBasicItemImg(item.likeImg)
      .withBasicItemTitle(item.likeTitle)
      .withBasicItemSubTitle(item.likeSubTitle)
      .build();
  });
};

function PostItemList() {
  const [likeList, setLikeList] = useState<BasicItem[]>([]);

  const getData = async () => {
    try {
      const data = await likeApi.getLikeList();
      setLikeList(processData(data));
    } catch (error) {
      console.error('plan 목록 호출에 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlatList
      data={likeList}
      renderItem={(item) => <MyPostItem postItem={item.item} />}
      keyExtractor={(item) => item.itemId}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      style={styles.listWrap}
    />
  );
}

const styles = StyleSheet.create({
  listWrap: {
    marginHorizontal: Spacing.IOS392Margin,
    marginTop: 10,
  },
});

export default PostItemList;
