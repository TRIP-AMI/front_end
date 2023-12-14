import { View, StyleSheet, Modal, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Dim from '@/components/atoms/Dim/Dim';

interface PickerSelectModalProps {
  isVisible: boolean;
  onClose: () => void;
  selectList: { label: string; value: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function PickerSelectModal({
  isVisible,
  onClose,
  selectList,
  selectedValue,
  setSelectedValue,
}: PickerSelectModalProps) {
  return (
    <Modal visible={isVisible} transparent>
      {/* dim */}
      <Dim />
      {/* content */}
      <Modal animationType='slide' visible={isVisible} transparent>
        <View style={styles.contentLayoutView}>
          <View style={{ width: '90%', marginBottom: 50 }}>
            <Picker
              mode='dropdown'
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={{
                borderRadius: 12,
                backgroundColor: '#fff',
              }}
            >
              {selectList.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
            <View style={styles.buttonWrap}>
              <Button title='Done' onPress={onClose} />
            </View>
          </View>
        </View>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  dim: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  contentLayoutView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonWrap: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 15,
    paddingVertical: 5,
  },
});
