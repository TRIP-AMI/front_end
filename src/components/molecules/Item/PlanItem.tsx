import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { View, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Plan from '@/types/plan';
import PlanItemTitle from '@/components/atoms/Text/PlanItemTitle';
import PlanItemSubTitle from '@/components/atoms/Text/PlanItemSubTitle';

export default function PlanItem({ planItem }: { planItem: Plan }) {
  const likeBtn = useRef<LottieView>(null);

  const likePress = () => {
    likeBtn.current?.reset();
    likeBtn.current?.play(0, 25);
  };
  return (
    <View style={styles.planItemWrap}>
      <View style={styles.imgWrap}>
        <ImageBackground
          source={{
            uri: planItem.planImg,
          }}
          resizeMode='cover'
          style={{ flex: 1 }}
        >
          <Pressable
            onPress={likePress}
            style={{ position: 'absolute', width: 50, bottom: 0, right: 0 }}
          >
            <LottieView
              ref={likeBtn}
              // TODO: lint 수정필요
              // eslint-disable-next-line import/extensions
              source={require('../../../../assets/lottie/Animation - 1701609917706.json')}
              style={{ width: '100%', aspectRatio: 1 }}
              autoPlay={false}
              loop={false}
            />
          </Pressable>
        </ImageBackground>
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
  },
});
