import { View, StyleSheet } from 'react-native';
import Plan from '@/types/plan';
import PlanItemTitle from '@/components/atoms/Text/PlanItemTitle';
import PlanItemSubTitle from '@/components/atoms/Text/PlanItemSubTitle';
import PlanItemImg from '@/components/atoms/Image/PlanItemImg';
import LikeHeart from '@/components/atoms/Lottie/LikeHeart';

export default function PlanItem({ planItem }: { planItem: Plan }) {
  return (
    <View style={styles.planItemWrap}>
      <View style={styles.imgWrap}>
        <PlanItemImg planUri={planItem.planImg}>
          <LikeHeart />
        </PlanItemImg>
      </View>
      <View>
        <PlanItemTitle style={{ marginBottom: 1 }}>
          {planItem.planTitle}
        </PlanItemTitle>
        <PlanItemSubTitle>{planItem.planSubTitle}</PlanItemSubTitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  planItemWrap: {
    width: '48%',
    marginBottom: 20,
  },
  imgWrap: {
    width: '100%',
    height: 161,
    marginBottom: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
