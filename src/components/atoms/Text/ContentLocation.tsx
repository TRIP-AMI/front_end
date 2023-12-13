import { Text, View, StyleSheet, TextStyle, StyleProp } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';

function ContentLocation({
  location,
  style,
}: {
  location: string;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle> | undefined;
}) {
  return (
    <View style={styles.container}>
      <EvilIcons name='location' color={Colors.fontGray05} size={20} />
      <Text style={[styles.location, style]}>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    marginLeft: Spacing.IOS392Margin,
  },
  location: {
    color: Colors.fontGray02,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10.64,
    letterSpacing: -0.32,
  },
});

export default ContentLocation;
