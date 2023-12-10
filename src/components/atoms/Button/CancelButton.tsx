import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '@components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

type CancelButtonProps = {
  content: string;
  onPress: () => void;
};

export default function CancelButton({ content, onPress }: CancelButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <ButtonText content={content} color={Colors.contentLine} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.blankMoreGray,
  },
  pressed: {
    opacity: 0.5,
  },
});
