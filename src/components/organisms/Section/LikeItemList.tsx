import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import BasicProductItem from '@components/molecules/Item/BasicProductItem';
import { useNavigation } from '@react-navigation/native';
import BasicItem from '@/types/basicItem';
import likeApi from '@/services/module/like/like';
import { LikeListResponse } from '@/services/module/like/response';

const processData = (list: LikeListResponse): BasicItem[] => {
  return list.map((item) => {
    return BasicItem.Builder.withBasicItemId(item.likeId)
      .withBasicItemImg(item.likeImg)
      .withBasicItemTitle(item.likeTitle)
      .withBasicItemSubTitle(item.likeSubTitle)
      .withBasicItemDate(item.likeDate)
      .withBasicItemLike(true)
      .build();
  });
};

export default function LikeItemList() {
  const [likeList, setLikeList] = useState<BasicItem[]>([]);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const data = await likeApi.getLikeList();
      setLikeList(processData(data));
    } catch (error) {
      console.error('like 목록 호출에 실패하였습니다.', error);
    }
  };

  // navigation out event
  useEffect(
    () =>
      navigation.addListener('blur', () => {
        console.log(
          'api 보낼 리스트 목록',
          likeList.filter((item) => item.itemLike),
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [likeList],
  );

  useEffect(() => {
    getData();
  }, []);

  if (likeList.length === 0) {
    return (
      <View style={{ marginTop: 150, alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            lineHeight: 22,
            letterSpacing: -0.32,
          }}
        >
          There is no liked content
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={likeList}
      renderItem={(item) => (
        <BasicProductItem basicItem={item.item} setList={setLikeList} />
      )}
      keyExtractor={(item) => item.itemId.toString()}
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
