import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import CategoryTagList from '@/components/molecules/Section/CategoryTagList';
import CategoryProductList from '@/components/organisms/Section/CategoryProductList';
import CategoryBanner from '@/components/molecules/Banner/CategoryBanner';

export default function CategoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* banner */}
        <CategoryBanner />
        {/* tag */}
        <CategoryTagList />
        {/* list */}
        <CategoryProductList />
      </ScrollView>
    </SafeAreaView>
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
