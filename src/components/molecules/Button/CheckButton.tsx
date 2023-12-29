import { View, StyleSheet } from 'react-native';
import BasicButton from '@/components/atoms/Button/BasicButton';

export default function CheckButton({
  disabled,
  onPress,
}: {
  disabled: boolean;
  onPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <BasicButton
        content='Check'
        round
        disabled={disabled}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 66,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
