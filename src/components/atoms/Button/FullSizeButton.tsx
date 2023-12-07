import { Pressable, StyleSheet, Dimensions } from 'react-native';
import ButtonText from '@components/atoms/Text/ButtonText';
import Colors from '@/styles/colors';

export default function FullSizeButton({
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

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 50,
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
