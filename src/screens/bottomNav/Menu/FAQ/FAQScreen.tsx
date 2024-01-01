import { View, StyleSheet, FlatList } from 'react-native';
import DropToggle from '@/components/molecules/Toggle/DropToggle';

const data = [
  {
    id: '1',
    title: '1. What kind of service is TRIPAMI?',
    content:
      'It is a service in which Korean locals introduce hidden places throughout Korea to travelers.',
  },
  {
    id: '2',
    title: '2. What is the role of AMI?',
    content:
      'It is a service in which Korean locals introduce hidden places throughout Korea to travelers.',
  },
  {
    id: '3',
    title: '3. Does the program run on the course?',
    content:
      'It is a service in which Korean locals introduce hidden places throughout Korea to travelers.',
  },
];

export default function FAQScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <DropToggle
            key={item.item.id}
            title={item.item.title}
            content={item.item.content}
          />
        )}
        keyExtractor={(item) => item.id}
      />
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
