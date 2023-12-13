import { Pressable, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

type BasicButtonProps = {
  content: string;
  cancel?: boolean;
  onPress: () => void;
};

export default function ModalButton({
  content,
  cancel,
  onPress,
}: BasicButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={[styles.basic, cancel && styles.cancel]}>{content}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  basic: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: '#000000',
  },
  cancel: {
    fontFamily: 'Montserrat-Medium',
    color: Colors.fontGray05,
  },
  pressed: {
    opacity: 0.5,
  },
});
