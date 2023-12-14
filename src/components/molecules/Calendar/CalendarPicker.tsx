import { View, Text, StyleSheet, Pressable } from 'react-native';
import useCalendar from '@/hooks/calendarHook';

const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function CalendarPicker() {
  const { calculateDateList } = useCalendar();

  const Y = 2023;
  const M = 12;

  const randerDateList = calculateDateList({ Y, M });

  return (
    <View style={styles.wrap}>
      {randerDateList.map((list, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <View key={index}>
            {/* header */}
            <Text style={styles.dayFont}>{dayName[index]}</Text>
            {/* date */}
            <View
              style={{
                justifyContent: 'space-between',
              }}
            >
              {list.map((date) => {
                return (
                  <Pressable key={date + Math.random()}>
                    <Text style={styles.dateFont}>{date}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  dayFont: {
    paddingHorizontal: 7,
    color: '#A1A5AE',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: -0.26,
  },
  dateFont: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 40,
  },
});
