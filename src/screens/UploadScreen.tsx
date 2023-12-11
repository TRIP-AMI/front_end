import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useSetRecoilState } from 'recoil';
import Spacing from '@/styles/spacing';
import modalState from '@/utils/recoil/modal';

export default function UploadScreen() {
  const setModal = useSetRecoilState(modalState);

  const handleClick = () => {
    setModal({ modalName: 'CALENDAR' });
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text>temp</Text>
        <Button title='click' onPress={handleClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: Spacing.IOS392Margin,
  },
});
