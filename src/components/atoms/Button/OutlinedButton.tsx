import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '@components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

export default function OutlinedButton({
  content,
  onPress,
}: {
  content: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.container]}
      onPress={onPress}
    >
      <ButtonText content={content} color={Colors.main} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 42,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 5,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
