import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import CategoryTagList from '@/components/molecules/Section/CategoryTagList';
import CategoryBanner from '@/components/molecules/Banner/CategoryBanner';
import ProductItemList from '@/components/organisms/Section/ProductItemList';
import homeApi, { HomeSectionProgramResponse } from '@/services/module/home';
import BasicItem from '@/types/basicItem';

// TODO: 추후에 카테고리 api 로 변경
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

export default function CategoryScreen() {
  const [productList, setProductList] = useState<BasicItem[]>([]);

  const getData = async () => {
    const res = await homeApi.getHomeProgramList();
    setProductList(processData(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />

      <ProductItemList
        products={productList}
        topContent={
          <>
            {/* banner */}
            <CategoryBanner />
            {/* tag */}
            <CategoryTagList />
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
