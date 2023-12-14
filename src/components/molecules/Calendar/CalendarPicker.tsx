import { View, Text, StyleSheet } from 'react-native';
import useCalendar from '@/hooks/calendarHook';
import CalendarPressDate from '@/components/atoms/Press/CalendarPressDate';

const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function CalendarPicker({ Y, M }: { Y: number; M: number }) {
  const { calculateDateList } = useCalendar();

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
                return <CalendarPressDate key={Math.random()} item={date} />;
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
    marginTop: 20,
  },
  dayFont: {
    marginBottom: 20,
    paddingHorizontal: 7,
    color: '#A1A5AE',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: -0.26,
  },
  dateFont: {
    color: '#1E1E20',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 40,
  },
  dateFontDisabled: {
    color: '#A1A5AE',
  },
});
