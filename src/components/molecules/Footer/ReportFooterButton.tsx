import { View, StyleSheet } from 'react-native';
import FooterButton from '@/components/molecules/Button/FooterButton';
import Spacing from '@/styles/spacing';

export default function ReportFooterButton({
  title,
  onPress,
  disabled,
}: {
  title: string;
  onPress: () => void;
  disabled: boolean;
}) {
  return (
    <View style={styles.footer}>
      <FooterButton content={title} onPress={onPress} disabled={disabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: Spacing.IOS392Margin,
    marginBottom: 8,
  },
});
