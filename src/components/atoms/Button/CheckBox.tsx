import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

interface ICheckBoxProps {
  isChecked: boolean;
  onCheck: () => void;
}

export default function CheckBox({ isChecked, onCheck }: ICheckBoxProps) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.checkbox]}
      onPress={onCheck}
    >
      {isChecked && <Feather name='check' size={20} color={Colors.primary} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.lineGray04,
  },
  pressed: {
    opacity: 0.7,
  },
});
