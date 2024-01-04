import { FlatList, View } from 'react-native';
import BasicProductItem from '@/components/molecules/Item/BasicProductItem';
import BasicItem from '@/types/basicItem';
import TotalText from '@/components/atoms/Text/TotalText';

type ProductItemListProps = {
  products: BasicItem[];
};

export default function ProductItemList({ products }: ProductItemListProps) {
  return (
    <View>
      <View style={{ marginVertical: 13 }}>
        <TotalText total={products.length} />
      </View>
      <FlatList
        data={products}
        renderItem={(item) => <BasicProductItem basicItem={item.item} />}
        keyExtractor={(item) => item.itemId.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}
