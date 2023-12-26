import { Pressable, StyleSheet, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import showToast from '@utils/toast/toast';
import Spacing from '@styles/spacing';

function ClipboardText({ text }: { text: string }) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text);
    showToast('Copy ro clipboard', Spacing.ToastBasic);
  };

  return (
    <Pressable
      onPress={copyToClipboard}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    >
      <Text style={styles.clipboard}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  clipboard: {
    color: '#3E9FDF',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
  },
});

export default ClipboardText;
