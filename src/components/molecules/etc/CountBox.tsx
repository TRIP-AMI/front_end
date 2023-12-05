import { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { IconButton } from '@/components/atoms/IconButton/IconButton';

export default function CountBox() {
  const [count, setCount] = useState('1');
  const MAX = 4; // TODO: 예약 가능한 최대 인원 받아오기

  const handleCount = (input: string) => {
    const inputNum = Number(input);
    if (Number.isNaN(inputNum)) return;
    if (inputNum >= MAX) {
      Alert.alert('Not Available!', `Current Available Spots: ${MAX} people`, [
        {
          text: 'Cancel',
          onPress: () => setCount(MAX.toString()),
          style: 'cancel',
        },
      ]);
    } else {
      setCount(input);
    }
  };

  const onPress = () => {
    if (Number(count) >= MAX) return;
    setCount((Number(count) + 1).toLocaleString());
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <TextInput
          style={styles.input}
          onChangeText={handleCount}
          value={count}
          placeholder='1'
          keyboardType='numeric'
        />
      </View>
      <View style={styles.box2}>
        <IconButton icon='add' size={14} color='#AAAAAA' onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  box1: {
    flex: 2,
    alignItems: 'center',
  },
  box2: {
    flex: 1,
  },
  input: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#DCDCDC',
  },
});
