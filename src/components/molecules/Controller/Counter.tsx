import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

type CounterProps = {
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

export default function Counter({ min, max, onChange }: CounterProps) {
  const [count, setCount] = useState(0);

  const pressMinus = () => {
    if (min && count <= min) {
      console.log('최소치');
      return;
    }
    setCount((prev) => prev - 1);
  };
  const pressPlus = () => {
    if (max && count >= max) {
      console.log('최대치');
      return;
    }
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count, onChange]);

  useEffect(() => {
    if (min) {
      setCount(min);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.wrap}>
      {/* minus */}
      <Pressable style={styles.leftWrap} onPress={pressMinus}>
        <AntDesign name='minus' size={16} color='#8E8E8E' />
      </Pressable>
      {/* count */}
      <View>
        <Text style={{ color: '#1E1E20' }}>{count}</Text>
      </View>
      {/* plus */}
      <Pressable style={styles.rightWrap} onPress={pressPlus}>
        <AntDesign name='plus' size={16} color='#8E8E8E' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 104,
    backgroundColor: '#ffffff',

    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  leftWrap: {
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    borderColor: '#DCDCDC',
  },
  rightWrap: {
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderLeftWidth: 1,
    borderColor: '#DCDCDC',
  },
});
