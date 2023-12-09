import { Pressable, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import TextTitle from '@/components/atoms/Text/TextTitle';

type BasicButtonProps = {
  // eslint-disable-next-line react/require-default-props
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
      <TextTitle style={styles.basicText}>{content}</TextTitle>
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
  small: {
    backgroundColor: Colors.lineGray,
  },
  basicText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    color: '#ffffff',
    paddingVertical: '3%',
  },
});
