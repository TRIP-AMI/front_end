import { Picker } from '@react-native-picker/picker';

interface PickerSelectModalProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function PickerSelectModal({
  selectedValue,
  setSelectedValue,
}: PickerSelectModalProps) {
  return (
    <Picker
      mode='dropdown'
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}
      style={{
        borderColor: '#000',
        borderWidth: 5,
        marginTop: 100,
        width: '100%',
      }}
    >
      <Picker.Item label='2023' value='2023' />
      <Picker.Item label='2024' value='2024' />
    </Picker>
  );
}
