import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '@components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

type BasicButtonProps = {
  content: string;
  // eslint-disable-next-line react/require-default-props
  round?: boolean;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  onPress: () => void;
};

export default function BasicButton({
  content,
  round,
  disabled,
  onPress,
}: BasicButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        disabled && styles.disabled,
        round && { borderRadius: 5 },
      ]}
      onPress={onPress}
    >
      <ButtonText content={content} color='#ffffff' />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 0,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.main,
  },
  disabled: {
    backgroundColor: Colors.footerText,
  },
  pressed: {
    opacity: 0.5,
  },
});
