import { Text, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import colors from '@styles/colors';

function ContentTime({ time, location }: { time: string; location: string }) {
  return (
    <>
      <View style={styles.container}>
        <EvilIcons name='clock' color={colors.contentIcon} size={20} />
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.container}>
        <EvilIcons name='location' color={colors.contentIcon} size={20} />
        <Text style={styles.location}>{location}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Spacing.IOS392Margin,
    marginBottom: 3,
  },
  time: {
    color: colors.main,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
  location: {
    color: colors.subtitle,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
});

export default ContentTime;
