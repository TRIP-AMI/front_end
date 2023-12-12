import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import Colors from '@styles/colors';

// eslint-disable-next-line react/require-default-props
function VerticalLine({ style }: { style?: StyleProp<TextStyle> | undefined }) {
  return <View style={[styles.verticalLine, style]} />;
}

const styles = StyleSheet.create({
  verticalLine: {
    height: 22,
    width: 1,
    backgroundColor: Colors.lineGray,
  },
});

export default VerticalLine;
