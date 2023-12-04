import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Spacing from '@/styles/spacing';
import PlanItemList from '@/components/organisms/Section/PlanItemList';

export default function PlanScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <PlanItemList />
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
