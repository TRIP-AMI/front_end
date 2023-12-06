import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import colors from '@styles/colors';

// eslint-disable-next-line react/require-default-props
function VerticalLine({ style }: { style?: StyleProp<TextStyle> | undefined }) {
  return <View style={[styles.verticalLine, style]} />;
}

const styles = StyleSheet.create({
  verticalLine: {
    height: 22,
    width: 1,
    backgroundColor: colors.lineGray,
  },
});

export default VerticalLine;
