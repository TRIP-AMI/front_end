import { FlatList, View } from 'react-native';
import BasicProductItem from '@/components/molecules/Item/BasicProductItem';
import BasicItem from '@/types/basicItem';
import TotalText from '@/components/atoms/Text/TotalText';
import Spacing from '@/styles/spacing';

type ProductItemListProps = {
  products: BasicItem[];
  topContent?: JSX.Element;
  bottomContent?: JSX.Element;
  totalCountVisible?: boolean;
};

export default function ProductItemList({
  products,
  totalCountVisible = true,
  topContent,
  bottomContent,
}: ProductItemListProps) {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={(item) => <BasicProductItem basicItem={item.item} />}
        keyExtractor={(item) => item.itemId.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: Spacing.IOS392Margin,
        }}
        ListHeaderComponent={() => (
          <>
            {topContent && topContent}
            {totalCountVisible && (
              <View
                style={{
                  marginVertical: 13,
                  paddingHorizontal: Spacing.IOS392Margin,
                }}
              >
                <TotalText total={products.length} />
              </View>
            )}
          </>
        )}
        ListFooterComponent={bottomContent && bottomContent}
      />
    </View>
  );
}
