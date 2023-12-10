import { useSetRecoilState } from 'recoil';
import { View, StyleSheet } from 'react-native';
import LikeButtonBox from '@/components/molecules/etc/LikeButtonBox';
import BasicButton from '@/components/atoms/Button/BasicButton';
import modalState from '@/utils/recoil/modal';
import Spacing from '@/styles/spacing';

// TODO: disabled 상태 확인 필요
export default function ContentButtons() {
  const setModal = useSetRecoilState(modalState);

  // TODO: SelectOptions modal로 수정할 예정
  const onApply = () => {
    setModal({ modalName: 'LOGIN_CHECK' });
  };

  return (
    <View style={styles.container}>
      <LikeButtonBox />
      <View style={styles.buttonContainer}>
        <BasicButton content='Apply' round onPress={onApply} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 66,
    paddingHorizontal: Spacing.IOS392Margin,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    width: '80%',
    height: 50,
  },
});
