import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/styles/colors';

type Date = {
  id: number;
  date: string;
  person: number;
};

export default function SelectBox({
  dates,
  setSelectedDate,
  selectOpen,
  setSelectOpen,
}: {
  dates: Date[];
  setSelectedDate: Dispatch<SetStateAction<string>>;
  selectOpen: boolean;
  setSelectOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <View style={selectOpen && styles.pickerOpened}>
      <Pressable
        onPress={() => setSelectOpen(!selectOpen)}
        style={[styles.picker, selectOpen && { borderWidth: 0 }]}
      >
        <Text style={styles.itemText}>Available Dates (select one)</Text>
        <Ionicons
          name={selectOpen ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={Colors.fontGray05}
          style={{ marginLeft: 'auto' }}
        />
      </Pressable>
      {selectOpen && (
        <View>
          {dates.map((date) => (
            <Pressable
              key={date.id}
              onPress={() => {
                setSelectedDate(date.date);
                setSelectOpen(false);
              }}
              style={styles.listContainer}
              disabled={date.person === 0}
            >
              <Text style={[styles.itemText, { color: Colors.fontGray02 }]}>
                {date.date}
              </Text>
              <Text style={styles.itemText}>{`${date.person} Left`}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    borderColor: Colors.lineGray04,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  pickerOpened: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderTopColor: Colors.lineGray04,
  },
  itemText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.fontGray05,
  },
});
