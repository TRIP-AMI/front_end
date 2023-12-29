import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import BasicBotoomSheetModal from '@/components/atoms/Modal/BasicBotoomSheetModal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Value = any;

export default function PickerSelectModal({
  isVisible,
  onClose,
  pickerList,
  selectedValue,
  setSelectedValue,
}: {
  isVisible: boolean;
  onClose: () => void;
  pickerList: { label: string; value: Value }[];
  selectedValue: Value;
  setSelectedValue: (value: Value) => void;
}) {
  return (
    <BasicBotoomSheetModal isVisible={isVisible} onClose={onClose}>
      {/* picker */}
      <View style={{ paddingBottom: 30 }}>
        <Picker
          mode='dropdown'
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {pickerList.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
    </BasicBotoomSheetModal>
  );
}
