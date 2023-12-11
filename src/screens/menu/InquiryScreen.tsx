import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import BasicInput, {
  BasicInputTextarea,
} from '@/components/atoms/Input/BasicInput';
import Spacing from '@/styles/spacing';

export default function ContactScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text>If you have any questions,</Text>
        <Text> feel free to ask!</Text>
      </View>
      <View>
        <BasicInput
          value={title}
          onChangeText={(value) => {
            setTitle(value);
          }}
          placeholder='Title'
        />
        <BasicInputTextarea
          value={content}
          onChangeText={(value) => {
            setContent(value);
          }}
          placeholder='Feel free to leave your ask!'
          style={{ height: 210 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.IOS392Margin,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
});
