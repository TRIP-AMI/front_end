import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from '@/components/atoms/Buttons/StyledButton';
import ApplyModal from '@/components/organisms/Modal/ApplyModal';

export default function LikeScreen() {
  const [isVisible, setIsVisible] = useState(false);

  const onOpen = () => {
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>찜 목록</Text>
      {/* TODO: 버튼 옮기기 */}
      <StyledButton content='Apply' onPress={onOpen} />
      <ApplyModal isVisible={isVisible} onClose={onClose} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
