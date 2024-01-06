import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchInput from '@/components/molecules/Input/SearchInput';
import SearchRecommeded from '@/components/molecules/etc/SearchRecommeded';
import SearchTopProgram from '@/components/molecules/etc/SearchTopProgram';
import Spacing from '@/styles/spacing';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* search input */}
        <SearchInput />
        {/* recommeded keywords */}
        <SearchRecommeded />
        {/* top 5 program */}
        <SearchTopProgram />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
