import { Text, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';

function ContentTime({ time }: { time: string }) {
  return (
    <View style={styles.container}>
      <EvilIcons name='clock' color={Colors.contentLine} size={20} />
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Spacing.IOS392Margin,
    marginBottom: 5,
  },
  time: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 9.13,
    letterSpacing: -0.32,
  },
});

export default ContentTime;
