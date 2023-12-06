import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '@components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

export default function StyledButton({
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
      <ButtonText content={content} />
    </Pressable>
  );
}

// TODO: 구체적인 스타일 수정 필요
const styles = StyleSheet.create({
  container: {
    width: '88%',
    height: 50,
    backgroundColor: Colors.main,
    borderRadius: 5,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
