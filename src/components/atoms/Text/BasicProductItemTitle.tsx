import { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

export default function BasicProductItemTitle({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text style={[styles.text, style]} numberOfLines={2} ellipsizeMode='tail'>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.32,
  },
});
