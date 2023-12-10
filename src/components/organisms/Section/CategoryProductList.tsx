import { StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import Spacing from '@/styles/spacing';
import BasicItem from '@/types/basicItem';
import BasicProductItem from '@/components/molecules/Item/BasicProductItem';

const categoryProductList = [
  {
    id: '1',
    categoryType: 'ACTIVITY',
    productImg: 'https://via.placeholder.com/450x450/ECECEC',
    productTitle: `Jenny's Seoul tour`,
    productSubTitle: `Let's Play Together at Itaewon Street!`,
  },
  {
    id: '2',
    categoryType: 'ACTIVITY',
    productImg: 'https://via.placeholder.com/450x450/ECECEC',
    productTitle: `Jenny's Seoul tour`,
    productSubTitle: `Let's Play Together at Itaewon Street!`,
  },
  {
    id: '3',
    categoryType: 'ACTIVITY',
    productImg: 'https://via.placeholder.com/450x450/ECECEC',
    productTitle: `Jenny's Seoul tour`,
    productSubTitle: `Let's Play Together at Itaewon Street!`,
  },
  {
    id: '4',
    categoryType: 'ACTIVITY',
    productImg: 'https://via.placeholder.com/450x450/ECECEC',
    productTitle: `Jenny's Seoul tour`,
    productSubTitle: `Let's Play Together at Itaewon Street!`,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processData = (list: any): BasicItem[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return list.map((item: any) => {
    return BasicItem.Builder.withBasicItemId(item.id)
      .withBasicItemImg(item.productImg)
      .withBasicItemTitle(item.productTitle)
      .withBasicItemSubTitle(item.productSubTitle)
      .build();
  });
};

export default function CategoryProductList() {
  const [productList, setProductList] = useState<BasicItem[]>([]);

  const getData = () => {
    try {
      setProductList(processData(categoryProductList));
    } catch (error) {
      console.error('category 목록 호출에 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
      <Text style={{}}>{productList.length} Total</Text>
      <View style={styles.listWrap}>
        {productList.map((item) => {
          return <BasicProductItem key={item.itemId} basicItem={item} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listWrap: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
