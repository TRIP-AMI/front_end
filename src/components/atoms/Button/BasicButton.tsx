import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '@components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

type BasicButtonProps = {
  content: string;
  round?: boolean;
  disabled?: boolean;
  onPress: () => void;
  small?: boolean;
};

export default function BasicButton({
  content,
  round,
  disabled,
  onPress,
  small,
}: BasicButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        disabled && styles.disabled,
        round && { borderRadius: 5 },
        small && { paddingVertical: 14 },
      ]}
      onPress={onPress}
    >
      <ButtonText content={content} color='#ffffff' small={small} />
    </Pressable>
  );
}

type BottomButtonProps = {
  content: string;
  onPress: () => void;
};

export function BottomCancelButton({ content, onPress }: BottomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        { backgroundColor: Colors.lineGray05 },
      ]}
      onPress={onPress}
    >
      <ButtonText content={content} color={Colors.fontGray05} />
    </Pressable>
  );
}

const size = {
  default: {
    paddingVertical: 16,
  },
  sm: {
    paddingVertical: 14,
  },
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    paddingVertical: size.default.paddingVertical,
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.fontGray07,
  },
  pressed: {
    opacity: 0.5,
  },
});
