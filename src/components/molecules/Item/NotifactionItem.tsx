import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import Alarm from '@/types/Notifcation';

export default function NotifactionItem({
  alarm,
  edit,
  deleteAlarm,
}: {
  alarm: Alarm;
  edit: boolean;
  deleteAlarm: (id: string) => void;
}) {
  const dateFormat = dayjs(alarm.alarmDate).format('HH:ss MM.DD');

  return (
    <View style={styles.container}>
      {/* left */}
      {edit && (
        <View style={{ paddingTop: 1, paddingRight: 20 }}>
          <Pressable
            onPress={() => {
              deleteAlarm(alarm.alarmId);
            }}
          >
            <Octicons name='x-circle-fill' size={18} color='#ccc' />
          </Pressable>
        </View>
      )}
      {/* right */}
      <View style={[styles.right]}>
        <View
          style={[{ flex: 8 }, { opacity: alarm.alarmReadState ? 0.3 : 1 }]}
        >
          <Text style={styles.title}>{alarm.alarmTitle}</Text>
          <Text style={styles.content}>{alarm.alarmContent}</Text>
        </View>
        <View style={{ flex: 2, flexDirection: 'row-reverse' }}>
          <Text style={styles.timeText}>{dateFormat}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
  },

  right: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15,
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
  timeText: {
    color: '#B9B9B9',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
  },
});
