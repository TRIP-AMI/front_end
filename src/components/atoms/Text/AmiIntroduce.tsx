import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import Spacing from '@styles/spacing';

function AmiIntroduce({
  children,
  style,
}: {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle> | undefined;
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.IOS392Margin,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
});

export default AmiIntroduce;
