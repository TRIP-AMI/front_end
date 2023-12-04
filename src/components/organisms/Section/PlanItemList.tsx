import { FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import PlanItem from '@/components/molecules/Item/PlanItem';
import Plan from '@/types/plan';
import planApi from '@/services/module/plan/plan';

// 클래스로 데이터 가공
// TODO: any 말고 타입 선정을 어떻게 해야될까.. dto 선언?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processData = (list: any): Plan[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return list.map((item: any) => {
    return Plan.Builder.withPlanId(item.planId)
      .withPlanImg(item.planImg)
      .withPlanTitle(item.planTitle)
      .withPlanSubTitle(item.planSubTitle)
      .build();
  });
};
export default function PlanItemList() {
  const [planList, setPlanList] = useState<Plan[]>([]);

  const getData = async () => {
    try {
      const data = await planApi.getPlanList();
      setPlanList(processData(data));
    } catch (error) {
      console.error('plan 목록 호출에 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlatList
      data={planList}
      renderItem={(plan) => <PlanItem planItem={plan.item} />}
      keyExtractor={(item) => item.planId}
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
