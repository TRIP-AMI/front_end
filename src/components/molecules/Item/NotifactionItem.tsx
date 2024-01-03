import { View, Text, StyleSheet } from 'react-native';
import Alarm from '@/types/Notifcation';

export default function NotifactionItem({ alarm }: { alarm: Alarm }) {
  return (
    <View style={styles.container}>
      <View style={{ opacity: alarm.alarmReadState ? 0.3 : 1 }}>
        <Text style={styles.title}>{alarm.alarmTitle}</Text>
        <Text style={styles.content}>{alarm.alarmContent}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
  },
  title: {
    marginBottom: 5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 15,
  },
  content: {
    color: '#4A4A4A',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 15,
  },
});
