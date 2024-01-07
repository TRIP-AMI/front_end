import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import SearchInput from '@/components/molecules/Input/SearchInput';
import SearchRecommeded from '@/components/molecules/etc/SearchRecommeded';
import SearchTopProgram from '@/components/molecules/etc/SearchTopProgram';
import Spacing from '@/styles/spacing';
import ProductItemList from '@/components/organisms/Section/ProductItemList';
import BasicItem from '@/types/basicItem';
import searchApi, { SearchProgramResponse } from '@/services/module/search';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';

const processData = (list: SearchProgramResponse): BasicItem[] => {
  return list.map((item) => {
    return BasicItem.Builder.withBasicItemId(item.id)
      .withBasicItemImg(item.imgUrl)
      .withBasicItemTitle(item.title)
      .withBasicItemSubTitle(item.subTitle)
      .withBasicItemDate(item.date)
      .build();
  });
};

export default function SearchScreen() {
  const [products, setProducts] = useState<BasicItem[]>([]);
  const showItem = products.length > 0;

  const getData = async (inputValue: string) => {
    // TODO: api 파라미터로 넘기기
    console.log(inputValue);

    const res = await searchApi.getSearchProgramList();
    setProducts(processData(res));
  };

  const onShearch = (inputValue: string) => {
    getData(inputValue);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <ProductItemList
        products={products}
        totalCountVisible={showItem}
        topContent={
          <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
            <SearchInput onShearch={onShearch} />
          </View>
        }
        bottomContent={
          <>
            {showItem && <SectionDividerBar />}
            <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
              {/* recommeded keywords */}
              <SearchRecommeded />
              {/* Latest registration program */}
              <SearchTopProgram />
            </View>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
