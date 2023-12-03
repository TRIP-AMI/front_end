import { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';
import Colors from '@styles/colors';

function SearchTitle({
  children,
  style = StyleSheet.create({}),
}: {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle>;
}) {
  const textStyle = [styleSheet.textTitle, style];
  return <Text style={textStyle}>{children}</Text>;
}

const styleSheet = StyleSheet.create({
  textTitle: {
    color: Colors.titleBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0,
  },
});

export default SearchTitle;
