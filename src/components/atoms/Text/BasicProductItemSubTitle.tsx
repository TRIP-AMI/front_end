import { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

export default function BasicProductItemSubTitle({
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
    color: '#4A4A4A',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: -0.28,
  },
});
