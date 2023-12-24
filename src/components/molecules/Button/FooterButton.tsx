import { View, StyleSheet } from 'react-native';
import BasicButton from '@/components/atoms/Button/BasicButton';

type FooterButtonProps = {
  content: string;
  onPress: () => void;
  disabled: boolean;
};

export default function FooterButton({
  content,
  onPress,
  disabled,
}: FooterButtonProps) {
  return (
    <View style={styles.container}>
      <BasicButton
        content={content}
        onPress={onPress}
        disabled={disabled}
        round
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
