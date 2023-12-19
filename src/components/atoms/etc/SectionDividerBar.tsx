import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Colors from '@/styles/colors';

export default function SectionDividerBar({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.wrap, style]} />;
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: 10,
    backgroundColor: Colors.lineGray05,
  },
});
