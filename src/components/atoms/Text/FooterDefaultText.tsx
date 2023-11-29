import { ReactNode } from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import Colors from '@styles/colors';

function FooterDefaultText({
  children,
  style,
}: {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle> | undefined;
}) {
  return <Text style={[styles.font, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  font: {
    fontSize: 11,
    color: Colors.footerLight,
  },
});

export default FooterDefaultText;
