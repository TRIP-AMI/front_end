import { Dispatch, SetStateAction } from 'react';
import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

interface ICheckBoxProps {
  isChecked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export default function CheckBox({ isChecked, setChecked }: ICheckBoxProps) {
  // const [isChecked, setChecked] = useState(false);

  const onPress = () => {
    setChecked(!isChecked);
  };

  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.checkbox]}
      onPress={onPress}
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
