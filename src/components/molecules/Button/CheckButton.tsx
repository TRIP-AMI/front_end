import { View, StyleSheet } from 'react-native';
import BasicButton from '@/components/atoms/Button/BasicButton';

// TODO check 누를 시, 리뷰 데이터 저장 및 모달 종료
export default function CheckButton({ disabled }: { disabled: boolean }) {
  return (
    <View style={styles.container}>
      <BasicButton
        content='Check'
        round
        disabled={disabled}
        onPress={() => console.log('check!')}
      />
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
    backgroundColor: '#ffffff',
  },
});
