import { Text, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import colors from '@styles/colors';

function ContentTime({ time }: { time: string }) {
  return (
    <View style={styles.container}>
      <EvilIcons name='clock' color={colors.contentLine} size={20} />
      <Text style={styles.time}>{time}</Text>
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
  time: {
    color: colors.main,
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
});

export default ContentTime;
