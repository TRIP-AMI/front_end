import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BasicItem from '@/types/basicItem';
import homeApi, { HomeSectionProgramResponse } from '@/services/module/home';
import ProductItemList from '@/components/organisms/Section/ProductItemList';
import Spacing from '@/styles/spacing';

const processData = (list: HomeSectionProgramResponse): BasicItem[] => {
  return list.map((item) => {
    return BasicItem.Builder.withBasicItemId(item.id)
      .withBasicItemImg(item.imgUrl)
      .withBasicItemTitle(item.title)
      .withBasicItemSubTitle(item.subTitle)
      .withBasicItemDate(item.date)
      .build();
  });
};

// TODO: screen 에서 받는 id 로 api 호출
export default function ProductListScreen() {
  const [products, setProducts] = useState<BasicItem[]>([]);

  const dataSetLRP = async () => {
    const res = await homeApi.getHomeProgramList();
    setProducts(processData(res));
  };

  useEffect(() => {
    dataSetLRP();
  }, []);
  return (
    <View style={styles.container}>
      <ProductItemList products={products} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.IOS392Margin,
    backgroundColor: '#ffffff',
  },
});
