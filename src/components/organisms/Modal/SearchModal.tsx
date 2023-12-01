import {
  Modal,
  View,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

function SearchModal({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const [text, setText] = useState('');
  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={isVisible}
      presentationStyle='fullScreen'
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 10,
          }}
        >
          <Pressable onPress={onClose}>
            <AntDesign name='close' size={24} color='black' />
          </Pressable>
        </View>
        <View style={{ padding: 10 }}>
          {/* search input */}
          <View style={{ borderColor: '#000', borderWidth: 2 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder='Type here to translate!'
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
            />
          </View>
          {/* recommeded keywords */}
          {/* top 5 program */}
          <Text>contents</Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default SearchModal;
