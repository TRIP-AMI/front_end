import { FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import BasicProductItem from '@components/molecules/Item/BasicProductItem';
import BasicItem from '@/types/basicItem';
import likeApi from '@/services/module/like/like';

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
export default function LikeItemList() {
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
      renderItem={(item) => <BasicProductItem basicItem={item.item} />}
      keyExtractor={(item) => item.itemId}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      style={styles.listWrap}
    />
  );
}

const styles = StyleSheet.create({
  listWrap: {
    marginTop: 10,
  },
});
