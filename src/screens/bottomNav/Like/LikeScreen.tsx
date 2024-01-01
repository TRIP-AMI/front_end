import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LikeItemList from '@/components/organisms/Section/LikeItemList';
import Spacing from '@/styles/spacing';

export default function LikeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <LikeItemList />
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
