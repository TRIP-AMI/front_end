import { ReactNode } from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

function TextTitle({
  children,
  style,
}: {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle> | undefined;
}) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TextTitle;
