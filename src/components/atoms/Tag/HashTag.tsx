import { ReactNode } from 'react';
import { Text, StyleProp, StyleSheet, TextStyle } from 'react-native';
import colors from '@styles/colors';

function HashTag({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
}) {
  return <Text style={[styles.tag, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  tag: {
    marginBottom: 15,
    marginRight: 5,
    borderRadius: 14,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: colors.titleBlack,
    fontSize: 12,
    letterSpacing: -0.24,
    fontFamily: 'Montserrat-Medium',
  },
});

export default HashTag;
