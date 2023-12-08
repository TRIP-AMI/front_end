import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '@components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

export default function MediumButton({
  content,
  active,
  onPress,
}: {
  content: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.container,
        active ? styles.active : styles.inactive,
      ]}
      onPress={onPress}
    >
      <ButtonText content={content} color='#ffffff' />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 285,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  active: {
    backgroundColor: Colors.main,
  },
  inactive: {
    backgroundColor: Colors.footerText,
  },
  pressed: {
    opacity: 0.5,
  },
});
