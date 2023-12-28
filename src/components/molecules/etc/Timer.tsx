import { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

export default function Timer({
  timer,
  setTimer,
}: {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}) {
  const MIN = Math.floor(timer / 60)
    .toString()
    .padStart(2, '0');
  const SEC = (timer % 60).toString().padStart(2, '0');
  useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timerId);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return <Text style={styles.timer}>{`${MIN}:${SEC}`}</Text>;
}

const styles = StyleSheet.create({
  timer: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.28,
    color: Colors.fontRed01,
  },
});
