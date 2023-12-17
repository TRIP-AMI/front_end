import { View, StyleSheet } from 'react-native';
import BasicButton, {
  BottomCancelButton,
} from '@/components/atoms/Button/BasicButton';

export default function BottomButtons({
  onCancel,
  onNext,
  disabled,
}: {
  onCancel: () => void;
  onNext: () => void;
  disabled: boolean;
}) {
  return (
    <View style={styles.footer}>
      <View style={{ width: '50%' }}>
        <BottomCancelButton content='Cancel' onPress={onCancel} />
      </View>
      <View style={{ width: '50%' }}>
        <BasicButton content='Next' onPress={onNext} disabled={disabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
