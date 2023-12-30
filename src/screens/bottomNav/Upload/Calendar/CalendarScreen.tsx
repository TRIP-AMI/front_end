import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SelectButton from '@/components/atoms/Button/SelectButton';
import Spacing from '@/styles/spacing';
import useCalendar, { selectableMonthsList } from '@/hooks/calendarHook';
import CalendarPicker from '@/components/molecules/Calendar/CalendarPicker';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import useModalHook from '@/hooks/modalHook';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import {
  MainBottomTabNavigationProp,
  RootStackParamList,
} from '@/types/NavigationTypes';
import PickerSelectModal from '@/components/organisms/Modal/PickerSelectModal';

export type CalendarScreenProps = StackScreenProps<
  RootStackParamList,
  'Calendar'
>;

export default function CalendarScreen({ route }: CalendarScreenProps) {
  const { params } = route;
  const navigation = useNavigation<MainBottomTabNavigationProp>();
  const { selectDateList, setSelectDateList, deleteDate, checkConfirm } =
    useCalendar(params);
  // modal
  const { isVisible, onOpen, onClose } = useModalHook();
  const pickerList = selectableMonthsList();
  const defaultTime = dayjs().startOf('M').format();
  const [pickerSelectDate, setPickerSelectDate] = useState<string>(defaultTime);

  const handleModalOpen = () => {
    onOpen();
  };

  const confirmPress = () => {
    navigation.navigate('Upload', { availableDates: selectDateList });
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
        <CalendarPicker
          selectDate={pickerSelectDate}
          selectDateList={selectDateList}
          setSelectDateList={setSelectDateList}
        />
      </View>
      <SectionDividerBar style={{ marginVertical: 30 }} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: Spacing.IOS392Margin,
          paddingBottom: 40,
          justifyContent: 'space-between',
        }}
      >
        {/* select list */}
        <View>
          {selectDateList.map((date) => {
            return (
              <View
                key={dayjs(date).format()}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Text style={styles.selectListText}>
                  {dayjs(date).format('MMMM DD, YYYY')}
                </Text>
                <Pressable
                  onPress={() => {
                    deleteDate(date);
                  }}
                >
                  <Octicons
                    name='x-circle-fill'
                    size={18}
                    color='#ccc'
                    style={{ marginLeft: 20 }}
                  />
                </Pressable>
              </View>
            );
          })}
        </View>

        {/* Confirm */}
        <OutlinedButton
          content='Confirm'
          onPress={confirmPress}
          disabled={checkConfirm()}
        />
      </View>

      {/* modal */}
      <PickerSelectModal
        isVisible={isVisible}
        onClose={onClose}
        pickerList={pickerList}
        selectedValue={pickerSelectDate}
        setSelectedValue={setPickerSelectDate}
      />
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
  selectListText: {
    color: '#4A4A4A',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 22,
  },
});
