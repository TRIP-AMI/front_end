import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import Colors from '@/styles/colors';

export default function SelectBox({
  dates,
  selectedDate,
  setSelectedDate,
}: {
  dates: string[];
  selectedDate: string;
  setSelectedDate: (itemValue: string) => void;
}) {
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedDate}
      onValueChange={(itemValue) => setSelectedDate(itemValue)}
    >
      {dates.map((date) => (
        <Picker.Item key={date} label={date} value={date} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: '85%',
    backgroundColor: Colors.lineGray01,
  },
});
