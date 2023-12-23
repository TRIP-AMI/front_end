import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import Colors from '@styles/colors';

function VerticalLine({
  style,
  hei,
}: {
  style?: StyleProp<TextStyle> | undefined;
  hei: number;
}) {
  const styles = StyleSheet.create({
    verticalLine: {
      height: hei,
      width: 1,
      backgroundColor: Colors.lineGray04,
    },
  });

  return <View style={[styles.verticalLine, style]} />;
}

export default VerticalLine;
