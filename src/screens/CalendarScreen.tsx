import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import SelectButton from '@/components/atoms/Button/SelectButton';
import Spacing from '@/styles/spacing';
import { pickerDateList } from '@/hooks/calendarHook';
import selectCalendarList from '@/utils/recoil/calendar';
import CalendarPicker from '@/components/molecules/Calendar/CalendarPicker';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import pickerSelectValue, { pickerList } from '@/utils/recoil/picker';
import useModalHook from '@/hooks/modalHook';

export default function CalendarScreen() {
  const { setModalName } = useModalHook();
  const [selectDateList] = useRecoilState(selectCalendarList);
  const [pickerSelectDate, setPickerSelectDate] =
    useRecoilState(pickerSelectValue);
  const setPickerList = useSetRecoilState(pickerList);

  useEffect(() => {
    const defaultTime = dayjs().startOf('M').format();
    setPickerSelectDate(defaultTime);
    setPickerList(pickerDateList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalOpen = () => {
    setModalName('PICKER_SELECT');
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* text */}
        <Text style={styles.infoText}>You can choose up to five dates.</Text>

        {/* select box */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SelectButton
            title={dayjs(pickerSelectDate).format('MMMM / YYYY')}
            onPress={handleModalOpen}
          />
        </View>
        {/* calendar */}
        <CalendarPicker selectDate={pickerSelectDate} />
      </View>
      <SectionDividerBar style={{ marginVertical: 30 }} />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* select list */}
        {selectDateList.map((date) => {
          return (
            <Text key={dayjs(date).format()} style={styles.selectListText}>
              {dayjs(date).format('MMMM DD, YYYY')}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  infoText: {
    marginVertical: 30,
    color: '#8E8E8E',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 22,
  },
  selectBoxWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '48.5%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 5,
  },
  selectListText: {
    color: '#4A4A4A',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 22,
  },
});
