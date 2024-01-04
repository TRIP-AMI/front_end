import { View, StyleSheet } from 'react-native';
import FAQSection from '@/components/molecules/Section/FAQSection';

export default function FAQScreen() {
  return (
    <View style={styles.container}>
      <FAQSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
