import { StyleSheet, Switch } from 'react-native';
import Colors from '@styles/colors';

function ToggleButton({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: () => void;
}) {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      ios_backgroundColor='#FFFFFF'
      trackColor={{ true: '#FFFFFF', false: '#FFFFFF' }}
      thumbColor={value ? Colors.primary : Colors.fontGray06}
      style={styles.toggle}
    />
  );
}

const styles = StyleSheet.create({
  toggle: {
    borderWidth: 1,
    borderColor: Colors.fontGray06,
    borderRadius: 16,
  },
});

export default ToggleButton;
