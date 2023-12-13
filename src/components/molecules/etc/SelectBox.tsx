import { useState, Dispatch, SetStateAction } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
        showTickIcon={false}
        ArrowUpIconComponent={() => (
          <Ionicons name='chevron-up' size={20} color={Colors.fontGray05} />
        )}
        ArrowDownIconComponent={() => (
          <Ionicons name='chevron-down' size={20} color={Colors.fontGray05} />
        )}
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
        listItemLabelStyle={{ color: Colors.fontGray01 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pickerClosed: {
    marginHorizontal: '6%',
    height: 40,
    width: '88%',
    borderColor: Colors.lineGray04,
  },
  pickerOpened: {
    marginHorizontal: '6%',
    height: 40,
    width: '88%',
    borderColor: Colors.primary,
  },
  dropDownContainer: {
    height: 200,
    marginHorizontal: '6%',
    width: '88%',
    borderRadius: 5,
    borderColor: Colors.primary,
    borderTopColor: 'transparent', // => 적용 시 양 옆 라인 끊어져보이는 문제
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderColor: Colors.lineGray04,
  },
  itemText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: Colors.fontGray05,
  },
});
