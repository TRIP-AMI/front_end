import { View, Text, StyleSheet, Alert } from 'react-native';
import { useRecoilState } from 'recoil';
import { Dayjs } from 'dayjs';
import { calculateDateList } from '@/hooks/calendarHook';
import CalendarPressDate from '@/components/atoms/Press/CalendarPressDate';
import selectCalendarList from '@/utils/recoil/calendar';

const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function CalendarPicker({ selectDate }: { selectDate: string }) {
  const randerDateList = calculateDateList({ selectDate });
  const [isList, setIsList] = useRecoilState(selectCalendarList);

  const isDateSelected = (list: string[], data: Dayjs): boolean => {
    return list.findIndex((date) => date === data.format()) !== -1;
  };

  const updateItem = (dayjsForm: Dayjs) => {
    if (isList.length >= 5) {
      // TODO: toast 추후 변경필요
      Alert.alert('', 'You have selected all the dates. (max 5)', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return;
    }
    setIsList((prev) => [...prev, dayjsForm.format()]);
  };

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
              {list.map((item) => {
                return (
                  <CalendarPressDate
                    key={Math.random()}
                    item={item}
                    conPress={updateItem}
                    active={isDateSelected(isList, item.date)}
                  />
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
