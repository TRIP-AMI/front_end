import { View, StyleSheet } from 'react-native';

export default function VerticalLine() {
  return <View style={styles.line} />;
}

export const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    top: 27,
    alignSelf: 'center',
    width: 1,
    height: 283,
    backgroundColor: '#E3E3E3',
  },
});
