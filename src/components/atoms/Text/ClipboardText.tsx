import { Pressable, StyleSheet, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';

// TODO clipboard 클릭 시 토스트 메세지 추가
function ClipboardText({ text }: { text: string }) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text);
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
