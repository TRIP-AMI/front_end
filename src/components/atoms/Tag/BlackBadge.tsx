import { Text, StyleSheet, View, StyleProp, TextStyle } from 'react-native';

function BlackBadge({
  text,
  style,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    paddingVertical: 3,
    paddingHorizontal: 9,
  },
});

export default BlackBadge;
