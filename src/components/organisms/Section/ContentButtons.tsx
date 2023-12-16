import { View, StyleSheet } from 'react-native';
import LikeButtonBox from '@/components/molecules/etc/LikeButtonBox';
import BasicButton from '@/components/atoms/Button/BasicButton';
import Spacing from '@/styles/spacing';
import useModalHook from '@/hooks/modalHook';

// TODO: disabled 상태 확인 필요
export default function ContentButtons() {
  const { setModalName } = useModalHook();

  const onApply = () => {
    setModalName('APPLY');
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
