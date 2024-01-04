import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import ButtonText from '@/components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

type ConfirmButtonProps = {
  content: string;
  disabled?: boolean;
  background?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export default function ConfirmButton({
  content,
  disabled,
  background,
  customStyle,
  onPress,
}: ConfirmButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        disabled && styles.disabled,
        background && styles.background,
        customStyle,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <ButtonText
        content={content}
        color={disabled ? Colors.fontGray05 : Colors.primary}
        small
      />
    </Pressable>
  );
}

const size = {
  default: {
    paddingVertical: 12,
  },
  large: {
    paddingVertical: 15,
  },
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: size.default.paddingVertical,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  disabled: {
    borderColor: Colors.fontGray06,
  },
  background: {
    backgroundColor: Colors.lineGray04,
    borderColor: Colors.lineGray04,
  },
});