import { View, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

export default function RadioButton({ checked }: { checked: boolean }) {
  return (
    <View
      style={[styles.emptyCircle, checked && { borderColor: Colors.primary }]}
    >
      {checked && <View style={styles.fill} />}
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCircle: {
    width: 21,
    height: 21,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.fontGray06,
  },
  fill: {
    width: 11,
    height: 11,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    margin: 4,
  },
});
