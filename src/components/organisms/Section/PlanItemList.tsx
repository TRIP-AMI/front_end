import { StyleSheet, View } from 'react-native';
import PlanItem from '@/components/molecules/Item/PlanItem';

export default function PlanItemList() {
  const data = [
    {
      planId: '1',
      planImg: 'https://via.placeholder.com/450x450/ECECEC',
      planTitle: 'Itaewon Tour',
      planSubTitle: 'Restaurant - Cafe - Photo',
    },
    {
      planId: '12',
      planImg: 'https://via.placeholder.com/450x450/ECECEC',
      planTitle: 'Itaewon Tour',
      planSubTitle: 'Restaurant - Cafe - Photo',
    },
    {
      planId: '123',
      planImg: 'https://via.placeholder.com/450x450/ECECEC',
      planTitle: 'Itaewon Tour',
      planSubTitle: 'Restaurant - Cafe - Photo',
    },
  ];
  return (
    <View style={styles.listWrap}>
      {data.map((plan) => {
        return <PlanItem key={plan.planId} planItem={plan} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  listWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
