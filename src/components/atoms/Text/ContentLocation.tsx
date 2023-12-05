import { Text, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import colors from '@styles/colors';

function ContentLocation({ location }: { location: string }) {
  return (
    <View style={styles.container}>
      <EvilIcons name='location' color={colors.contentLine} size={20} />
      <Text style={styles.location}>{location}</Text>
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
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
});

export default ContentLocation;
