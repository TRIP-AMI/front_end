import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from '@/components/atoms/IconButton/IconButton';
import StyledText from '@/components/atoms/Text/StyledText';

export default function CountBox() {
  const [count, setCount] = useState(1);
  const MAX = 4; // TODO: 예약 가능한 최대 인원 받아오기

  const onCountUp = () => {
    if (count === MAX) return;
    setCount(count + 1);
  };
  const onCountDown = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <StyledText
          content={count.toLocaleString()}
          color='black'
          size={14}
          font='Montserrat-Medium'
        />
      </View>
      <View style={styles.box2}>
        <IconButton
          icon='remove'
          size={14}
          color='#AAAAAA'
          onPress={onCountDown}
        />
      </View>
      <View style={styles.box3}>
        <IconButton icon='add' size={14} color='#AAAAAA' onPress={onCountUp} />
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
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DCDCDC',
    alignItems: 'center',
  },
  box3: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
});
