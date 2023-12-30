import { ReactNode } from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

function FooterDefaultText({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.font, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#CECECE',
    paddingVertical: 10,
  },
});

export default FooterDefaultText;
