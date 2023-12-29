import { Text, Pressable, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import Spacing from '@/styles/spacing';
import RadioButton from '@/components/atoms/Button/RadioButton';

export default function ReportOptionCard({
  content,
  checked,
  onPress,
}: {
  content: string;
  checked: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.5 }]}
      onPress={onPress}
    >
      <Text style={styles.content}>{content}</Text>
      <RadioButton checked={checked} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.IOS392Margin,
    paddingVertical: 20,
  },
  content: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.32,
    lineHeight: 24,
    color: Colors.fontGray02,
  },
});
