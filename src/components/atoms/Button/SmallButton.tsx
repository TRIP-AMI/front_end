import { Pressable, StyleSheet } from 'react-native';
import MontMediumText from '@components/atoms/Text/MontMediumText';
import Colors from '@/styles/colors';

export default function SmallButton({
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
      <MontMediumText content={content} color='#000000' />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 88,
    height: 42,
    borderRadius: 5,
    justifyContent: 'center',
  },
  active: {
    backgroundColor: Colors.lineGray,
  },
  inactive: {
    backgroundColor: Colors.footerText,
  },
  pressed: {
    opacity: 0.5,
  },
});
