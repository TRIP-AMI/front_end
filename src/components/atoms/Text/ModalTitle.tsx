import { ReactNode } from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

function ModalTitle({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
  },
});

export default ModalTitle;
