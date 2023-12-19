import { View, StyleSheet } from 'react-native';
import BasicButton, {
  BottomCancelButton,
} from '@/components/atoms/Button/BasicButton';

export default function BottomButtons({
  onCancel,
  onNext,
  disabled,
  confirmText,
}: {
  onCancel: () => void;
  onNext: () => void;
  disabled: boolean;
  confirmText?: string;
}) {
  return (
    <View style={styles.footer}>
      <View style={{ width: '50%' }}>
        <BottomCancelButton content='Cancel' onPress={onCancel} />
      </View>
      <View style={{ width: '50%' }}>
        <BasicButton
          content={confirmText || 'Next'}
          onPress={onNext}
          disabled={disabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
