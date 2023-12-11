import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '@/components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

type OutlinedButtonProps = {
  content: string;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  onPress: () => void;
};

export default function OutlinedButton({
  content,
  disabled,
  onPress,
}: OutlinedButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
    >
      <ButtonText
        content={content}
        color={disabled ? Colors.contentLine : Colors.main}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 5,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  disabled: {
    borderColor: Colors.borderGray,
  },
});
