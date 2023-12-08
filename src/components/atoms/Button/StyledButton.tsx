import { Pressable, StyleSheet, Dimensions } from 'react-native';
import Colors from '@/styles/colors';
import TextTitle from '@/components/atoms/Text/TextTitle';

type StyledButtonProps = {
  // eslint-disable-next-line react/require-default-props
  type?: 'full' | 'medium' | 'small' | 'outlined';
  content: string;
  active: boolean;
  onPress: () => void;
};

export default function StyledButton({
  type,
  content,
  active,
  onPress,
}: StyledButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.container,
        active ? styles.active : styles.inactive,
        type && styles[type],
      ]}
      onPress={onPress}
    >
      <TextTitle
        style={[
          styles.basic,
          type === 'outlined' && styles.outlinedText,
          type === 'small' && styles.smallText,
        ]}
      >
        {content}
      </TextTitle>
    </Pressable>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 5,
    width: 345,
    height: 42,
  },
  basic: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    color: '#ffffff',
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
  full: {
    width: screenWidth,
    height: 50,
    borderRadius: 0,
  },
  medium: {
    width: 285,
    height: 50,
  },
  small: {
    width: 88,
    backgroundColor: Colors.lineGray,
  },
  smallText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    lineHeight: 15,
    color: '#000000',
    textAlign: 'center',
  },
  outlined: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: Colors.main,
  },
  outlinedText: {
    color: Colors.main,
  },
});
