import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContentMain from '@components/organisms/Section/ContentMain';

export default function ContentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentMain />
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
