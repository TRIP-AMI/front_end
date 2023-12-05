import { useState, Dispatch, SetStateAction } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

export default function SelectBox({
  dates,
  selectedDate,
  setSelectedDate,
  selectOpen,
  setSelectOpen,
}: {
  dates: string[];
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  selectOpen: boolean;
  setSelectOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [items, setItems] = useState(
    dates.map((date) => ({ label: date, value: date })),
  );

  return (
    <View style={{ flex: 1 }}>
      <DropDownPicker
        open={selectOpen}
        value={selectedDate}
        items={items}
        setOpen={setSelectOpen}
        setValue={setSelectedDate}
        setItems={setItems}
        style={selectOpen ? styles.pickerOpened : styles.pickerClosed}
        textStyle={styles.itemText}
        placeholder='Available Dates (select one)'
        dropDownDirection='BOTTOM'
        dropDownContainerStyle={styles.dropDownContainer}
        containerStyle={{ flex: 1 }}
        listItemContainerStyle={styles.listContainer}
        listItemLabelStyle={{ color: 'black' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pickerClosed: {
    marginHorizontal: '7.5%',
    width: '85%',
    borderColor: Colors.lineGray01,
  },
  pickerOpened: {
    marginHorizontal: '7.5%',
    width: '85%',
    borderColor: Colors.main,
  },
  dropDownContainer: {
    flex: 1,
    marginHorizontal: '7.5%',
    width: '85%',
    borderRadius: 10,
    borderColor: Colors.main,
    // borderTopColor: 'transparent', => 적용 시 양 옆 라인 끊어져보이는 문제
  },
  listContainer: {
    height: 35,
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderColor: Colors.lineGray01,
  },
  itemText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: Colors.fontGray01,
  },
  modalTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    paddingVertical: 10,
  },
});
