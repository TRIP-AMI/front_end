import { View, StyleSheet, Modal, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import Dim from '@/components/atoms/Dim/Dim';

interface PickerSelectModalProps {
  isVisible: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectList: { label: string; value: any }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedValue: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedValue: (value: any) => void;
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
          <View style={styles.contentWrap}>
            {/* back */}
            <View style={{ flexDirection: 'row-reverse' }}>
              <Pressable
                onPress={onClose}
                style={{ marginTop: 20, marginRight: 27 }}
              >
                <AntDesign name='arrowright' size={24} color='black' />
              </Pressable>
            </View>
            {/* picker */}
            <Picker
              mode='dropdown'
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              {selectList.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
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
  contentWrap: {
    width: '100%',
    paddingBottom: 50,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#fff',
  },

  buttonWrap: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: 15,
    paddingVertical: 5,
  },
});
