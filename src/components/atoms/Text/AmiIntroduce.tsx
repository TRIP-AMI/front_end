import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';

function AmiIntroduce({
  children,
}: {
  children: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  style?: StyleProp<TextStyle> | undefined;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  text: {
    color: Colors.fontGray03,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.32,
  },
});

export default AmiIntroduce;
