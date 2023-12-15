import { View, Text, StyleSheet } from 'react-native';

import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { StatusBar } from 'expo-status-bar';
import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';
import Spacing from '@/styles/spacing';
import useModalHook from '@/hooks/modalHook';
import PickerSelectModal from './PickerSelectModal';
import SelectButton from '@/components/atoms/Button/SelectButton';
import CalendarPicker from '@/components/molecules/Calendar/CalendarPicker';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import useCalendar, { pickerDateList } from '@/hooks/calendarHook';
import selectCalendarList from '@/utils/recoil/calendar';

// TODO: 중운아 리팩토링 해야지?

export default function CalendarModal() {
  const { pickerSelectDate, setPickerSelectDate } = useCalendar();
  const [selectDateList] = useRecoilState(selectCalendarList);

  const pickerList = pickerDateList();

  const {
    isVisible: pickerModal,
    onOpen: pickerModalOpen,
    onClose: pickerModalClose,
  } = useModalHook();

  return (
    <BasicFullScreenModal modalTitle='Available Dates'>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* text */}
        <Text style={styles.infoText}>You can choose up to five dates.</Text>

        {/* select box */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SelectButton
            title={dayjs(pickerSelectDate).format('MMMM / YYYY')}
            onPress={pickerModalOpen}
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

      {/* modal */}
      <PickerSelectModal
        isVisible={pickerModal}
        onClose={pickerModalClose}
        selectList={pickerList}
        selectedValue={pickerSelectDate}
        setSelectedValue={setPickerSelectDate}
      />
    </BasicFullScreenModal>
  );
}

const styles = StyleSheet.create({
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
