import { StyleSheet, View } from 'react-native';
import PlanItem from '@/components/molecules/Item/PlanItem';
import Plan from '@/types/plan';

// api 에서 받아온 데이터
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

// 클래스로 데이터 가공
const processData = data.map((item) => {
  return Plan.Builder.withPlanId(item.planId)
    .withPlanImg(item.planImg)
    .withPlanTitle(item.planTitle)
    .withPlanSubTitle(item.planSubTitle)
    .build();
});

export default function PlanItemList() {
  return (
    <View style={styles.listWrap}>
      {processData.map((plan) => {
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
