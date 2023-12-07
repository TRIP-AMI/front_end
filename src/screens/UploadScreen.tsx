import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Spacing from '@/styles/spacing';

export default function UploadScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text>temp</Text>
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
