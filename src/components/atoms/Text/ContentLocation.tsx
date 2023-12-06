import { Text, View, StyleSheet, TextStyle, StyleProp } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import colors from '@styles/colors';

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
      <EvilIcons name='location' color={colors.contentLine} size={20} />
      <Text style={[styles.location, style]}>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Spacing.IOS392Margin,
    marginBottom: 3,
  },
  location: {
    color: colors.subtitle,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10.64,
    letterSpacing: -0.32,
  },
});

export default ContentLocation;
