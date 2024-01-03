import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { Pressable } from 'react-native';

export default function LikeHeart({
  likeValue,
  updateValue,
}: {
  likeValue: boolean;
  updateValue?: (value: boolean) => void;
}) {
  const likeBtn = useRef<LottieView>(null);
  const [isOn, setIsOn] = useState(likeValue);

  const likePress = () => {
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    if (isOn) {
      likeBtn.current?.reset();
      likeBtn.current?.play(10, 35);
    } else {
      likeBtn.current?.reset();
    }

    if (updateValue) {
      updateValue(isOn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  return (
    <Pressable
      onPress={likePress}
      style={{ position: 'absolute', width: 50, bottom: 0, right: 0 }}
    >
      <LottieView
        ref={likeBtn}
        // TODO: lint 수정필요
        // eslint-disable-next-line import/extensions
        source={require('../../../../assets/lottie/Animation_backGrayHeart.json')}
        style={{ width: '100%', aspectRatio: 1 }}
        autoPlay={false}
        loop={false}
      />
    </Pressable>
  );
}
