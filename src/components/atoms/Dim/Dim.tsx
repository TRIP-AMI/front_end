import { View, StyleSheet } from 'react-native';

export default function Dim() {
  return <View style={styles.dim} />;
}

const styles = StyleSheet.create({
  dim: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
});
