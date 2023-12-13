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
      <ButtonText content={content} color={Colors.fontGray05} />
    </Pressable>
  );
}

const size = {
  default: {
    paddingVertical: 16,
  },
  sm: {
    paddingVertical: 12,
  },
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    paddingVertical: size.default.paddingVertical,
    backgroundColor: Colors.lineGray02,
  },
  pressed: {
    opacity: 0.5,
  },
});
